var sub=(a=30,b=5)=>
{
    console.log(a-b)
}

var mul=(...num:number[])=>
{
    var i;
    var  mu:number=0;

    for(i=0;i<num.length;i++)
    {
        mu = mu + num[i];
    }

    console.log(mu)
}

var detail = (id:number,name:string,mail?:string)=>
{
    console.log("ID:",id);
    console.log("Name:",name);

    if(mail!=undefined)
    console.log("Email id",mail);
}
detail(1,"xyz");
detail(2,"abc","abc@mail.com");
sub();
mul(2,3,2,1,5)