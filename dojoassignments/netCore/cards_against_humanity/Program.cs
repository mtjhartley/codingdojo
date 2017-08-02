using System;
using System.Collections.Generic;

namespace cards_against_humanity
{
    class Program
    {
        static void Main(string[] args)
        {
            //*THIS WILL BE THE GAME LOOP, FIRST TWO LINES RUN THE CODE IN GAME.CS */
            Game newGame = new Game();
            newGame.playGame();
        }
    }
}
