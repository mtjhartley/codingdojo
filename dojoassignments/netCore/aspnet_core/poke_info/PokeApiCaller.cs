using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace poke_info
{
    public class WebRequest
    {
        //second param returns a dict of string keys to obj vals
        //if api returned an array, the parameter type would be <Action>
        public static async Task GetPokemonDataAsync(int PokeId, Action<Pokemon> Callback)
        {
            //create a temporary HttpClient connection.
            {
                using (var Client = new HttpClient())
                {
                    try
                    {
                        Client.BaseAddress = new Uri($"http://pokeapi.co/api/v2/pokemon/{PokeId}");
                        HttpResponseMessage Response = await Client.GetAsync("");
                        Response.EnsureSuccessStatusCode();
                        string StringResponse = await Response.Content.ReadAsStringAsync();
                        //System.Console.WriteLine(StringResponse);

                        JObject PokeData = JsonConvert.DeserializeObject<JObject>(StringResponse);
                        JArray TypeList = PokeData["types"].Value<JArray>();
                        List<string> Types = new List<string>();
                        foreach (JObject TypeObject in TypeList)
                        {
                            Types.Add(TypeObject["type"]["name"].Value<string>());
                        }
                        Pokemon myPokemon = new Pokemon
                            {
                                Name = PokeData["name"].Value<string>(),
                                Height = PokeData["height"].Value<long>(),
                                Weight = PokeData["weight"].Value<long>(),
                                Types = Types
                            };
                        
                        Callback(myPokemon);
                    }
                    catch (HttpRequestException e)
                    {
                        //if something went wrong, display the error
                        System.Console.WriteLine($"Request exception: {e.Message}");
                    }
                }
            }
        }
    }
}