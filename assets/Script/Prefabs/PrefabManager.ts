const {ccclass, property} = cc._decorator;

@ccclass
export default class PrefabManager {

    private static _instanse: PrefabManager;
    private _prefabs: Map<string, cc.Prefab>;
    constructor() {
        if (PrefabManager._instanse === undefined) {
            PrefabManager._instanse = new PrefabManager();
            this._prefabs = new Map<string, cc.Prefab>();
        } else {
            throw(new Error('PrefabManager instanse already exist'));
        }
    }

    public static get instanse(): PrefabManager {

        if (PrefabManager._instanse === undefined) {
            return new PrefabManager();
        } else {
            return PrefabManager._instanse;
        }
    }

    public addPrefab(key: string, prefab: cc.Prefab): void {
        this._prefabs.set(key, prefab);
    }

    public getPrefab(key: string): cc.Prefab {
        return this._prefabs.get(key);
    }
}
