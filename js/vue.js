var urlAPI = 'https://randomuser.me/api/?results=50';
new Vue ({
	el: '#main',
	created: function(){
		this.consultarAPI();
	},
	data: {
		personas: [],
	},
	methods: {
		consultarAPI: function(){
			this.$http.get(urlAPI)
				.then(function(respuesta){
					this.personas =respuesta.data.results;
				});
		}
	},
	components: {
		'personas': {
			template: '<div><ul v-for="persona in lista">\
					<li>{{ persona.name.first }}</li>\
				</ul></div>',
			props: ['lista']		
		},
	},
});