
App.IndexController = Ember.Controller.extend({
	needs: 'application',

	email : '',
	password : '',

	actions : {
		loginWithGithub : function () {
			this.get('controllers.application.auth').login('github');
		},  
		loginWithFacebook : function () {
			this.get('controllers.application.auth').login('facebook');
		},
		loginWithEmail : function () {
			this.get('controllers.application.auth').login('password', {email: this.get('email'), password: this.get('password')});
		}
	}
});
