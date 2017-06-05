import random
random_num = random.randint(60,100)
def score_generator():
    scores = []
    while len(scores) <= 10:
        random_num = random.randint(60,100)
        scores.append(random_num)
    
    for score in scores:
        if score >= 90:
            print "Score: " + str(score) + "; Your grade is A"
        elif score >= 80:
            print "Score: " + str(score) + "; Your grade is B"
        elif score >= 70:
            print "Score: " + str(score) + "; Your grade is C"
        else:
            print "Score: " + str(score) + "; Your grade is D"
    print "End of program, bye!"

score_generator()