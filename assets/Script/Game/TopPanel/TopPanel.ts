export default class TopPanel {

    private _topPanel: cc.Node;
    private _photo: cc.Node;
    private _name: cc.Node;
    private _balanceLabe: cc.Node;

    private _balance: number;

    constructor(root: cc.Node) {
        this._topPanel = root.getChildByName('TopPanel');
        this._balanceLabe = this._topPanel.getChildByName('UserBalanceLable');
    }

    public decreaseBalance(bet: number): void {
        this._balance -= bet;
        this.setBalance(this._balance);
    }

    public setBalance(balance: number): void {
        this._balance = balance;
        this._balanceLabe.getComponent(cc.Label).string = this._balance.toString();
    }
}
