var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
//    this.nicknames = ko.observableArray(["Bubble", "MagicMike", "Keks"]);
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://s-media-cache-ak0.pinimg.com/originals/3f/df/b1/3fdfb172bb817793c5a842b17f714d5c.jpg')
    
    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

    this.level = ko.computed(function() {
        debugger;
        if (this.clickCount() > 10) {
            return this.level = 'Teen';
            console.log("works");
            
        } else if (this.clickCount() > 5) {
            return this.level = 'Infant';
            console.log('infant')
            
        } else {
            return this.level = "Newborn";
            console.log('start')
        }
    }, this);
}

ko.applyBindings(new ViewModel());