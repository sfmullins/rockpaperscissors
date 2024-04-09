const options = ["Rock","Paper","Scissors"];
function generate(){
const randomIndex = Math.floor(Math.random()*options.length);
randomOption = options[randomIndex];
document.getElementById('result').innerText="Player 1 Choses: " + randomOption;
}

function check(){
    var choice = document.getElementById("choice").value;

    if(choice=="Rock"||choice=="Paper"||choice=="Scissors"){
        if(choice=="Rock" && randomOption=="Rock"){
            document.getElementById("outcome").innerHTML="Draw"
        }
        else if(choice=="Rock" && randomOption=="Paper"){
            document.getElementById("outcome").innerHTML="Lose"
        }
        else if(choice=="Rock" && randomOption=="Scissors"){
            document.getElementById("outcome").innerHTML="Win"
        }
        else if(choice=="Paper" && randomOption=="Rock"){
            document.getElementById("outcome").innerHTML="Win"
        }
        else if(choice=="Paper" && randomOption=="Paper"){
            document.getElementById("outcome").innerHTML="Draw"
        }
        else if(choice=="Paper" && randomOption=="Scissors"){
            document.getElementById("outcome").innerHTML="Lose"
        }
        else if(choice=="Scissors" && randomOption=="Rock"){
            document.getElementById("outcome").innerHTML="Lose"
        }
        else if(choice=="Scissors" && randomOption=="Paper"){
            document.getElementById("outcome").innerHTML="Win"
        }
        else if(choice=="Scissors" && randomOption=="Scissors"){
            document.getElementById("outcome").innerHTML="Draw"
        }
    }
    else{
        alert("Invalid input, note that input is case sensitive.")
    }
}