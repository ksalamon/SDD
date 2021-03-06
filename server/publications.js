Meteor.publish('rodzaj', function() {
    return Rodzaj.find();
});
Meteor.publish("allUserData", function () {
    return Meteor.users.find({});
});

Meteor.publish(null, function (){
    return Meteor.roles.find({})
});

Meteor.publish('parametr', function() {
    return Parametr.find();
});

Meteor.publish('temat', function() {
    return Temat.find();
});

Meteor.publish('raport', function(){
   return Raport.find();
});

Meteor.publish('kwestia', function(){
    return Kwestia.find();
});

Meteor.publish('kwestia_tresc', function(){
    return KwestiaTresc.find();
});
Meteor.publish('users', function(){
    return Users.find();
});
Meteor.publish('glosujacy', function() {
    return Parametr.find();
});

Meteor.startup(function () {
    var data = [
        {
            "Login": "adminSDD",
            "FirstName": "Admin",
            "LastName": "SDD",
            "Profession": "Administrator",
            "Address": "",
            "Zip": "",
            "Gender": "mężczyzna",
            "Phone": "",
            "Email": "sdd.meteor@gmail.com",
            "Web": "sdd.meteor.com",
            "Role": "admin"
        }];
    if((Meteor.users.find().count() == 0)) {
        var users = [];
        for (var i = 0; i < data.length; i++) {
            users.push({
                    first_name: data[i].FirstName,
                    last_name: data[i].LastName,
                    full_name: data[i].FirstName + ' ' + data[i].LastName,
                    login: data[i].Login,
                    email: data[i].Email,
                    profession: data[i].Profession,
                    address: data[i].Address,
                    zip: data[i].Zip,
                    gender: data[i].Gender,
                    phone: data[i].Phone,
                    web: data[i].Web,
                    roles: data[i].Role
                }
            );
        }
        _.each(users, function (user) {
            var id;

            id = Accounts.createUser({
                username: user.login,
                email: user.email,
                password: "2015adminSDD!",
                profile: {
                    first_name: user.first_name,
                    last_name: user.last_name,
                    full_name: user.full_name,
                    profession: user.profession,
                    address: user.address,
                    zip: user.zip,
                    gender: user.gender,
                    phone: user.phone,
                    web: user.web,
                    role: user.roles
                }
            });

            if (user.roles.length > 0) {
                Roles.addUsersToRoles(id, user.roles);
            }
        });
    }
});