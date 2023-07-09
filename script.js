const options=document.querySelectorAll('.option');
const middleSection=document.getElementById('divide1');
const bottomSection=document.getElementById('bottomSection');
const loseSection=document.getElementById('loseSection');
const tieSection=document.getElementById('tieSection');
const rock=document.getElementById('rock');
const scissors=document.getElementById('scissors');
const paper=document.getElementById('paper');

let userChoice;
let cpOptions;

let computer=0;
let use=0;
document.getElementById("computer_score").innerHTML = localStorage.setItem("computer");
document.getElementById("user_score").innerHTML = localStorage.setItem("use");


function myFunction(){
    document.getElementById('tieSection').style.display="flex";
    document.getElementById('divide1').style.display="none";
    }

    function myFunction2(){
        document.getElementById('bottomSection').style.display="flex";
        document.getElementById('divide1').style.display="none";
        document.getElementById('control1').style.display="flex";
        computer=computer+2;
        user_score.innerHTML=computer;
        }

        function myFunction3(){
            document.getElementById('loseSection').style.display="flex";
            document.getElementById('divide1').style.display="none";
            use=use+2;
            computer_score.innerHTML=use;   
         }
             function show2(){
                document.getElementById('divide1').style.display="flex";
                document.getElementById('tieSection').style.display="none";
              
             }

             function show(){
                document.getElementById('divide1').style.display="flex";
                document.getElementById('bottomSection').style.display="none";
                document.getElementById('control1').style.display="none";
             }

             function show1(){
                document.getElementById('divide1').style.display="flex";
                document.getElementById('loseSection').style.display="none";
             }

             function rules(){
                document.getElementById('tables').style.display="flex";
             }
             function imgs(){
               document.getElementById('tables').style.display="none";
             }

             let playerScore = localStorage.getItem('playerScore') || 0;
             let computerScore = localStorage.getItem('computerScore') || 0;
             
            
             
             
             localStorage.setItem('computer_score', computer);
             localStorage.setItem('user_score', use);
          