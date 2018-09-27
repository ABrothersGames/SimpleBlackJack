import CardsComponent from '../Cards/CardsComponent';
import FakeServer from '../Network/FakeServer/FakeServer';
import ActionPanel from './ActionPanel/ActionPanel';
import Diller from './Diller';
import Hand from './Hand';
import Player from './Player';
import TopPanel from './TopPanel/TopPanel';

const {ccclass, property} = cc._decorator;

@ccclass
export default class BlackJack extends cc.Component {

    @property(cc.Prefab)
    public cardPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    public chipPrefab: cc.Prefab = null;

    private fs: FakeServer;
    private actionPanel: ActionPanel;
    private _topPanel: TopPanel;
    private player: Player;
    private diller: Diller;

    // LIFE-CYCLE CALLBACKS:

    public onLoad() {
        this.fs = new FakeServer();

        // TODO: temp place for connect user need move to register this scene logic
        const userInfo = this.fs.startGame('userId');

        this.actionPanel = new ActionPanel(this.node);
        this._topPanel = new TopPanel(this.node);
        this._topPanel.setBalance(userInfo.balance);
        this.actionPanel.init();

        this.player = new Player(this.node);
        this.diller = new Diller(this.node);

        this.registerListeners();
    }

    public start() {
        this.actionPanel.deal();
    }

    private registerListeners(): void {
        this.node.getChildByName('ActionPanel').on('deal', this.deal.bind(this));
        this.node.getChildByName('ActionPanel').on('hit', this.hit.bind(this));
        this.node.getChildByName('ActionPanel').on('stand', this.stand.bind(this));
        this.node.getChildByName('ActionPanel').on('double', this.hit.bind(this));
        this.node.getChildByName('ActionPanel').on('split', this.split.bind(this));
    }

    private deal(event): void {

        this.player.clear();
        this.player.clearHeands();
        this.player.handMarker = 0;
        this.diller.clear();
        this.diller.clearHeands();

        // fake
        const response = this.fs.firstHandOver(event.bet);
        this._topPanel.setBalance(response.balance);

        response.user.hands.forEach((hand, index) => {
            const playerHand = new Hand();
            playerHand.id = index;
            playerHand.cards = this.createHand(hand.cards);
            playerHand.winValue = hand.value;
            // need add if black jack so to stand state
            playerHand.isSpliting = hand.split;
            playerHand.isFinished = false;
            this.player.setHand(playerHand);

            // if (hand.split) {
            //     this.actionPanel.splitEnable();
            // }

            this.player.showHand(index);
        });

        response.diller.hands.forEach((hand, index) => {
            const dillerHand = new Hand();
            dillerHand.id = index;
            dillerHand.cards = this.createHand(hand.cards);
            dillerHand.winValue = hand.value; // response.user.value;
            this.diller.setHand(dillerHand);

            // shadow card
            const card = cc.instantiate(this.cardPrefab);
            const spite = card.getComponent(CardsComponent).cardsPrefab.find((element) => element.id === 'blue_back');
            card.getComponent(cc.Sprite).spriteFrame = spite.cards;
            dillerHand.cards.push(card);

            this.diller.showHand(index);
        });

        // this.player.showHands();
        // this.player.showValue();
        // this.diller.showHands();
        // this.diller.showValue();

        this.actionPanel.startPlay();

        this.checkForSplit(this.player.handMarker);
    }

    private checkForSplit(id: number): void {

        if (this.player.getHand(id).isSpliting) {
            this.actionPanel.splitEnable();
        } else {
            this.actionPanel.splitDisable();
        }
    }

