// tslint:disable:no-magic-numbers
export default class FakeServer {

    public cardDeck = [
        {name: '2D', value: 2, type: 'two'},
        {name: '3D', value: 3, type: 'tree'},
        {name: '4D', value: 4, type: 'four'},
        {name: '5D', value: 5, type: 'five'},
        {name: '6D', value: 6, type: 'six'},
        {name: '7D', value: 7, type: 'seven'},
        {name: '8D', value: 8, type: 'eight'},
        {name: '9D', value: 9, type: 'nine'},
        {name: '10D', value: 10, type: 'ten'},
        {name: 'JD', value: 10, type: 'jack'},
        {name: 'QD', value: 10, type: 'quen'},
        {name: 'KD', value: 10, type: 'king'},
        {name: 'AD', value: 1, value2: 11, type: 'ace'},
        {name: '2H', value: 2, type: 'two'},
        {name: '3H', value: 3, type: 'three'},
        {name: '4H', value: 4, type: 'four'},
        {name: '5H', value: 5, type: 'five'},
        {name: '6H', value: 6, type: 'six'},
        {name: '7H', value: 7, type: 'seven'},
        {name: '8H', value: 8, type: 'eight'},
        {name: '9H', value: 9, type: 'nine'},
        {name: '10H', value: 10, type: 'ten'},
        {name: 'JH', value: 10, type: 'jack'},
        {name: 'QH', value: 10, type: 'quen'},
        {name: 'KH', value: 10, type: 'king'},
        {name: 'AH', value: 1, value2: 11, type: 'ace'},
        {name: '2S', value: 2, type: 'two'},
        {name: '3S', value: 3, type: 'three'},
        {name: '4S', value: 4, type: 'four'},
        {name: '5S', value: 5, type: 'five'},
        {name: '6S', value: 6, type: 'six'},
        {name: '7S', value: 7, type: 'seven'},
        {name: '8S', value: 8, type: 'eight'},
        {name: '9S', value: 9, type: 'nine'},
        {name: '10S', value: 10, type: 'ten'},
        {name: 'JS', value: 10, type: 'jack'},
        {name: 'QS', value: 10, type: 'quen'},
        {name: 'KS', value: 10, type: 'king'},
        {name: 'AS', value: 1, value2: 11, type: 'ace'},
        {name: '2C', value: 2, type: 'two'},
        {name: '3C', value: 3, type: 'three'},
        {name: '4C', value: 4, type: 'four'},
        {name: '5C', value: 5, type: 'five'},
        {name: '6C', value: 6, type: 'six'},
        {name: '7C', value: 7, type: 'seven'},
        {name: '8C', value: 8, type: 'eight'},
        {name: '9C', value: 9, type: 'nine'},
        {name: '10C', value: 10, type: 'ten'},
        {name: 'JC', value: 10, type: 'jack'},
        {name: 'QC', value: 10, type: 'quen'},
        {name: 'KC', value: 10, type: 'king'},
        {name: 'AC', value: 1, value2: 11, type: 'ace'},
        {name: '2D', value: 2, type: 'two'},
        {name: '3D', value: 3, type: 'tree'},
        {name: '4D', value: 4, type: 'four'},
        {name: '5D', value: 5, type: 'five'},
        {name: '6D', value: 6, type: 'six'},
        {name: '7D', value: 7, type: 'seven'},
        {name: '8D', value: 8, type: 'eight'},
        {name: '9D', value: 9, type: 'nine'},
        {name: '10D', value: 10, type: 'ten'},
        {name: 'JD', value: 10, type: 'jack'},
        {name: 'QD', value: 10, type: 'quen'},
        {name: 'KD', value: 10, type: 'king'},
        {name: 'AD', value: 1, value2: 11, type: 'ace'},
        {name: '2H', value: 2, type: 'two'},
        {name: '3H', value: 3, type: 'three'},
        {name: '4H', value: 4, type: 'four'},
        {name: '5H', value: 5, type: 'five'},
        {name: '6H', value: 6, type: 'six'},
        {name: '7H', value: 7, type: 'seven'},
        {name: '8H', value: 8, type: 'eight'},
        {name: '9H', value: 9, type: 'nine'},
        {name: '10H', value: 10, type: 'ten'},
        {name: 'JH', value: 10, type: 'jack'},
        {name: 'QH', value: 10, type: 'quen'},
        {name: 'KH', value: 10, type: 'king'},
        {name: 'AH', value: 1, value2: 11, type: 'ace'},
        {name: '2S', value: 2, type: 'two'},
        {name: '3S', value: 3, type: 'three'},
        {name: '4S', value: 4, type: 'four'},
        {name: '5S', value: 5, type: 'five'},
        {name: '6S', value: 6, type: 'six'},
        {name: '7S', value: 7, type: 'seven'},
        {name: '8S', value: 8, type: 'eight'},
        {name: '9S', value: 9, type: 'nine'},
        {name: '10S', value: 10, type: 'ten'},
        {name: 'JS', value: 10, type: 'jack'},
        {name: 'QS', value: 10, type: 'quen'},
        {name: 'KS', value: 10, type: 'king'},
        {name: 'AS', value: 1, value2: 11, type: 'ace'},
        {name: '2C', value: 2, type: 'two'},
        {name: '3C', value: 3, type: 'three'},
        {name: '4C', value: 4, type: 'four'},
        {name: '5C', value: 5, type: 'five'},
        {name: '6C', value: 6, type: 'six'},
        {name: '7C', value: 7, type: 'seven'},
        {name: '8C', value: 8, type: 'eight'},
        {name: '9C', value: 9, type: 'nine'},
        {name: '10C', value: 10, type: 'ten'},
        {name: 'JC', value: 10, type: 'jack'},
        {name: 'QC', value: 10, type: 'quen'},
        {name: 'KC', value: 10, type: 'king'},
        {name: 'AC', value: 1, value2: 11, type: 'ace'},
    ];

