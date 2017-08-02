using System;
using System.Collections.Generic;
using System.Linq;
using JsonData;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Collections to work with
            List<Artist> Artists = JsonToFile<Artist>.ReadJson();
            List<Group> Groups = JsonToFile<Group>.ReadJson();
            System.Console.WriteLine(Groups);

            Artist FromMountVernon = Artists.Where(match => match.Hometown == "Mount Vernon").Single();
            System.Console.WriteLine(FromMountVernon);
            System.Console.WriteLine($"The artist {FromMountVernon.ArtistName} from Mt Vernon is {FromMountVernon.Age} years old");

            Artist Youngest = Artists.OrderBy(artist => artist.Age).First();
            System.Console.WriteLine(Youngest);
            System.Console.WriteLine($"The youngest artist {Youngest.ArtistName} is {Youngest.Age} years old");

            List<Artist> Williams = Artists.Where(artist => artist.RealName.Contains("William")).ToList();
            System.Console.WriteLine(Williams);
            foreach (var william in Williams)
            {
                System.Console.WriteLine(william.ArtistName + " - " + william.RealName);
            }
            System.Console.WriteLine("***********************");

            List<Artist> ThreeOldest = Artists.Where(artist => artist.Hometown == "Atlanta")
                                                    .OrderByDescending(artist => artist.Age)
                                                    .Take(3)
                                                    .ToList();
            foreach (var oldie in ThreeOldest)
            {
                System.Console.WriteLine(oldie.ArtistName + " - " + oldie.RealName + " Hometown: " + oldie.Hometown);
            }
            
            Group WuTang = Groups.Where(group => group.GroupName == "Wu-Tang Clan")
                                    .GroupJoin(Artists, 
                                        group => group.Id,
                                        artist => artist.GroupId,
                                        (group, artists) => { group.Members = artists.ToList(); return group;})
                                    .Single();
            Console.WriteLine("List of Artist in the Wu-Tang Clan:");
            foreach(var artist in WuTang.Members){
                Console.WriteLine(artist.ArtistName);
            }

            //========================================================
            //Solve all of the prompts below using various LINQ queries
            //========================================================

            //There is only one artist in this collection from Mount Vernon, what is their name and age?

            //Who is the youngest artist in our collection of artists?

            //Display all artists with 'William' somewhere in their real name

            //Display the 3 oldest artist from Atlanta

            //(Optional) Display the Group Name of all groups that have members that are not from New York City

            //(Optional) Display the artist names of all members of the group 'Wu-Tang Clan'
        }
    }
}
