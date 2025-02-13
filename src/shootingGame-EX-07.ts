// 6. Shooting Game
/* Spesifications : 
    - Create a shooting game between two player
    - Each player has three properties : name, health and power
    - Each player will take turns to shooting
    - Before shooting, players get a chance to get random items (health +10 or power +10)
    - The game will continue until one of the players has health < 0
   Requirements :
    - Create ShootingGame & Player class
    - ShootingGame class :
        - constructor(player1,player2)  -> player objects as a parameter
        - getRandomItem()               -> return { health; 0 or 10, power; 0 or 10 }
        - start()                       -> start shooting games
    - Player class :
        - Property                      -> name, health (default 100), power (default 10)
        - damage(power)                 -> subtract player health
        - useitem(item)                 -> apply item to player (increase health or power, based on result from getRandomItem())
        - showStatus()                  -> show player status (ex: "Player A(Health => 100, Power =>10")
    - ShootingGame start() function flow :
        - In every turn : 
            - Show each player status before shooting
            - Get random item for each player before shooting
            - Show each player status after shooting
        - Show winner name
*/

//--------------------------------------------
//    interface IPlayer and IShootingGame
//--------------------------------------------

interface IPlayer {
    name: string;
    health: number;
    power: number;
    damage(powerEnemy: number): void;
    useItem(item: { health: number; power: number }): void;
    showStatus(): void;
}

interface IShootingGame {
    player1: IPlayer;
    player2: IPlayer;
    getRandomItem(): { health:number, power:number };
    start(): void;
}

//--------------------------------------------
//               Class Player
//--------------------------------------------

class Player implements IPlayer{
    name: string;
    health: number = 100;
    power: number = 10;


    constructor (name:string){
        this.name = name;
    }

    damage(powerEnemy: number) {
        this.health -= powerEnemy;
    }

    useItem(item: {health: number, power: number}) {
        this.health += item.health;
        this.power += item.power; 
    }

    showStatus(){
        let status = (`${this.name}, (Health => ${this.health}, Power => ${this.power})`);
        return status;
    }
}

//--------------------------------------------
//             Class ShootingGame
//--------------------------------------------

class ShootingGame implements IShootingGame {
    player1: IPlayer;
    player2: IPlayer;

    constructor (player1: IPlayer, player2: IPlayer) {
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem() {
        const max = 10;
        const randomNumber = Math.floor(Math.random() * max);
        let resultItem = {health: 0, power: 0};
        if (randomNumber >= 0 && randomNumber <= 5) {      
            resultItem = {health: 0, power: 10};
        } else if (randomNumber > 5 && randomNumber <= 10) {
            resultItem = {health: 10, power:0};
        }
        return resultItem;
    }

    start(): void {
        let attacker = this.player1;
        let defender = this.player2;

        //before shooting (default Health and Power)
        console.log(attacker.showStatus());
        console.log(defender.showStatus());

        while (attacker.health > 0 && defender.health > 0) {
                
            //each player status before shooting
            console.log(attacker.showStatus());
            console.log(defender.showStatus());

            //using item
            let item = this.getRandomItem();
            attacker.useItem(item);
            
            //attacker attacks defender
            defender.damage(attacker.power);

            //after shooting
            console.log(attacker.showStatus());
            console.log(defender.showStatus());

            //swap turns
            [attacker, defender] = [defender, attacker];
        }
        
        //swap back the "last attacker" so the one that have health always comes out as a winner
        [attacker, defender] = [defender, attacker];

        if (attacker.health > 0) {
            console.log(`The winner is ${attacker.name}`);
        } else {
            console.log(`The winner is ${defender.name}`);
        }
    }
}

//Make object player one and two
const playerONE = new Player ("Tom");
const playerTWO = new Player ("Jerry");

//Make object game from blue print ShootingGame class
const Game = new ShootingGame(playerONE,playerTWO);

//Start the game method
Game.start();