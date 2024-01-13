
// 0 to 3 computer chooses rock
// 4 to 7 computer chooses paper
// 8 to 10 computer chooses scissors


// function rock(){

//     let x=Math.random();

//     if(x>=0 && x<=1/3){
//         alert("You chooses rock \nComputer chooses rock \nTie.")
//     }

//     else if(x>1/3 && x<=2/3)
//     {
//         alert("You choose rock \nComputer chooses paper\nYou Win");
//     }
//     else{
//         alert("You choose rock \nComputer chooses scissor \nYou Win");
//     }

// }

// function paper(){

//     let x=Math.random();
//     if(x>=0 && x<=1/3){
//         alert("You chooses paper \nComputer chooses rock \nYou loose.")
//     }

//     else if(x>1/3 && x<=2/3)
//     {
//         alert("You choose paper \nComputer chooses paper\n Tie");
//     }
//     else{
//         alert("You choose paper \nComputer chooses scissor \nYou loose");
//     }

// }

// function scissor(){

//     let x=Math.random();

//     if(x>=0 && x<=1/3){
//         alert("You chooses scissor \nComputer chooses rock \nYou loose.")
//     }

//     else if(x>1/3 && x<=2/3)
//     {
//         alert("You choose scissor \nComputer chooses paper\nYou Win");
//     }
//     else{
//         alert("You choose scissor \nComputer chooses scissor \nTie");
//     }
// }

function implement(move){

    let x=Math.random();

    let result='';
    let computerMove='';

    if(x>=0 && x<=1/3)
    {
        computerMove='Rock';
    }
    else if(x>1/3 && x<=2/3)
    {
        computerMove='Paper';
    }
    else{
        computerMove='Scissors';
    }

    //computer chooses rock
    if(computerMove==='Rock')
    {
        if(move==='rock')
        {
            result='Tie';
        }
        else if(move==='paper')
        {
            result='You loose';
        }
        else{

            result='You loose';
        }
    }

    //computer chooses paper
    else if(computerMove==='Paper')
    {
        if(move==='rock')
        {
            result='You Win';
        }
        else if(move==='paper')
        {
            result='Tie';
        }
        else{

            result='You Win';
        }

    }
    
    //computer chooses scissor
    else{

        if(move==='rock')
        {
            result='You win';
        }
        else if(move==='paper')
        {
            result='You loose';
        }
        else{

            result='Tie';
        }
    }

    alert(`
        You choose ${move} 
        Computer chooses ${computerMove}
        ${result}
    `)
    
}