    private hit(event): void {

        const response = this.fs.hit(this.player.handMarker);
        this.actionPanel.splitDisable();
        this.actionPanel.doubleDisable();
        // response.user.hands.forEach((hand, index) => {
        //     const playerHand = this.player.getHand(index);
        //     cc.log(hand.cards);
        //     playerHand.cards = this.createHand(hand.cards);
        //     cc.log(hand.value);
        //     playerHand.winValue = hand.value;
        // });

        const playerHand = this.player.getHand(this.player.handMarker);
        cc.log(this.player.handMarker);
        cc.log(response.user.hands[this.player.handMarker]);
        // playerHand.cards = this.createHand(response.user.hands[this.player.handMarker].cards);
        playerHand.cards.push(this.cerateCardForHand(response.user.hands[this.player.handMarker].cards));
        playerHand.winValue = response.user.hands[this.player.handMarker].value;

        // this.player.clear();
        // this.player.showValue();
        this.player.showHand(this.player.handMarker);

        if (response.user.hands[this.player.handMarker].state === 'lose') {
            this.stand();
        }
    }

    private stand(): void {
        this.player.currentHandFinished();
        if (this.player.isAllHandsFinished()) {
            this.diller.getHand(0).cards.pop();
            this.dillerPlay();
        } else {
            this.player.playNextHand();
            this.checkForSplit(this.player.handMarker);
        }
    }

    private dillerPlay(): void {
        console.log('dillerPlay');

        const response = this.fs.stand();
        // this.diller.clear();

        // response.diller.hands.forEach((hand, index) => {
        //     const dillerHand = this.diller.getHand(index);
        //     dillerHand.cards = this.createHand(hand.cards);
        //     dillerHand.winValue = hand.value; // response.user.value;
        //     this.diller.showHand(0);
        // });

        const dillerHand = this.diller.getHand(0);
        // cc.log(dillerHand);
        dillerHand.cards.push(this.cerateCardForHand(response.diller.hands[0].cards));
        dillerHand.winValue = response.diller.hands[0].value;
        this.diller.showHand(0);

        if (response.diller.hands[0].state === 'play') {
            this.dillerPlay();
        }

        // tslint:disable-next-line:prefer-switch
        if (response.diller.hands[0].state === 'lose' ||
            response.diller.hands[0].state === 'dead_heat' ||
            response.diller.hands[0].state === 'win') {
            this.actionPanel.deal();
        }
    }

    private double(): void {

    }

    private split(): void {
        // temp need send(set) choose hand id
        const response = this.fs.split(this.player.handMarker);
        this.player.clear();

        response.user.hands.forEach((hand, index) => {
            const playerHand = this.player.getHand(index);

            if (playerHand === undefined) {
                const newHand = new Hand();
                newHand.id = index;
                newHand.isSpliting = hand.split;
                newHand.isFinished = false;
                newHand.cards = this.createHand(hand.cards);
                newHand.winValue = hand.value;
                this.player.setHand(newHand);
            } else {
                playerHand.isSpliting = hand.split;
                playerHand.isFinished = false;
                playerHand.cards = this.createHand(hand.cards);
                playerHand.winValue = hand.value;
            }

            // if (hand.split) {
            //     this.actionPanel.splitEnable();
            // } else {
            //     this.actionPanel.splitDisable();
            // }

            this.player.showHand(index);
        });

        this.checkForSplit(this.player.handMarker);
        // this.player.showValue();
    }

    // create hand card instanse
    private createHand(cards: Array<any>): Array<cc.Node> {
        const handCards = new Array<cc.Node>();

        cards.forEach((handCard) => {
            const card = cc.instantiate(this.cardPrefab);
            const spite = card.getComponent(CardsComponent).cardsPrefab.find((cardd) => cardd.id === handCard.name);
            card.getComponent(cc.Sprite).spriteFrame = spite.cards;
            handCards.push(card);
        });

        return handCards;
    }

    private cerateCardForHand(handCard: any): cc.Node {
        const card = cc.instantiate(this.cardPrefab);
        const spite = card.getComponent(CardsComponent).cardsPrefab.find((cardd) => cardd.id === handCard[handCard.length - 1].name);
        card.getComponent(cc.Sprite).spriteFrame = spite.cards;

        return card;
    }
}

// var url = 'http://localhost:8000/';
// var req = cc.loader.getXMLHttpRequest();
// req.open('GET', url);
// req.send();
// req.onreadystatechange = function(){
//     console.log(req.response);
// }
