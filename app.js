// *==== model ====*

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
};



// *==== octopus ====*

const octopus = {
    init: function() {
        model.currentCat = model.cats[0];
        viewCat.init();
        viewCatList.init();
    },
    getCurrentCat: function() {
        return model.currentCat;
    },
    getCat: function(elem) {
        for (var i in model.cats) {
            var cat = model.cats[i];
            if (elem.textContent === cat.name) {
                model.currentCat = cat;
                viewCat.render();
            }
        }
    },
    getAllCats: function() {
        return model.cats;
    },
    clickCounter: function() {
        model.currentCat.counter++;
        viewCat.render();
    },
    adminFormFlag: true,
    
    eventListeners: function() {
        const catsLi = document.querySelectorAll('.cat--li');
        const catPic = document.getElementById('catPic');
        const btnAdmin = document.getElementById('btnAdmin');
        const btnCancel = document.getElementById('btnCancel');
        
        catsLi.forEach(function(cat) {            
            cat.addEventListener('click', function() {
                octopus.getCat(this);
                octopus.adminFormFlag = false;
                viewAdminFrom.init();
            });
        })
        catPic.addEventListener('click', function() {
            octopus.clickCounter();
        })
        btnAdmin.addEventListener('click', function() {
            octopus.adminFormFlag = true;
            viewAdminFrom.init();
        })
        btnCancel.addEventListener('click', function() {
            octopus.adminFormFlag = false;
            viewAdminFrom.init();
        })
    }
};



// *==== view ====*


const viewCat = {
    init: function() {
        const catName = document.getElementById('catName');
        const catPic = document.getElementById('catPic');
        const catCounter = document.getElementById('catCounter');
        
        catName.textContent = octopus.getCurrentCat().name;
        catPic.setAttribute("src", octopus.getCurrentCat().imgSrc);
        catCounter.textContent = octopus.getCurrentCat().counter;
    },
    render: function() {
        this.init();
    }
};

const viewCatList = {
    init: function() {
        const catList = document.getElementById('catList');
        const cats = octopus.getAllCats();
        for (var i in cats) {
            var cat = cats[i];
            var catLi = document.createElement('li');
            catLi.classList.add("cat--li")
            catLi.textContent = cat.name;
            catList.appendChild(catLi);
        }
        octopus.eventListeners();
    }
}

const viewAdminFrom = {
    init: function() {
        const adminForm = document.getElementById('adminForm');
        if (octopus.adminFormFlag) {
            adminForm.style.display = "block";
        } else {
            adminForm.style.display = "none";
        }
    }
}
octopus.init();



//model.currentCat.name = "borys";
//console.log(model.currentCat);