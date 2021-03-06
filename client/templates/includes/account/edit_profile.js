Template.profileEdit.helpers({
    email: function () {
        return getEmail(this);
    },

    isMan: function (gender) {
        if(gender === 'mężczyzna')
        {
            return true;
        }
        else
        {
            return false;
        }
    },

    isWoman: function (gender) {
        if(gender === 'kobieta')
        {
            return true;
        }
        else
        {
            return false;
        }
    }
});

Template.profileEdit.events({
    'submit form': function(e) {
        e.preventDefault();

        var currentUserId = this._id;
        if( isNotEmpty($(e.target).find('[name=name]').val()) &&
            isNotEmpty($(e.target).find('[name=surname]').val()) &&
            isEmail($(e.target).find('[name=email]').val()))
        {
            var userProperties = {
                emails: {
                  0: { address: $(e.target).find('[name=email]').val() }
                },
                profile: {
                    first_name: $(e.target).find('[name=name]').val(),
                    last_name: $(e.target).find('[name=surname]').val(),
                    full_name: $(e.target).find('[name=name]').val() + ' ' + $(e.target).find('[name=surname]').val(),
                    profession: $(e.target).find('[name=profession]').val(),
                    address: $(e.target).find('[name=address]').val(),
                    zip: $(e.target).find('[name=zipcode]').val(),
                    gender: $(e.target).find('[name=genderRadios]').val(),
                    phone: $(e.target).find('[name=phone]').val(),
                    web: $(e.target).find('[name=website]').val()
                }
            };
            //Users.update(currentUserId, {$set: userProperties}, function(error) {
            //if (error) {
            // display the error to the user
            //alert(error.reason);
            //} else {
            //    Router.go('manage_account');
            //}
            //});

            Meteor.call('updateUser',currentUserId, userProperties, function (error) {
                if (error)
                {
                    // optionally use a meteor errors package
                    if (typeof Errors === "undefined")
                        Log.error('Error: ' + error.reason);
                    else
                    {
                        if(error.error === 409)
                            throwError(error.reason);
                    }
                }
                else
                {
                    Router.go('manage_account');
                }
            });
        }
        else
        {
            console.log('return false');
            return false;
        }
    }
});

//alert(Users.profile.gender);