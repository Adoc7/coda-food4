Template.postSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var categorie = {
            nom: $(e.target).find('[name=nom]').val(),
            prenom: $(e.target).find('[name=prenom]').val(),
            tel: $(e.target).find('[name=tel]').val(),
            numeroR: $(e.target).find('[name=numeroR]').val(),
            typeR: $(e.target).find('[name=typeR]').val(),

            nomR: $(e.target).find('[name=nomR]').val(),
            cpV: $(e.target).find('[name=cpV]').val(),
            ville: $(e.target).find('[name=ville]').val()
        };

        categorie._id = Categories.insert(categorie);
        Router.go('categoriePage', categorie);
        Router.go('categoriePage2', categorie);
    }
});