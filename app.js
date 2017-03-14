var nums = [];
console.log(nums);

const catPics = document.querySelectorAll('.cat__pic');
const countPs = document.querySelectorAll('.count');

console.log(catPics);
console.log(countPs);

var counter = 0;

function clicksCounter() {
//    console.log(this.dataset.pic);
    
    counter++;
    
    var p = countPs[this.dataset.pic];
    var pDataCount = p.dataset.count;
    nums[pDataCount] = counter;
    
    console.log(pDataCount);
    p.textContent = counter;
//    console.log(p.dataset.count);
    
    console.log(counter);
    console.log(nums);
}

catPics.forEach(cat => cat.addEventListener('click', clicksCounter));










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

