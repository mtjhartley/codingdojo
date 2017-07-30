import re

file = open('pandp.txt')

text = file.read()


#print text.split()

print str(text)
print len(text)

print re.split('(?<![\w\d])wife(?![\w\d])', text)