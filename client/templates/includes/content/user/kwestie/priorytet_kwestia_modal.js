Template.priorytetKwestiaModalInner.helpers({
    kwestiaInScope: function() {
        return Session.get('kwestiaInScope');
    }
});

Template.priorytetKwestiaModalInner.events({
    'click .btn-danger': function(e) {
        e.preventDefault();
        var currentKwestiaId = this._id;
        var hidden = document.getElementById('pole').value;
        var liczba = parseInt(hidden);
        Kwestia.update(currentKwestiaId, {$inc: {priorytet: liczba}});
        $("#nadajpriorytetkwestia").modal("hide");

    },
    'click #b1': function(e){
        e.preventDefault();
        var hidden = document.getElementById('pole');
        var element1 = document.getElementById('b1');
        hidden.value=element1.value;
        console.log(hidden.value);
        return hidden.value;
    },
    'click #b2': function(e){
        e.preventDefault();
        var hidden = document.getElementById('pole');
        var element2 = document.getElementById('b2');
        hidden.value=element2.value;
        console.log(hidden.value);
        return hidden.value;
    },
    'click #b3': function(e){
        e.preventDefault();
        var hidden = document.getElementById('pole');
        var element3 = document.getElementById('b3');
        hidden.value=element3.value;
        console.log(hidden.value);
        return hidden.value;
    },
    'click #b4': function(e){
        e.preventDefault();
        var hidden = document.getElementById('pole');
        var element4 = document.getElementById('b4');
        hidden.value=element4.value;
        console.log(hidden.value);
        return hidden.value;
    },
    'click #b5': function(e){
        e.preventDefault();
        var hidden = document.getElementById('pole');
        var element5 = document.getElementById('b5');
        hidden.value=element5.value;
        console.log(hidden.value);
        return hidden.value;
    },
    'click #b-1': function(e){
        e.preventDefault();
        var hidden = document.getElementById('pole');
        var element1 = document.getElementById('b-1');
        hidden.value=element1.value;
        console.log(hidden.value);
        return hidden.value;
    },
    'click #b-2': function(e){
        e.preventDefault();
        var hidden = document.getElementById('pole');
        var element2 = document.getElementById('b-2');
        hidden.value=element2.value;
        console.log(hidden.value);
        return hidden.value;
    },
    'click #b-3': function(e){
        e.preventDefault();
        var hidden = document.getElementById('pole');
        var element3 = document.getElementById('b-3');
        hidden.value=element3.value;
        console.log(hidden.value);
        return hidden.value;
    },
    'click #b-4': function(e){
        e.preventDefault();
        var hidden = document.getElementById('pole');
        var element4 = document.getElementById('b-4');
        hidden.value=element4.value;
        console.log(hidden.value);
        return hidden.value;
    },
    'click #b-5': function(e){
        e.preventDefault();
        var hidden = document.getElementById('pole');
        var element5 = document.getElementById('b-5');
        hidden.value=element5.value;
        console.log(hidden.value);
        return hidden.value;
    }

});