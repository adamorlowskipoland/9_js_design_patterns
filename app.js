// model

const model = {
    catName: "Soft(y)",
    counter: 0,
    nums: []
}



// octopus 

const octopus = {
    clicksCounter: function() {
        const cats = document.querySelectorAll('.cat');
        const arrCatPics = Array.from(document.querySelectorAll('.cat__pic'));
        var inxOfThis = arrCatPics.indexOf(this);

        if (!model.nums[inxOfThis]) {
            model.nums[inxOfThis] = 0;
        }
        model.counter = model.nums[inxOfThis];
        model.counter++;
        model.nums[inxOfThis] = model.counter;

        cats.forEach(function(cat) {
            if (cat.classList.contains('cat__pic--active')) {
                var catCountP = cat.querySelector('.count');
                if(!catCountP) {
                    catCountP = document.createElement('p');
                    catCountP.classList.add('count');
                    catCountP.textContent = model.counter;
                    cat.append(catCountP);
                } else {
                    catCountP.textContent = model.counter;
                }
            }
        });
    }
}


// view

const view = {
    showName: function() {
        const cats = document.querySelectorAll('.cat');
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
    },
    showCat: function() {
        const catNames = document.querySelectorAll('.cat__name');
        const catImgs = Array.from(document.querySelectorAll('.cat'));
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
        view.showName();
    },
    eventListeners: function() {
        const catNames = document.querySelectorAll('.cat__name');
        catNames.forEach(catName => catName.addEventListener('click', view.showCat));
        
        const arrCatPics = Array.from(document.querySelectorAll('.cat__pic'));
        arrCatPics.forEach(cat => cat.addEventListener('click', octopus.clicksCounter));
    }
}

view.eventListeners();