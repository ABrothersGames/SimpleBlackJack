import PrefabManager from '../Prefabs/PrefabManager';
import UserDto from '../User/Dto/UserDto';
const {ccclass, property} = cc._decorator;

@ccclass
export default class Preloader extends cc.Component {

    @property(cc.Prefab)
    public loginPopupPrefab: cc.Prefab = null;

    public onLoad(): void {
        this.checkUserInLocalStore();
    }

    private checkUserInLocalStore() {
        const userData = cc.sys.localStorage.getItem('userData');

        if (userData === null || userData === undefined) {
            this.node.getChildByName('LodingBar').active = false;
            const popup = cc.instantiate(this.loginPopupPrefab);
            popup.setAnchorPoint(cc.v2(0.5, 0.5));
            popup.setPosition(cc.v2(0, 0));
            this.node.addChild(popup);
        } else {
            this.verifyUser(userData);
        }
    }

    private verifyUser(userData: any): void {
        cc.log(userData);
        // cc.director.loadScene('Game');
    }
}