    private userHands: Array<Hand>;
    private dillerHands: Array<Hand>;
    private mode: string;

    private userBalance: number = 5500;

    // need create other server for work with DB and data
    public startGame(userId): any {
        return {
            userName: 'x6iBeHbx',
            balance: this.userBalance
        };
    }

    // temp retrun random from crda array but in future need create sort 3 cards deck and when
    public getRandomCard(): any {
        // return this.cardDeck[4];
        return this.cardDeck[Math.round((Math.random()) * (this.cardDeck.length - 1))];
    }

    public firstHandOver(bet: number): any {
        const userCards = new Array<any>();
        const dillerCards = new Array<any>();

        this.userHands = new Array<Hand>();
        this.dillerHands = new Array<Hand>();

        this.userBalance -= bet;

        userCards.push(this.cardDeck[12]);
        userCards.push(this.cardDeck[12]);
        dillerCards.push(this.getRandomCard());
        // this.dillerCards.push({name: 'green_back', value: 0, type: 'back'});

        const userHand = new Hand();
        const dillerHand = new Hand();

        userHand.id = 0;
        userHand.cards = userCards;
        userHand.value = this.getWinValue(userCards);
        userHand.state = 'play';

        dillerHand.id = 0;
        dillerHand.cards = dillerCards;
        dillerHand.value = this.getWinValue(dillerCards);
        dillerHand.state = 'play';

        this.userHands.push(userHand);
        this.dillerHands.push(dillerHand);

        this.userHands.forEach((hand) => {
            hand.split = this.checkForEqualsInHand(hand) ? true : false;
        });

        return this.response;
    }

    public hit(handId: number = 0): any {
        // this.userHands.forEach((hand) => {
        //     hand.cards.push(this.getRandomCard());
        //     hand.value = this.getWinValue(hand.cards);
        //     hand.state = this.checkBust(hand.cards) ? 'lose' : 'play';
        //     cc.log(hand.value);
        // });
        cc.log(this.userHands[handId]);

        this.userHands[handId].cards.push(this.getRandomCard());
        this.userHands[handId].value = this.getWinValue(this.userHands[handId].cards);
        this.userHands[handId].state = this.checkBust(this.userHands[handId].cards) ? 'lose' : 'play';

        cc.log(this.userHands[handId]);

        return this.response;
    }

    public stand(): any {

        this.dillerHands.forEach((hand) => {
            hand.cards.push(this.getRandomCard());
            console.log('diller', hand);

            hand.value = this.getWinValue(hand.cards);

            let state;
            if (this.checkBust(hand.cards)) {
                cc.log('PEREBOR');
                state = 'lose';
            } else {
                if (hand.value >= 17) {

                    this.userHands.forEach((userHand) => {
                        cc.log(hand.value, userHand.value);
                        if (hand.value === userHand.value) {
                            userHand.state = 'dead_heat';
                            state = 'dead_heat';
                        } else if (hand.value > userHand.value) {
                            userHand.state = 'lose';
                            state = 'win';
                        } else {
                            userHand.state = 'win';
                            state = 'lose';
                        }
                    });
                } else {
                    state = 'play';
                }
            }

            hand.state = state;
        });

        return this.response;
    }

    public split(handId: number): any {
        const newHand = new Hand();
        const splitHand = this.userHands[handId];
        newHand.cards = new Array<any>();
        newHand.cards.push(splitHand.cards.pop());
        cc.log(splitHand, newHand);

        splitHand.cards.push(this.getRandomCard());
        splitHand.value = this.getWinValue(splitHand.cards);
        newHand.cards.push(this.getRandomCard());
        newHand.value = this.getWinValue(newHand.cards);

        this.userHands.push(newHand);

        this.userHands.forEach((hand) => {
            hand.split = this.checkForEqualsInHand(hand) ? true : false;
        });

        return this.response;
    }

    // ==============================================================

    private getWinValue(array: Array<any>): number {
        let result = 0;

        array.forEach((element) => {
            result += element.value;
        });

        array.forEach((element) => {
            if (this.isAce(element.name)) {
                let tempResult = result;
                tempResult -= element.value;
                tempResult += element.value2;
                if (tempResult <= 21) {
                    result = tempResult;
                }
            }
        });

        return result;
    }

    private checkBust(array: Array<any>): boolean {

        const sum = this.getWinValue(array);
        const aces = this.findAllAce(array);

        if (sum > 21) {

            return true;
        }

        return false;
    }

    private findAllAce(array: Array<any>): any {
        const result = array.filter((card) => card.name === 'AC' ||
                                            card.name === 'AD' ||
                                            card.name === 'AH' ||
                                            card.name === 'AS');

        return result;
    }

    private isAce(id: string): boolean {
        return id === 'AC' ||
                id === 'AD' ||
                id === 'AH' ||
                id === 'AS';
    }

    private checkForEqualsInHand(hand: Hand): boolean {

        if (hand.cards[0].type === hand.cards[1].type) {
            return true;
        }

        return false;
    }

    // ==========================================

    private get response(): any {
        const res = {
            user: {
                hands: this.userHands,
            },
            diller: {
                hands: this.dillerHands,
            },
            mode: this.mode,
            balance: this.userBalance
        };

        return res;
    }
}

class Hand {
    public id: number;
    public cards: Array<any>;
    public value: number;
    public state: string;
    public split: boolean;
}
