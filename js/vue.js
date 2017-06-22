new Vue ({
			el: '#app',
			data:{
				newTask: '',
				tasks:[
					{
						task: 'Lo mismo primero',
						pending: true
					},
					{
						task: 'Lo mismo primero',
						pending: false
					},
					{
						task: 'Lo mismo primero',
						pending: true
					},
				]
			},
			computed: {
				tareasPendientes: function(){
					return this.tasks.filter(function(item){
						return item.pending;
					});
				}				
			},
			methods:{
				createTask: function(event){
					event.preventDefault();
					this.tasks.push({
						task: this.newTask,
						pending: false,
					});
					this.newTask ='';
				}
			},

		});