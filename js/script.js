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

      autoScroll : setInterval(this.next,3000),

      inputCounter : 0,

      thumbs : {
        thumb1 : 'act',
        thumb2 : '',
        thumb3 : '',
        thumb4 : '',
        thumb5 : '',
      }
    }
  },

  methods: {
    next: function(){
      if (this.inputCounter > this.images.length -2 ) {
        return this.inputCounter = 0 , this.addActive(); 
        }
        return this.inputCounter++,
        console.log('next') , this.addActive();       
    },

    prev: function(){

      if (this.inputCounter <= 0 ) {
        return this.inputCounter = this.images.length -1, this.addActive();  
        }else
        return this.inputCounter--, 
        console.log('prev') , this.addActive();  
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
          this.thumbs.thumb1 = 'active'
      }else if (inputC == 1) {
          this.thumbs.thumb2 = 'active'
      }else if (inputC == 2) {
          this.thumbs.thumb3 = 'active'
      }else if (inputC == 3) {
          this.thumbs.thumb4 = 'active'
      }else if (inputC == 4) {
          this.thumbs.thumb5 = 'active'
      }
      console.log('thumbs',this.thumbs)
  },

  changeActive: function(numb){
    this.inputCounter = numb - 1;
    this.addActive();
    console.log(numb);
  },
  
  over: function(event){
    return clearInterval(this.autoScroll),
    console.log(event)
  },
  
  leave: function(event){
    return this.autoScroll = setInterval(this.next,3000),
    console.log(event)
  },


  },
  
  mounted(){


    this.addActive();
    console.log('mounted')
  }

}).mount('#app')
