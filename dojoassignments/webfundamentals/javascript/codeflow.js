var num = 1;
while (num < 5) 
{
  if (num == 3) 
  {
    break;
    // if you have additional code down here, it will never run!
  }
  console.log("I'm counting! The number is ", num);
  num = num + 1;          // if we break, we leave the WHILE loop so these lines won’t run
}

console.log()

for (var num = 1; num < 5; num += 1) 
{
  if (num == 3) 
  {
    continue;
    // if you have additional code down here, it will never run!
  }
  console.log("I'm counting! The number is ", num);
}