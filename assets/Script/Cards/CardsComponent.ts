import Card from './Card';

const {ccclass, property} = cc._decorator;

@ccclass
export default class CardsComponent extends cc.Component {

    @property(Card)
    public cardsPrefab: Array<Card> = [];
}
