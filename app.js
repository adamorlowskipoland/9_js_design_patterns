




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




var nums = [];
console.log(nums);

const catPics = document.querySelectorAll('.cat__pic');
//const countPs = document.querySelectorAll('.count');

console.log(catPics);
console.log(cats);
//console.log(countPs);

var counter = 0;


function clicksCounter() {
    if (!nums[this.dataset.pic]) {
        nums[this.dataset.pic] = 0;
        console.log(nums[this.dataset.pic]);
    }
    counter = nums[this.dataset.pic];
    counter++;
    nums[this.dataset.pic] = counter;
    console.log(counter);
    console.log(nums);
    
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




//function clicksCounter() {
//    
//    console.log(this);
//    
//    var catPicsArray = Array.from(catPics);
//    catPicsArray.forEach(function (catPic) {
//        console.log(catPicsArray.indexOf(catPic));
////        var indexCatpic = catPicsArray.indexOf(catPic);
////        console.log(indexCatpic);
//    })
//    counter++;
//    
//    var p = countPs[this.dataset.pic];
//    var pDataCount = p.dataset.count;
//    nums[pDataCount] = counter;
//    
//    console.log(pDataCount);
//    p.textContent = counter;
////    console.log(p.dataset.count);
//    
//    console.log(counter);
//    console.log(nums);
//}

catPics.forEach(cat => cat.addEventListener('click', clicksCounter));