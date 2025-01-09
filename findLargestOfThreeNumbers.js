let findLargestOfThreeNumbers= function()
{
    let a=Number(prompt("enter a value"))
    let b=Number(prompt("enter b value"))
    let c=Number(prompt("enter c value"))
    let d= a+b+c;
    console.log(d);
    let e=a-b-c;
    console.log(e);
    let f=a*b*c;
    console.log(f);

    if(a>=b && a>=c){
        console.log("a is gratest number")
    }else if(b>=a && b>=c){
        console.log("b is gratest number")
    }else{
        console.log("c is gratest number")
    }
}
findLargestOfThreeNumbers()