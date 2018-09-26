const {ccclass, property} = cc._decorator;



@ccclass

export default class ChipComponent extends cc.Component {



    @property(cc.Prefab)

    public chipPrefab: cc.Prefab = null;



    public value: number;

}

