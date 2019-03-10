var app = new Vue({ 
    el: '#app',
    data: {
        seri_ana_gerilim: null,

        seri_direnc_toplam: null,

        seri_direnc: [],

    },

    methods: {


    	hesapla: function(){

    		console.log(this.seri_direnc);

    		console.log('Eşdeğer direnç ' + this.getSeriDirencToplam);

    		console.log('akim: ' +this.getSeriAkim);

    		console.log('guc: ' + this.getSeriGuc);



    	},

    	seri_direnc_change: function(){

    		this.seri_direnc = [];
    	},

    	getSeriDirencGerilim: function(direnc){

    		console.log('akim::::' + this.getSeriAkim);

    		console.log('direnc::: ' + direnc);
    		
    		return (this.getSeriAkim * direnc);

    	},

    	getSeriDirencGuc: function(direnc){

    		return this.getSeriDirencGerilim(direnc) * this.getSeriAkim;
    		
    	}


    },

    computed: {

	    getSeriDirencToplam () {
	        
	        // Check if we have seri direnc
	    	if(this.seri_direnc){

	    		let toplam = 0;

	    		// For each array
	    		this.seri_direnc.forEach(function(seri) {
				  	
				  	// Add to toplam
	    			toplam = parseInt(seri) + toplam;

				});

	    		// Return toplam
				return toplam;

	    	} else {
	    		return false;
	    	}
	    },


    	getSeriAkim: function(){

    		return this.seri_ana_gerilim / this.getSeriDirencToplam;

    	},

    	getSeriGuc: function(){

    		return this.getSeriAkim * this.seri_ana_gerilim;

    	},

	},

});