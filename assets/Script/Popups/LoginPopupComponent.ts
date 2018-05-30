const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginPopupComponent extends cc.Component {

    @property(cc.EditBox)
    public login: cc.EditBox = null;

    @property(cc.EditBox)
    public password: cc.EditBox = null;

    public sendUserData(): void {
        const userData = {
            login: this.login.string,
            password: this.password.string
        };
        const reqData = JSON.stringify(userData);
        const url = 'http://localhost:8000/userData/';
        const req = cc.loader.getXMLHttpRequest();

        req.open('POST', url);
        req.send(reqData);
        req.onreadystatechange = () => {

            cc.log(req.response);
        };
    }
}
