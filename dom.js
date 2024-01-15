// function solve()
// {
//     let a = document.querySelector('.first');

//     if(a.innerHTML === 'Subscribe')
//     {
//         a.innerHTML='Subscribed';
//     }
//     else{
//         a.innerHTML= 'Subscribe';
//     }

// }



function solve(){

    const a= document.querySelector('#price');

    const butto=document.querySelector('.btn');

    butto.style.backgroundColor = "red";
    butto.style.color="white";
    butto.style.padding="10px";
    let cost=Number(a.value);

    console.log(typeof cost);
    if(cost<=40)
    {
        cost+=10;
        console.log(cost);
    }
    else{
        cost+=0;
        console.log(cost);
    }

    const target=document.querySelector('.txt');

    target.innerHTML=`Total cost : $${cost}`;

   
}