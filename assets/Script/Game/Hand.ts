import Card from '../Cards/Card';

export default class Hand {
    public id: number;
    public cards: Array<cc.Node>;
    public winValue: number;
    public isSpliting: boolean;
    public isFinished: boolean;
}
