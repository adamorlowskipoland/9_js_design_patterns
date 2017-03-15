// adding/changing name
const cats = document.querySelectorAll('.cat');
var catName = "Soft(y)";


function showName() {
    cats.forEach(function(cat) {
        if (cat.classList.contains('cat__pic--active')) {
            var catNameP = cat.querySelector('.cat--name');
            if(!catNameP) {
                catNameP = document.createElement('p');
                catNameP.classList.add('cat--name');
                catNameP.textContent = catName;
                cat.prepend(catNameP);
            } else {
                catNameP.textContent = catName;
            }
        }
    });
    
}

// slider

const catNames = document.querySelectorAll('.cat__name');
const catImgs = Array.from(document.querySelectorAll('.cat'));

function showCat() {
    catName = this.textContent;
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
    showName();
}

// showCat
catNames.forEach(catName => catName.addEventListener('click', showCat));

// showName
showName();



// making countings

var nums = [];
const arrCatPics = Array.from(document.querySelectorAll('.cat__pic'));
var counter = 0;


function clicksCounter() {
    var inxOfThis = arrCatPics.indexOf(this);
    
    if (!nums[inxOfThis]) {
        nums[inxOfThis] = 0;
    }
    counter = nums[inxOfThis];
    counter++;
    nums[inxOfThis] = counter;
    
    cats.forEach(function(cat) {
        if (cat.classList.contains('cat__pic--active')) {
            var catCountP = cat.querySelector('.count');
            if(!catCountP) {
                catCountP = document.createElement('p');
                catCountP.classList.add('count');
                catCountP.textContent = counter;
                cat.append(catCountP);
            } else {
                catCountP.textContent = counter;
            }
        }
    });
}

arrCatPics.forEach(cat => cat.addEventListener('click', clicksCounter));