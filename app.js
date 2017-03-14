const catPics = document.querySelectorAll('.pic--cat');
const count = document.getElementById('count');
var counter = 0;

function clicksCounter() {
//    console.log(this);
    counter++;
    count.textContent = counter;
}

catPics.forEach(cat => cat.addEventListener('click', clicksCounter));