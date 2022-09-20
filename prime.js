let number=13, c=0;
for(let i=1;i<=number;i++)
  {
    if(number%i==0)
    {
      c=c+1;
    }
  }
if(c == 0)
{
  console.log(number,"is a prime no")
}
else
{
  console.log("not a prime no")
}