var urlAPI = 'https://jsonplaceholder.typicode.com/todos';

Vue.filter('busqueda', function(value, palabra){
	if(value.search(palabra) != -1)
	return  value;	
});

new Vue ({
	el: '#main',
	created: function(){
		this.consultarAPI();
	},
	data: {
		tareas: [],
		palabra: '',
	},
	methods: {
		consultarAPI: function(){
			this.$http.get(urlAPI)
				.then(function(respuesta){
					this.tareas =respuesta.data;
					console.log(respuesta);
				});
		},
		
	},
	components: {
		'personas': {
			template: '<div><ul v-for="persona in filtrarTitulo(lista, palabra)">\
					<li>{{ persona.title }}</li>\
				</ul></div>',
			props: ['lista', 'palabra'],

			methods: {
				filtrarTitulo: function(valores, palabra){
					return valores.filter(function(valor){
						if (valor.title.search(palabra) != -1)
							return valor;
					});
				},		
			},
		},
	},
});