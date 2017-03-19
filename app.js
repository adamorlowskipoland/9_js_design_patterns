// model

const model = {
    currentCat: null,
    cats: [
        {
            name: "Softy",
            counter: 0,
            imgSrc: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
            imgAttribution: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426"
        },
        {
            name: "SpookY",
            counter: 0,
            imgSrc: "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
            imgAttribution: "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496"
        },
        {
            name: "Worms",
            counter: 0,
            imgSrc: "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454",
            imgAttribution: "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454"
        },
        {
            name: "Shorty",
            counter: 0,
            imgSrc: "http://media.jrn.com/images/0904_ksap_mckitten10904_23711927_ver1.0_640_480.jpg",
            imgAttribution: "http://media.jrn.com/images/0904_ksap_mckitten10904_23711927_ver1.0_640_480.jpg"
        },
        {
            name: "Fluffy",
            counter: 0,
            imgSrc: "https://s-media-cache-ak0.pinimg.com/564x/ce/b4/f2/ceb4f2baf424d7bb4c5c019bc4088786.jpg",
            imgAttribution: "https://s-media-cache-ak0.pinimg.com/564x/ce/b4/f2/ceb4f2baf424d7bb4c5c019bc4088786.jpg"
        },
        
    ]
}



// octopus 

const octopus = {
    init: function() {
        model.currentCat = model.cats[0];
        console.log(model.currentCat);
    }
}



//const octopus = {
//    clicksCounter: function() {
//        const cats = document.querySelectorAll('.cat');
//        const arrCatPics = Array.from(document.querySelectorAll('.cat__pic'));
//        var inxOfThis = arrCatPics.indexOf(this);
//
//        if (!model.nums[inxOfThis]) {
//            model.nums[inxOfThis] = 0;
//        }
//        model.counter = model.nums[inxOfThis];
//        model.counter++;
//        model.nums[inxOfThis] = model.counter;
//
//        cats.forEach(function(cat) {
//            if (cat.classList.contains('cat__pic--active')) {
//                var catCountP = cat.querySelector('.count');
//                if(!catCountP) {
//                    catCountP = document.createElement('p');
//                    catCountP.classList.add('count');
//                    catCountP.textContent = model.counter;
//                    cat.append(catCountP);
//                } else {
//                    catCountP.textContent = model.counter;
//                }
//            }
//        });
//    }
//}


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

octopus.init();