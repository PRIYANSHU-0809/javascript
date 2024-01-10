
// 0 to 3 computer chooses rock
// 4 to 7 computer chooses paper
// 8 to 10 computer chooses scissors


function rock(){

    let x=Math.random();

    if(x>=0 && x<=1/3){
        alert("You chooses rock \nComputer chooses rock \nTie.")
    }

    else if(x>1/3 && x<=2/3)
    {
        alert("You choose rock \nComputer chooses paper\nYou Win");
    }
    else{
        alert("You choose rock \nComputer chooses scissor \nYou Win");
    }

}

function paper(){

    let x=Math.random();
    if(x>=0 && x<=1/3){
        alert("You chooses paper \nComputer chooses rock \nYou loose.")
    }

    else if(x>1/3 && x<=2/3)
    {
        alert("You choose paper \nComputer chooses paper\n Tie");
    }
    else{
        alert("You choose paper \nComputer chooses scissor \nYou loose");
    }

}

function scissor(){

    let x=Math.random();

    if(x>=0 && x<=1/3){
        alert("You chooses scissor \nComputer chooses rock \nYou loose.")
    }

    else if(x>1/3 && x<=2/3)
    {
        alert("You choose scissor \nComputer chooses paper\nYou Win");
    }
    else{
        alert("You choose scissor \nComputer chooses scissor \nTie");
    }
}
