import ChipComponent from '../../Chip/ChipComponent';
import BlackJack from '../BlackJack';

export default class ActionPanel {

    private _actionPanelNode: cc.Node;
    private _betList: cc.Node;
    private _chipPrefab: cc.Prefab;

    private dealBtn: cc.Node;
    private hitBtn: cc.Node;
    private standBtn: cc.Node;
    private doubleBtn: cc.Node;
    private splitBtn: cc.Node;
    private _roundBetLableNode: cc.Node;

    private _roundBet: number;

    constructor(root: cc.Node) {
        this._actionPanelNode = root.getChildByName('ActionPanel');
        this._betList = this._actionPanelNode.getChildByName('BetList1');
        this._roundBetLableNode = this._actionPanelNode.getChildByName('RoundBetLable');
        this._chipPrefab = root.getComponent(BlackJack).chipPrefab;

        this._roundBet = 0;
    }

    public init(): void {
        this.initUIElements();
        this.initBetList();
        this.registerListeners();
    }

    public deal(): void {
        this.dealBtn.active = true;
        this.hitBtn.active = false;
        this.standBtn.active = false;
        this.doubleBtn.active = false;
        this.splitBtn.active = false;
    }

    public startPlay(): void {
        this.dealBtn.active = false;
        this.hitBtn.active = true;
        this.standBtn.active = true;
        this.doubleBtn.active = true;
    }

    public doubleDisable(): void {
        this.doubleBtn.active = false;
    }

    public splitEnable(): void {
        this.splitBtn.active = true;
    }

    public splitDisable(): void {
        this.splitBtn.active = false;
    }

    private initUIElements(): void {
        this.dealBtn = this._actionPanelNode.getChildByName('DealBtn');
        this.hitBtn = this._actionPanelNode.getChildByName('HitBtn');
        this.standBtn = this._actionPanelNode.getChildByName('StandBtn');
        this.doubleBtn = this._actionPanelNode.getChildByName('DoubleBtn');
        this.splitBtn = this._actionPanelNode.getChildByName('SplitBtn');
    }

    private initBetList(): void {
        const bets: Array<number> = [1, 2, 5, 10, 25, 50, 100, 250, 500, 1000];
        // const chip: ChipComponent = this.actionPanelNode.getComponent(ChipComponent);
        bets.forEach((bet, index) => {
            const newBtn = cc.instantiate(this._chipPrefab);
            newBtn.getComponent(ChipComponent).value = bet;
            newBtn.y = -(newBtn.height / 2 + newBtn.height * index);
            this._betList.getChildByName('View').getChildByName('Content').height = (bets.length) * newBtn.height;
            newBtn.getChildByName('Label').getComponent(cc.Label).string = bet.toString();
            this._betList.getChildByName('View').getChildByName('Content').addChild(newBtn);

            newBtn.on(cc.Node.EventType.TOUCH_END, (event) => {
                this._roundBet += (event.currentTarget as cc.Node).getComponent(ChipComponent).value;
                this._roundBetLableNode.getComponent(cc.Label).string = this._roundBet.toString();
                console.log(this._roundBet);
            });
        });

        // bets.forEach((bet, index) => {
        //     const newBtn = cc.instantiate(this._chipPrefab);
        //     newBtn.getComponent(ChipComponent).value = bet;
        //     // newBtn.y = -(newBtn.height / 2 + newBtn.height * index);
        //     // this._betList.getChildByName('View').getChildByName('Content').height = (bets.length) * newBtn.height;
        //     newBtn.getChildByName('Label').getComponent(cc.Label).string = bet.toString();
        //     this._betList.addPage(newBtn);

        //     newBtn.on(cc.Node.EventType.TOUCH_END, (event) => {
        //         this._roundBet += (event.currentTarget as cc.Node).getComponent(ChipComponent).value;
        //         this._roundBetLableNode.getComponent(cc.Label).string = this._roundBet.toString();
        //         console.log(this._roundBet);
        //     });
        // });
    }

    private registerListeners(): void {
        this.dealBtn.on(cc.Node.EventType.TOUCH_END, this.dealBtnTouched.bind(this));
        this.hitBtn.on(cc.Node.EventType.TOUCH_END, this.hitBtnTouched.bind(this));
        this.standBtn.on(cc.Node.EventType.TOUCH_END, this.standBtnTouched.bind(this));
        this.doubleBtn.on(cc.Node.EventType.TOUCH_END, this.doubleBtnTouched.bind(this));
        this.splitBtn.on(cc.Node.EventType.TOUCH_END, this.splitBtnTouched.bind(this));
    }

    private dealBtnTouched(event: CustomEvent): void {
        // temp need add notif manager
        this._actionPanelNode.emit('deal', {bet: this._roundBet});
    }

    private hitBtnTouched(event: CustomEvent): void {
        // temp need add notif manager
        this._actionPanelNode.emit('hit');
    }

    private standBtnTouched(event: CustomEvent): void {
        // temp need add notif manager
        this._actionPanelNode.emit('stand');
    }

    private doubleBtnTouched(event: CustomEvent): void {
        // temp need add notif manager
        this._actionPanelNode.emit('double');
    }

    private splitBtnTouched(event: CustomEvent): void {
        // temp need add notif manager
        this._actionPanelNode.emit('split');
    }
}
