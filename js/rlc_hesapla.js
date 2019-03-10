var app = new Vue({ 
    el: '#app',
    data: function() {


        return {

            ana_gerilim: null,

            frekans: null,

            seri_direnc: null,

            seri_direnc_birim: 0,

            seri_l: null,

            seri_l_birim: 0,

            seri_c: null,

            seri_c_birim: 0,

        }


    },

    methods: {


    	hesapla: function(){

            console.log('ana gerilim ' + this.ana_gerilim);

            console.log('frekans ' + this.frekans);

            console.log('seri_direnc ' + this.seri_direnc);

            console.log('seri_direnc_birim ' + this.seri_direnc_birim);

            console.log('seri_l ' + this.seri_l);

            console.log('seri_l_birim ' + this.seri_l_birim);

            console.log('seri_c ' + this.seri_c);

            console.log('seri_c_birim ' + this.seri_c_birim);


            console.log(parseFloat(this.seri_direnc));

            console.log(parseFloat(this.seri_direnc_birim));


            console.log(this.getCalculateR);

            console.log(this.getCalculateXL);



    	},

        u_calc: function(a, b) {

            var sonuc = a * b;

            return sonuc

        },

        i_calc: function(a, b) {

            var sonuc = a / b;
            return sonuc;
        },

        kare: function(a) {

            var sonuc = Math.pow(a, 2);
            return sonuc;

        },

        kok: function(a) {

            var sonuc = Math.sqrt(a);
            return sonuc;

        },

        p_calc: function p_calc(i, r) {

            var sonuc = (this.kare(i) * r);
            return sonuc;

        },

        q_calc: function q_calc(i, x) {

            var sonuc = (this.kare(i) * x);
            return sonuc;

        },

        s_calc: function(p, q) {

            var sonuc = this.kok((this.kare(p) + this.kare(q)));
            return sonuc;

        },

        xl_calc: function(f, l) {

            var sonuc = (2 * Math.PI * f * l);
            return sonuc;

        },

        xc_calc:  function (f,c) {

            var sonuc =  ( 1 / (2 * Math.PI * f * c) );
            return sonuc;
        },

        x_calc:  function (xl,xc){

            if(xl > xc){
                var sonuc = (xl - xc);
            } else {
                var sonuc = (xc - xl);
            }
            return sonuc;
        },

        z_calc: function(r, xl) {

            var sonuc = this.kok(this.kare(r) + this.kare(xl));
            return sonuc;

        },

        cos_calc_h: function(r, z) {

            var sonuc = (r / z);
            return sonuc;

        },

        cos_calc: function(r, z) {

            var sonuc = Math.acos((r / z));
            return sonuc;

        },

        degr_calc: function(r) {

            var sonuc = r * (180 / Math.PI);
            return sonuc;

        },

        pow_calc: function(a, b) {

            if (b == 0) {
                return a;
            }
            var sonuc = (a * Math.pow(10, b));
            return sonuc;

        },



    },

    computed: {

        getCalculated: function(){

            if(this.ana_gerilim && this.frekans && this.seri_direnc && this.seri_l ){

                return true;
            } else {

                return false;
            }

        },

        getCalculateL: function(){


            return this.pow_calc(

                    parseFloat(this.seri_l),

                    parseFloat(this.seri_l_birim)

                )
        },

        getCalculateC: function(){
            return this.pow_calc(

                    parseFloat(this.seri_c),

                    parseFloat(this.seri_c_birim)

                )
        },        

        : function(){

            return this.frekans;
        },

        getCalculateR: function(){

            return this.pow_calc(parseFloat(this.seri_direnc), parseFloat(this.seri_direnc_birim));

        },

        getGerilim: function(){

            return this.ana_gerilim;

        },

        : function(){

            return parseFloat(this.xl_calc(this.getFrekans, this.getCalculateL).toFixed(3));

        },

        getCalculateXC: function(){

            return parseFloat(this.xc_calc(this.getFrekans, this.getCalculateC).toFixed(3));

        },

        getCalculateX: function(){

            return parseFloat(this.x_calc(this.getCalculateXL, this.getCalculateXC).toFixed(3));

        },


        ///////////  var kp = "";



        getCalculateZ: function(){

            return parseFloat(this.z_calc(this.getCalculateR, this.getCalculateXL).toFixed(3));

        },

        getCalculateI: function(){

            return parseFloat(this.i_calc(this.getGerilim, this.getCalculateZ).toFixed(3));

        },

        getCalculateUR: function(){

            return parseFloat(this.u_calc(this.getCalculateI, this.getCalculateR).toFixed(3));

        },

        getCalculateUL : function(){

            return parseFloat(this.u_calc(this.getCalculateI, this.getCalculateXL).toFixed(3));

        },

        getCalculateUC: function(){

            return parseFloat(this.u_calc(this.getCalculateI, this.getCalculateXC).toFixed(3));
        }

        getCalculateP: function(){

            return parseFloat(this.p_calc(this.getCalculateI, this.getCalculateR).toFixed(3));

        },

        getCalculateQ: function(){

            return parseFloat(this.q_calc(this.getCalculateI, this.getCalculateXL).toFixed(3));

        },

        getCalculateS: function(){

            return parseFloat(this.s_calc(this.getCalculateP, this.getCalculateQ).toFixed(3));

        },

        getCalculateCos: function(){

            return parseFloat(this.cos_calc(this.getCalculateR, this.getCalculateZ).toFixed(3));

        },

        getCalculateCosu: function(){

            return  parseFloat(this.degr_calc(this.getCalculateCos).toFixed(3));

        },

        getCalculateCosh: function(){

            return parseFloat(this.cos_calc_h(this.getCalculateR, this.getCalculateZ).toFixed(3));

        },

	},

});