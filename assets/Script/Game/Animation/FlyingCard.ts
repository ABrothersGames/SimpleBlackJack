const {ccclass, property} = cc._decorator;
 // tslint:disable:no-magic-numbers
@ccclass
export default class FlyingCard extends cc.Component {

    @property(cc.Prefab)
    public cardPrefab: cc.Prefab = null;

    public onLoad() {

    }

    public start() {
    }

    public flyCard(startPoint: cc.Vec2, endPoint: cc.Vec2): void {
        const putToStartPosition: cc.ActionInterval = cc.moveTo(0, startPoint);
        const fly: cc.ActionInterval = cc.moveTo(300, endPoint);
        const showCard: cc.ActionInterval = cc.rotateTo(300, 0, 180);

        const card = cc.instantiate(this.cardPrefab);
        card.runAction(cc.sequence(putToStartPosition, fly, showCard));
    }

    // update (dt) {}
}
