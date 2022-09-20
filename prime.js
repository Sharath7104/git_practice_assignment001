let n=13, c=1;
for(let i=1;i<=n;i++)
  {
    if(n%i==0)
    {
      c=c+1;
    }
  }
if(c == 0)
{
  console.log(n,"is a prime no")
}
else
{
  console.log("not a prime no")
}