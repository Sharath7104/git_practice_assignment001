
let num=13, count =0;
for(let i=1;i<=num;i++)
  {
    if(num%i==0)

    {
      count =count+1;
    }
  }
if(count == 2)
{

  console.log(num,"is a prime no")

}
else
{
  console.log("not a prime no")
}