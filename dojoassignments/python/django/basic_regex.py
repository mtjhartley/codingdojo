import re
def get_matching_words(regex):
 words = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress", "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape", "ava"]
 matches = []
 for word in words:
 	if re.search(regex,word):
 		matches.append(word)
 return matches


regex_v = re.compile(r'([a-zA-Z]*v[a-zA-Z]*)')
regex_ss = re.compile(r'([a-zA-Z]*s{2}[a-zA-Z]*)')
regex_e = re.compile(r'(e$)')
regex_banyspaceb = re.compile(r'([a-zA-Z]*b{1}[a-zA-Z]+b{1}[a-zA-Z]*)')
regex_bonespaceb = re.compile(r'([a-zA-Z]*b{1}[a-zA-Z]{1}b{1}[a-zA-Z]*)')
regex_vowels = re.compile(r'([^aeiou]*a[^aeiou]*e[^aeiou]*i[^aeiou]*o[^aeiou]*u[^aeiou]*)')
regex_regularexpession = re.compile(r'(\b[regularexpression]+\b(?![,]))')
regex_double = regexp = re.compile(r"(.)\1")

print get_matching_words(regex_v)
print get_matching_words(regex_ss)
print get_matching_words(regex_e)
print get_matching_words(regex_banyspaceb)
print get_matching_words(regex_bonespaceb)
print get_matching_words(regex_vowels)
print get_matching_words(regex_regularexpession)
print get_matching_words(regex_double)