let mainGrid = document.body.querySelector('#main-grid');



let userNumber;
let i;
let classDiv


    userNumber = Number(prompt('How Many Squares you Want per Side?'));
    for (i = 0; i < (userNumber*userNumber) && i < 2000; i++) {
        let newDiv = document.createElement('div')
        classDiv = newDiv.classList.add('sqr' + i)
        mainGrid.appendChild(newDiv)

        newDiv.addEventListener('mouseover', overSquares)
        function overSquares(){
            newDiv.style.backgroundColor='blue'
            // classDiv.style.backgroundColor='blue'
        }
    }


// let btnTest = document.querySelector('#btn-test');
// btnTest.addEventListener('click', divEvent);


function overSquares(){
    alert(classDiv)
    // classDiv.style.backgroundColor='blue'
}