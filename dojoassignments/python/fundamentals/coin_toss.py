"""Write a function that simulates tossing a coin 5,000 times. Your function should print how many times the head/tail appears.

Sample output should be like the following:
Starting the program...
Attempt #1: Throwing a coin... It's a head! ... Got 1 head(s) so far and 0 tail(s) so far
Attempt #2: Throwing a coin... It's a head! ... Got 2 head(s) so far and 0 tail(s) so far
Attempt #3: Throwing a coin... It's a tail! ... Got 2 head(s) so far and 1 tail(s) so far
Attempt #4: Throwing a coin... It's a head! ... Got 3 head(s) so far and 1 tail(s) so far
...
Attempt #5000: Throwing a coin... It's a head! ... Got 2412 head(s) so far and 2588 tail(s) so far
Ending the program, thank you!
"""
import random
def coin_toss(trials):
    heads, tails = 0, 0
    attempts = 1
    print "Let's test our luck..."
    while attempts < trials+1:
        if round(random.random()) == 0:
            heads += 1
            print "Attempt #" + str(attempts) + " Tossing a coin...It's a head!...Got " + str(heads) + " head(s) so far and " + str(tails) + " tail(s) so far."
        else:
            tails += 1
            print "Attempt #" + str(attempts) + " Tossing a coin...It's tails!...Got " + str(heads) + " head(s) so far and " + str(tails) + " tail(s) so far."
        attempts += 1
    print "Ending the program, thanks!"

coin_toss(5000)