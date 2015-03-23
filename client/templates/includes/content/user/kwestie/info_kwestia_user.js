Template.informacjeKwestia.events({
    'click .btn-success': function(event, template){
        Session.set('kwestiaInScope',this);
    }
});
Template.informacjeKwestia.helpers({
    glosujacyCount: function () {
        var currentKwestiaId = this._id;
        var tab = Kwestia.findOne(currentKwestiaId);
        var liczba = tab.glosujacy.length;
        return liczba;
    },
    nazwa: function(){
        var currentKwestiaId = this._id;
        var tab = Kwestia.findOne(currentKwestiaId);
        return tab;
    }
});