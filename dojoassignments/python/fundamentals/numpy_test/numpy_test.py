import numpy as np 
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import requests
a = np.arange(16).reshape(4,4)

print a

for row in a:
    print row

for element in a.flat:
    print element

print a.reshape(8,2)

print np.hsplit(a,4)

pokemon_heights = []
for num in range(1, 26):
    url_string = "http://pokeapi.co/api/v1/pokemon/" + str(num) + "/"
    r = requests.get(url_string)
    pokemonObj = r.json()
    pokemon_heights.append(pokemonObj["height"])
print pokemon_heights
plt.plot(pokemon_heights)
plt.title("Range of Pokemon Heights from #1-25")
plt.savefig("pokemon.png")



