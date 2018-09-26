import ChipComponent from '../../Chip/ChipComponent';
import BlackJack from '../BlackJack';

export default class ActionPanel {

    private actionPanelNode: cc.Node;
    private _betList: cc.PageView;
    private _chipPrefab: cc.Prefab;

    private dealBtn: cc.Node;
    private hitBtn: cc.Node;
    private standBtn: cc.Node;
    private doubleBtn: cc.Node;
    private splitBtn: cc.Node;

    constructor(root: cc.Node) {
        this.actionPanelNode = root.getChildByName('ActionPanel');
        this._betList = this.actionPanelNode.getChildByName('BetList2').getComponent(cc.PageView);

        this._chipPrefab = root.getComponent(BlackJack).chipPrefab;
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

    public continuePlay(): void {
        this.doubleBtn.active = false;
    }

    public splitEnable(): void {
        this.splitBtn.active = true;
    }

    public splitDisable(): void {
        this.splitBtn.active = false;
    }

    private initUIElements(): void {
        this.dealBtn = this.actionPanelNode.getChildByName('DealBtn');
        this.hitBtn = this.actionPanelNode.getChildByName('HitBtn');
        this.standBtn = this.actionPanelNode.getChildByName('StandBtn');
        this.doubleBtn = this.actionPanelNode.getChildByName('DoubleBtn');
        this.splitBtn = this.actionPanelNode.getChildByName('SplitBtn');
    }

    private initBetList(): void {
        const bets: Array<number> = [1, 2, 5, 10, 25, 50, 100, 250, 500, 1000];
        // const chip: ChipComponent = this.actionPanelNode.getComponent(ChipComponent);
        // bets.forEach((bet, index) => {
        //     const newBtn = cc.instantiate(this._chipPrefab);
        //     newBtn.getComponent(ChipComponent).value = bet;
        //     newBtn.y = -(newBtn.height / 2 + newBtn.height * index);
        //     this._betList.getChildByName('View').getChildByName('Content').height = (bets.length) * newBtn.height;
        //     newBtn.getChildByName('Label').getComponent(cc.Label).string = bet.toString();
        //     this._betList.getChildByName('View').getChildByName('Content').addChild(newBtn);

        //     newBtn.on(cc.Node.EventType.TOUCH_END, (event) => {
        //         console.log((event.currentTarget as cc.Node).getComponent(ChipComponent).value);
        //     });
        // });

        bets.forEach((bet, index) => {
            const newBtn = cc.instantiate(this._chipPrefab);
            newBtn.getComponent(ChipComponent).value = bet;
            // newBtn.y = -(newBtn.height / 2 + newBtn.height * index);
            // this._betList.getChildByName('View').getChildByName('Content').height = (bets.length) * newBtn.height;
            newBtn.getChildByName('Label').getComponent(cc.Label).string = bet.toString();
            this._betList.addPage(newBtn);

            newBtn.on(cc.Node.EventType.TOUCH_END, (event) => {
                console.log((event.currentTarget as cc.Node).getComponent(ChipComponent).value);
            });
        });
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
        this.actionPanelNode.emit('deal');
    }

    private hitBtnTouched(event: CustomEvent): void {
        // temp need add notif manager
        this.actionPanelNode.emit('hit');
    }

    private standBtnTouched(event: CustomEvent): void {
        // temp need add notif manager
        this.actionPanelNode.emit('stand');
    }

    private doubleBtnTouched(event: CustomEvent): void {
        // temp need add notif manager
        this.actionPanelNode.emit('double');
    }

    private splitBtnTouched(event: CustomEvent): void {
        // temp need add notif manager
        this.actionPanelNode.emit('split');
    }
}
