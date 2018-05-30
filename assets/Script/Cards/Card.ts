const {ccclass, property} = cc._decorator;

@ccclass('Card')
export default class Card {

    @property(cc.SpriteFrame)
    public cards: cc.SpriteFrame = null;

    @property(Number)
    public value: number = 0;

    @property(String)
    public id: string = '';
}
