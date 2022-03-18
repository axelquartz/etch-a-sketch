let mainGrid = document.querySelector('#main-grid'); //Parent of div squares

let userNumber;  //Number of new square divs (defined by the user)
let i;

let classDiv;  //Add class name to new square divs

//Button activate a prompt asking the user for a number of new sqr divs
let btnAsk = document.getElementById('btn');
btnAsk.addEventListener('click', askUserForDivs);

//Function asking user for new square divs
function askUserForDivs(){
    userNumber = Number(prompt('How Many Squares you Want per Side?'));  

    //For loop that creates the new div squares
for (i = 0; i < (userNumber*userNumber) && i < 2000; i++) {
    let newDiv = document.createElement('div')
    classDiv = newDiv.classList.add('sqr' + i)
     mainGrid.appendChild(newDiv)

        //Hovering change the backgroun color of div squares
    newDiv.addEventListener('mouseover', overSquares)
    function overSquares(){
            newDiv.style.backgroundColor='blue'
    }
    }  
}
//Initial grid
for (i = 0; i < 2000; i++) {
        let newDiv = document.createElement('div')
        classDiv = newDiv.classList.add('sqr' + i)
        mainGrid.appendChild(newDiv)

        newDiv.addEventListener('mouseover', overSquares)
        function overSquares(){
            newDiv.style.backgroundColor='blue'
            // classDiv.style.backgroundColor='blue'
        }
    }

