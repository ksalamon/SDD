Template.priorytetKwestiaModalInner.helpers({
    kwestiaInScope: function() {
        return Session.get('kwestiaInScope');
    }
});

Template.priorytetKwestiaModalInner.events({
    'click .btn-danger': function(e) {
        e.preventDefault();
        var user = new Meteor.user();
        var currentKwestiaId = this._id;
        var kwestia = Kwestia.findOne(currentKwestiaId);
        //console.log("kwestia id "+currentKwestiaId);
        if(_.include(kwestia.glosujacy, user._id)){
            //console.log("zaglosowales juz!!");
            //new Meteor.Error(422,"Zagłosowałeś już na tą kwestię!");
            //throw new Meteor.Error(409,'Zagłosowałeś już na tą kwestię!');
            throw new Meteor.Error(422,'Already upvoted this post');
        }
        var hidden = document.getElementById('pole').value;
        var liczba = parseInt(hidden);
        Kwestia.update(currentKwestiaId, {$addToSet: {glosujacy: user._id}, $inc: {priorytet: liczba}});
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