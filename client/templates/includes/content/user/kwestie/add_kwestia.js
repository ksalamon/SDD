Template.addKwestiaForm.events({
    'submit form': function (e) {
        e.preventDefault();
        var newKwestia = [
            {
                //dataWprowadzenia: $(e.target).find('[name=dzienW]').val() + ' ' +
                //                  $(e.target).find('[name=miesiacW]').val() + ' ' +
                //                  $(e.target).find('[name=rokW]').val(),
                //
                dataWprowadzenia: $(e.target).find('[name=dataWprowadzenia]').val(),
                kwestiaNazwa: $(e.target).find('[name=kwestiaNazwa]').val(),
                priorytet: $(e.target).find('[name=priorytet]').val(),
                temat_id: $(e.target).find('[name=tematy]').val(),
                rodzaj_id: $(e.target).find('[name=rodzaje]').val(),
                dataDyskusji: $(e.target).find('[name=dataDyskusji]').val(),
                dataGlosowania: $(e.target).find('[name=dataGlosowania]').val(),
                historia: $(e.target).find('[name=historia]').val(),
                krotkaTresc: $(e.target).find('[name=krotkaTresc]').val(),
                szczegolowaTresc: $(e.target).find('[name=szczegolowaTresc]').val()

            }];
        if (isNotEmpty(newKwestia[0].dataWprowadzenia) &&
            isNotEmpty(newKwestia[0].kwestiaNazwa) &&
            isNotEmpty(newKwestia[0].priorytet) &&
            isNotEmpty(newKwestia[0].temat_id) &&
            isNotEmpty(newKwestia[0].rodzaj_id) &&
            isNotEmpty(newKwestia[0].dataDyskusji) &&
            isNotEmpty(newKwestia[0].dataGlosowania) &&
            isNotEmpty(newKwestia[0].historia) &&
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
    }
});
Template.addKwestiaForm.rendered = function(){
    $('#test1').datetimepicker({});
    $('#test2').datetimepicker({});
    $('#test3').datetimepicker({});
    setTematy();
    setRodzaje();
    setDays();
    setMonths();
    setYears();

}
