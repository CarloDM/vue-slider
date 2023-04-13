/*
1.creare l oggetto immagini -------OK
2.sentire il click a next e prev
3.contatore immagini

5.limitare contatore per ciclare immagini caricate
6.
 */



const { createApp } = Vue ;

createApp( {
  data() {
    return {
      images : [
        "assets-slider/img/01.webp",
        "assets-slider/img/02.webp",
        "assets-slider/img/03.webp",
        "assets-slider/img/04.webp",
        "assets-slider/img/05.webp",],
      
      inputCounter : 0,
      active:'active',
      thumbs : {
        thumb1 : 'act',
        thumb2 : '',
        thumb3 : '',
        thumb4 : '',
        thumb5 : '',
    },



    }
  },

  methods: {
    next: function(){
      if (this.inputCounter > this.images.length -2 ) {
        return this.inputCounter = 0 , this.addActive(); 
        }
        return this.inputCounter++,
        console.log('next',this.inputCounter, this.images.length - 1), this.addActive();       
    },

    prev: function(){

      if (this.inputCounter <= 0 ) {
        return this.inputCounter = this.images.length -1, this.addActive();  
        }else
        return this.inputCounter--, 
        console.log('prev',this.inputCounter) , this.addActive();  
    },

    addActive: function() {
      this.thumbs = {
        thumb1 : '',
        thumb2 : '',
        thumb3 : '',
        thumb4 : '',
        thumb5 : '',
    }
      inputC = this.inputCounter ;

      if (inputC == 0) {
        return this.thumbs.thumb1 = 'active', console.log('return if',this.thumbs)
      }else if (inputC == 1) {
        return this.thumbs.thumb2 = 'active', console.log('return if',this.thumbs)
      }else if (inputC == 2) {
        return this.thumbs.thumb3 = 'active', console.log('return if',this.thumbs)
      }else if (inputC == 3) {
        return this.thumbs.thumb4 = 'active', console.log('return if',this.thumbs)
      }else if (inputC == 4) {
        return this.thumbs.thumb5 = 'active', console.log('return if',this.thumbs)
      }
      return console.log('return else',this.thumbs.thumb1)
  }

    // thumbsScroll(inCount, n){

    // }

  },
  
  mounted(){
    this.addActive();
    console.log(this.thumbs.thumb1)
    console.log('mounted')
  }

}).mount('#app')
