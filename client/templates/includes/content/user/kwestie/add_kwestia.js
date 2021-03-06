Template.addKwestiaForm.events({
    'submit form': function (e) {
        e.preventDefault();
        var newKwestia = [
            {
                //dataWprowadzenia: $(e.target).find('[name=dzienW]').val() + ' ' +
                //                  $(e.target).find('[name=miesiacW]').val() + ' ' +
                //                  $(e.target).find('[name=rokW]').val(),
                //
                //dataWprowadzenia: $(e.target).find('[name=dataWprowadzenia]').val(),
                dataWprowadzenia: moment().format('DD/MM/YYYY HH:mm A'),
                kwestiaNazwa: $(e.target).find('[name=kwestiaNazwa]').val(),
                priorytet: 0,
                sredniaPriorytet: 0,
                temat_id: $(e.target).find('[name=tematy]').val(),
                rodzaj_id: $(e.target).find('[name=rodzaje]').val(),
                dataDyskusji: $(e.target).find('[name=dataDyskusji]').val(),
                dataGlosowania: $(e.target).find('[name=dataGlosowania]').val(),
                //historia: $(e.target).find('[name=historia]').val(),
                krotkaTresc: $(e.target).find('[name=krotkaTresc]').val(),
                szczegolowaTresc: $(e.target).find('[name=szczegolowaTresc]').val()

            }];
        if (//isNotEmpty(newKwestia[0].dataWprowadzenia) &&
            isNotEmpty(newKwestia[0].kwestiaNazwa) &&
            //isNotEmpty(newKwestia[0].priorytet) &&
            isNotEmpty(newKwestia[0].temat_id) &&
            isNotEmpty(newKwestia[0].rodzaj_id) &&
            isNotEmpty(newKwestia[0].dataDyskusji) &&
            isNotEmpty(newKwestia[0].dataGlosowania) &&
            //isNotEmpty(newKwestia[0].historia) &&
            isNotEmpty(newKwestia[0].krotkaTresc) &&
            isNotEmpty(newKwestia[0].szczegolowaTresc)
        ) {
            Meteor.call('addKwestia', newKwestia, function (error) {
                if (error)
                {
                    if (typeof Errors === "undefined")
                        Log.error('Error: ' + error.reason);
                    else
                    {
                        throwError(error.reason);
                    }
                }
                else
                {
                    Router.go('listKwestia');
                }
            });
        }
        else
        {
            if(newKwestia[0].kwestiaNazwa === '')
                document.getElementById('kwestiaNazwaGroup').classList.add('has-error');
            else
                document.getElementById('kwestiaNazwaGroup').classList.remove('has-error');

            if(newKwestia[0].temat_id === '0')
                document.getElementById('tematyGroup').classList.add('has-error');
            else
                document.getElementById('tematyGroup').classList.remove('has-error');

            if(newKwestia[0].rodzaj_id === '0')
                document.getElementById('rodzajeGroup').classList.add('has-error');
            else
                document.getElementById('rodzajeGroup').classList.remove('has-error');

            if(newKwestia[0].dataDyskusji === '')
                document.getElementById('dataDyskusjiGroup').classList.add('has-error');
            else
                document.getElementById('dataDyskusjiGroup').classList.remove('has-error');

            if(newKwestia[0].dataGlosowania === '')
                document.getElementById('dataGlosowaniaGroup').classList.add('has-error');
            else
                document.getElementById('dataGlosowaniaGroup').classList.remove('has-error');

            if(newKwestia[0].krotkaTresc === '')
                document.getElementById('krotkaTrescGroup').classList.add('has-error');
            else
                document.getElementById('krotkaTrescGroup').classList.remove('has-error');

            if(newKwestia[0].szczegolowaTresc === '')
                document.getElementById('szczegolowaTrescGroup').classList.add('has-error');
            else
                document.getElementById('szczegolowaTrescGroup').classList.remove('has-error');
        }
    }
});
Template.addKwestiaForm.rendered = function(){
    //$('#test1').datetimepicker({sideBySide: true});
    $('#test2').datetimepicker({sideBySide: true});
    $('#test3').datetimepicker({sideBySide: true});
    setTematy();
    setRodzaje();
    setDays();
    setMonths();
    setYears();

}
