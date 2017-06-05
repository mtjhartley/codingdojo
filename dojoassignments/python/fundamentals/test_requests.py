import requests

r = requests.get('http://pokeapi.co/api/v1/pokemon/1/')
print r.status_code #200

print r.headers['content-type'] #application/json

print r.encoding #None

#print r.text

bulbasaur_object = r.json()

print bulbasaur_object['name'] #Bulbasaur
print bulbasaur_object['evolutions'][0]['to'] #Ivysaur