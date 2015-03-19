Raport = new Mongo.Collection("raport");

Raport.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    }
});

Meteor.methods({
    addRaport: function(newRaport){
        Raport.insert({
            terminyGlosowan: newRaport[0].terminyGlosowan,
            uzytkownicy: newRaport[0].uzytkownicy,
            realizacja: newRaport[0].realizacja
        });
    }
});