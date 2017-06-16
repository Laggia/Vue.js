new Vue ({
	el: '#main',
	data: {
		persona: {
			nombre: 'Juan',
			profesion: 'dev',
			ciudad: 'Valencia'
		},
		
		numeros: [
			1,2,3,4,5
		],
		semana: [
			{nombre: 'Lunes', numero: 1},
			{nombre: 'Martes', numero: 2},
			{nombre: 'Miércoles', numero: 3},
			{nombre: 'Jueves', numero: 4},
			{nombre: 'Viernes', numero: 5},
			{nombre: 'Sábado', numero: 6},
			{nombre: 'Domingo', numero: 7},
		]
	}
});