KwestiaTresc = new Mongo.Collection('kwestia_tresc');

KwestiaTresc.allow({
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