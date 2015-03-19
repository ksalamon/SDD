Template.informacjeKwestia.events({
    'click .glyphicon-thumbs-up': function(event, template){
        Session.set('kwestiaInScope',this);
    }
});