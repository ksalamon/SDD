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
        var hidden = document.getElementById('pole').value;
        var liczba = parseInt(hidden);
        //var newGlosujacy = [
        //    {
        //        user_id: user._id,
        //        obecny_priorytet: liczba
        //    }
        //];
        var flaga = false;

        for(var i=0; i < kwestia.glosujacy.length; i++)
        {
            if(kwestia.glosujacy[i][0] === user._id)
            {
                if(kwestia.glosujacy[i][1] === liczba)
                {
                    throwError("Nadałeś już priorytet o tej wadze w tej kwestii!");
                    return false;
                }
                else if(kwestia.glosujacy[i][1] > liczba)
                {
                    var roznica = kwestia.glosujacy[i][1] - liczba;
                    roznica = -roznica;
                    var srednia = (kwestia.priorytet + roznica)/kwestia.glosujacy.length;
                    Kwestia.update(currentKwestiaId, {$set: {glosujacy: [[user._id, liczba]], sredniaPriorytet: srednia}, $inc: {priorytet: roznica}});
                    flaga = true;
                }
                else if(kwestia.glosujacy[i][1] < liczba)
                {
                    var roznica = liczba - kwestia.glosujacy[i][1];
                    var srednia = (kwestia.priorytet + roznica)/kwestia.glosujacy.length;
                    Kwestia.update(currentKwestiaId, {$set: {glosujacy: [[user._id, liczba]], sredniaPriorytet: srednia} , $inc: {priorytet: roznica}});
                    flaga = true;
                }
                $("#nadajpriorytetkwestia").modal("hide");
            }
        }
        //if(_.include(kwestia.glosujacy, user._id))
        //{
        //
        //    throwError("Nadałeś już priorytet tej kwestii!");
        //    return false;
        //}
        if(flaga === false)
        {
            var srednia = (kwestia.priorytet + liczba)/(kwestia.glosujacy.length + 1);
            Kwestia.update(currentKwestiaId, {$addToSet: {glosujacy: [user._id, liczba]}, $inc: {priorytet: liczba}, $set: {sredniaPriorytet: srednia}});
            //Meteor.call('addGlosujacy', newGlosujacy, function(error){
            //    if (error)
            //    {
            //        if (typeof Errors === "undefined")
            //            Log.error('Error: ' + error.reason);
            //        else
            //        {
            //            throwError(error.reason);
            //        }
            //    }
            //});
            //
            //Kwestia.update(currentKwestiaId, {$addToSet: {glosujacy_id: [user._id, liczba]}, $inc: {priorytet: liczba}, $set: {sredniaPriorytet: srednia}});
            $("#nadajpriorytetkwestia").modal("hide");
            flaga = true;
        }
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