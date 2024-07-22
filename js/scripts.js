const myButton = document.getElementById('form-submit');
console.log(myButton);

const myContainer = document.getElementById('grid-container');
console.log(myContainer);

myButton.addEventListener('submit', generateCell);

const difficulty = document.getElementById('difficulty');
console.log(difficulty);

function generateCell(e) {
    e.preventDefault();
    myContainer.innerHTML = '';

    for(let i = 1; i <= 100; i++) {
        let singleCell = document.createElement('div');
        myContainer.append(singleCell);
        console.log(singleCell);
        singleCell.innerHTML = i;

        singleCell.addEventListener ('click',
            function () {
                singleCell.classList.toggle('bg-lightcoral')
            }
        )
            
        if (difficulty.value == 'easy') {
            singleCell.classList.add('easy'); 
            if (i == 49) {
                return false;
            }  
        }

        else if (difficulty.value == 'intermediate') {      
                singleCell.classList.add('intermediate'); 
                if (i == 81) {
                    return false;
                }           
        }

        else {
            singleCell.classList.add('hard');  
        }
    }
}

