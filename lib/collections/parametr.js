Parametr = new Mongo.Collection('parametr');

Parametr.allow({
    insert: function(){
        return true;
    },
    update: function () {
        return true;
    },
    remove: function(){
        return true;
    }
});
Meteor.methods({
    addParametr: function(newParametr) {
        Parametr.insert({
            nazwaOrganizacji: newParametr[0].nazwaOrganizacji,
            terytorium: newParametr[0].terytorium,
            kontakty: newParametr[0].kontakty,
            regulamin: newParametr[0].regulamin
        });
    }
});