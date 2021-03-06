Template.loginForm.events({
    'submit form': function(e) {
        e.preventDefault();

        var user = {
            login: $(e.target).find('[name=login]').val(),
            password: $(e.target).find('[name=password]').val()
        }

        if (isNotEmpty(user.login) && isNotEmpty(user.password) && isValidPassword(user.password)) {
            Meteor.loginWithPassword(user.login, user.password, function(err) {
                if (err) {
                    throwError('Niepoprawne dane logowania.');
                } else {
                    if(Meteor.loggingIn()) {
                        Router.go('home');
                    }
                }
            });
        }else{
            return false;
        }
    }
});