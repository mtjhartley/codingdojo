using System;
using System.Collections.Generic;

namespace cards_against_humanity{
    public class Game
    {
        public List<Card> gameAnswers = new List<Card>();
        public List<Player> players = new List<Player>();

        public string[] otherGames = {
            "SpeedWar",
            "Uno",
            "Egyptian RatScrew",
            "Uno",
            "31",
            "Uno",
            "??",
            "Fish Royale",
        };

        public int questionCount = 0;

        public Card displayQuestion;
        public Deck answerDeck = new Deck();
        public Deck questionDeck = new Deck(true);

        public Boolean isPlaying = true;
        public Player cpu1 = new Player("Brad");
        public Player cpu2 = new Player("Max");
        public Player cpu3 = new Player("Chris");
        
        public Game()
        {
            System.Console.WriteLine("Welcome to Coding Dojo Against Humanity!");
            System.Console.WriteLine("You are playing a game against 3 computer controlled players.");
            System.Console.WriteLine("You are given a hand of four cards, and prompted with a question.");
            System.Console.WriteLine("When you select what card you want to play, the class will vote amongst the 4 played cards for the best answer.");
            System.Console.WriteLine("First to two points wins. Have fun!");
            System.Console.WriteLine("Hit enter to get started!");
            System.Console.ReadLine();
            answerDeck.shuffleDeck();
            questionDeck.shuffleDeck();


        }
        public void displayAnswers()
        {
            for (int i = 0; i < gameAnswers.Count; i++)
            {
                System.Console.WriteLine($"Player {i+1}: {players[i].name}'s answer: {gameAnswers[i].text}");
            }
        }

        public void playGame()
        {   
            //Get the users name, and set up the 3 players
            System.Console.WriteLine("Please enter your name: ");
            string name = Console.ReadLine();
            System.Console.WriteLine($" \nThanks {name}, let's have fun! \n \n");
            Player humanPlayer = new Player(name);

            humanPlayer.drawCard(answerDeck);
            humanPlayer.drawCard(answerDeck);
            humanPlayer.drawCard(answerDeck);

            cpu1.drawCard(answerDeck);
            cpu1.drawCard(answerDeck);
            cpu1.drawCard(answerDeck);

            cpu2.drawCard(answerDeck);
            cpu2.drawCard(answerDeck);
            cpu2.drawCard(answerDeck);

            cpu3.drawCard(answerDeck);
            cpu3.drawCard(answerDeck);
            cpu3.drawCard(answerDeck);



            while (isPlaying)
            {
                humanPlayer.drawCard(answerDeck);
                cpu1.drawCard(answerDeck);
                cpu2.drawCard(answerDeck);
                cpu3.drawCard(answerDeck);
                players.Add(humanPlayer);
                players.Add(cpu1);
                players.Add(cpu2);
                players.Add(cpu3);

                //get the first question for the players
                displayQuestion = questionDeck.dealCard();
                questionCount += 1;
                System.Console.WriteLine($"Question {questionCount}: {displayQuestion.text}");
                humanPlayer.getCards();
                System.Console.WriteLine("Type the number of the card you would like to play! \n EX: '1', '2'");
                int answer = Convert.ToInt32(Console.ReadLine());
                Card playedCard = humanPlayer.playCard(answer-1);
                System.Console.WriteLine($"You played Card {answer}: {playedCard.text}.");

                //add to the array of the answers
                gameAnswers.Add(playedCard);
                gameAnswers.Add(cpu1.playRandomCard());
                gameAnswers.Add(cpu2.playRandomCard());
                gameAnswers.Add(cpu3.playRandomCard());

                System.Console.WriteLine("\n******************************\n");
                System.Console.WriteLine("Select the best answer!");
                System.Console.WriteLine($"Question {questionCount}: {displayQuestion.text}");
                System.Console.WriteLine("[");
                displayAnswers();
                System.Console.WriteLine("]");

                //select an answer, increment the winners vote, check logic, reset globals, draw another card, and then restart the loop
                System.Console.WriteLine("Which player had the best answer? Enter the player number (1, 2, 3 or 4)");
                System.Console.WriteLine("\n******************************\n");
                int winnerIndex = Convert.ToInt32(Console.ReadLine());
                Player winningPlayer = players[winnerIndex - 1];
                System.Console.WriteLine("\n------------------------------\n");
                System.Console.WriteLine($"Congratulations on winning this round, {winningPlayer.name}");
                System.Console.WriteLine($"The current standings are as follows:");
                winningPlayer.score++;
                foreach (Player player in players)
                {
                    System.Console.WriteLine($"{player.name}: {player.score}");
                    //player.resetHand(); //dont reset the hand in the final version, just draw 5 cards to begin with.
                }
                System.Console.WriteLine("Remember, the first player to two points wins!");
                System.Console.WriteLine("------------------------------");

                //reset globals
                gameAnswers = new List<Card>(); 
                players = new List<Player>();


                if (winningPlayer.score == 2)
                {
                    System.Console.WriteLine($"The game is over. Congrats on winning {winningPlayer.name}!!");
                    // System.Console.WriteLine("The winner of the hackathon is Team Brad!!!!");
                    isPlaying = false;
                }
            }
        }
    }
}