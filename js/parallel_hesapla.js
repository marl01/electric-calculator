var app = new Vue({ 
    el: '#app',
    data: {
        parallel_ana_gerilim: null,

        parallel_direnc_toplam: null,

        parallel_direnc: [],

    },

    methods: {


    	hesapla: function(){


    	},

    	parallel_direnc_change: function(){

    		this.parallel_direnc = [];
    	},

    	getParallelDirencAkim: function(direnc){

    		
    		return (this.parallel_ana_gerilim /  direnc);

    	},

    	getParallelDirencGuc: function(direnc){

    		return this.getParallelDirencAkim(direnc) * this.parallel_ana_gerilim;
    		
    	}


    },

    computed: {

	    getParallelDirencToplam () {
	        
	        // Check if we have Parallel direnc
	    	if(this.parallel_direnc && this.parallel_direnc_toplam > 0 ){

	    		let toplam = 0;

	    		// For each array
	    		this.parallel_direnc.forEach(function(parallel) {
				  	
				  	// Add to toplam
	    			toplam = (1 / parseInt(parallel) ) + toplam;

				});

	    		// Return toplam
                toplam = ( 1 / toplam);

				return toplam;

	    	} else {
	    		return false;
	    	}
	    },


    	getParallelAkim: function(){

    		return this.parallel_ana_gerilim / this.getParallelDirencToplam;

    	},

    	getParallelGuc: function(){

    		return this.getParallelAkim * this.parallel_ana_gerilim;

    	},

	},

});