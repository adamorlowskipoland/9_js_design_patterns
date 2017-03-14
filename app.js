//const catPics = document.querySelectorAll('.pic--cat');
//const count = document.getElementById('count');
//var counter = 0;
//
//function clicksCounter() {
////    console.log(this);
//    counter++;
//    count.textContent = counter;
//}
//
//catPics.forEach(cat => cat.addEventListener('click', clicksCounter));


// building slider

const catNames = document.querySelectorAll('.cat__name');
const catImgs = Array.from(document.querySelectorAll('.cat'));

function showCat() {
    catNames.forEach(function(e) {
        e.classList.remove('cat__name--active');
    });
    catImgs.forEach(function(e) {
        e.classList.remove('cat__pic--active');
    });
    this.classList.add('cat__name--active');
    
    for (var i=0; i<catImgs.length; i++) {
        if (catImgs[i].dataset.cat === this.dataset.cat) {
            catImgs[i].classList.add('cat__pic--active');
        }
    }
}

catNames.forEach(catName => catName.addEventListener('click', showCat));

