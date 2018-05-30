import Hand from './Hand';

export default class Diller {

    private _playerField: cc.Node;
    private _hands: Array<Hand>;

    constructor(root: cc.Node) {

        this._playerField = root.getChildByName('DillerCardField');
        this._hands = new Array<Hand>();
    }

    public setHand(hand: Hand): void {
        this._hands.push(hand);
    }

    public getHand(id: number): Hand {
        return this._hands.find((hand) => hand.id === id);
    }

    public deleteHand(index: number): void {
        this._hands.splice(index, 1);
    }

    public setCardsToHand(handId: number, cards: Array<cc.Node>): void {
        this.getHand(handId).cards = cards;
    }

    public setWinValue(handId: number, winValue: number): void {
        this.getHand(handId).winValue = winValue;
    }

    public showHand(handId: number): void {
        let cardsBox = this._playerField.getChildByName(`DillerCardsBox_${handId}`);
        cc.log(cardsBox);
        if (cardsBox === null) {
            cc.log('New card box');
            cardsBox = new cc.Node(`DillerCardsBox_${handId}`);
            cardsBox.x = handId * 200;
            this._hands[handId].cards.forEach((card, index) => {
                card.setScale(0.1, 0.1);
                card.x = index * 20;
                cardsBox.addChild(card);
            });

            const lableNode = new cc.Node('Lable');
            lableNode.x = -80;
            lableNode.addComponent(cc.Label).string = this._hands[handId].winValue.toString();
            lableNode.color = cc.color(255, 255, 0, 255);
            cardsBox.addChild(lableNode);

            this._playerField.addChild(cardsBox);
        } else {
            cc.log('Update card box');
            const posX = (this._hands[handId].cards.length - 1) * 20;
            const card = this._hands[handId].cards[this._hands[handId].cards.length - 1];
            card.setScale(0.1, 0.1);
            card.x = posX;
            cardsBox.addChild(card);

            cardsBox.getChildByName('Lable').getComponent(cc.Label).string = this._hands[handId].winValue.toString();
        }
    }

    // public showHands(): void {
    //     let tempX = 0;
    //     this._hands.forEach((hand, index) => {
    //         hand.cards.forEach((card) => {
    //             card.setScale(0.1, 0.1);
    //             card.x = tempX;
    //             tempX += 20;
    //             this._playerField.addChild(card);
    //         });
    //     });
    // }

    // public showValue(): void {
    //     this._hands.forEach((hand, index) => {
    //         hand.cards.forEach((card) => {
    //             const lableNode = new cc.Node('LableValue');
    //             lableNode.addComponent(cc.Label).string = hand.winValue.toString();
    //             lableNode.parent = this._playerField;
    //             lableNode.x = -100;
    //         });
    //     });
    // }

    public clear(): void {
        this._playerField.removeAllChildren();
    }

    public clearHeands(): void {
        this._hands.length = 0;
    }
}
