Vue.component('cita', {
	template: '\
		<div class="panel panel-primary">\
			<div class="panel-body">\
				<h1 v-text="citaElegida"></h1>\
			</div>\
			<div class="panel-footer">\
				<button type="button" @click="sumarVoto(true)" class="btn btn-success">Me Gusta | {{ votosSi }}</button>\
				<button type="button" @click="sumarVoto(false)" class="btn btn-danger">No me Gusta | {{ votosNo }}</button>\
			</div>\
		</div>\
	',
	mounted: function(){
		this.elegirCita();
	},

	data: function(){
		return {
			votosSi: 0,
			votosNo: 0,

			citaElegida: '',
		
			citas: [
				'"It might help if we ran the MBAs out of Washington." -- Admiral Grace',
				'"A mind is a terrible thing to have leaking out yours ears." -- The League',
				'"Only the hypocrite is really rotten to the core" -- Hannah Arendt.',
				'"Yo baby yo baby yo." -- Eddie Murphy',
				'A morsel of genuine history is a thing so rare as to be always valuable. -- Thomas Jefferson'
			],

		};
	},

	methods: {
		elegirCita: function(){
			var cita = this.citas[Math.floor(Math.random() * this.citas.length)];

			this.citaElegida = cita;
		},

		sumarVoto: function(voto){
			if(voto)
				this.votosSi++;
			else
				this.votosNo++;
		},
		restarVoto: function(){
			if (this.votos > 0)
			this.votos--;
		}
	}
});

new Vue ({
	el: '#main',	

});