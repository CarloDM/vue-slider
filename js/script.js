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

      autoScroll : null,

      inputCounter : 0,

      on : false,

      offCanv: 'off',
      nextClass: 'next',
      prevClass: 'prev',

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

    // prev e next button
    next: function(){
      if (this.inputCounter > this.images.length -2 ) {
        return  this.inputCounter = 0 , this.addActive(), console.log('next zero') 
        }
          this.inputCounter++,
          console.log('next') ; this.addActive();       
    },// -------------------------------------------
    prev: function(){
      if (this.inputCounter <= 0 ) {
        return  this.inputCounter = this.images.length -1, this.addActive();  
        }else
          this.inputCounter--, 
        console.log('prev') , this.addActive();  
    },// -------------------------------------------

    // add & change thumb active class--------------
    addActive: function() {
      // reset thumbs
      this.thumbs = {
        thumb1 : '',
        thumb2 : '',
        thumb3 : '',
        thumb4 : '',
        thumb5 : '',
    }

      inputC = this.inputCounter ;
    // set active
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
  },// -------------------------------------------

    changeActive: function(numb){
    this.inputCounter = numb - 1;
    this.toggleImg();
    this.addActive();
    this.over();
    console.log(numb);
  },// -------------------------------------------
  
  // mause over & leave 
  over: function(){
    clearInterval(this.autoScroll), console.log('clearInterval')
  },// -------------------------------------------
  leave: function(){
    this.autoScroll = setInterval(this.next,3000), console.log('setInterval')
  },// -------------------------------------------
  toggleImg: function(){
    this.on = !this.on;
    if (this.on){
      this.offCanv = 'on',
      this.over(),
      this.nextClass = 'off',
      this.prevClass = 'off'
    }

    else {this.offCanv = 'off',this.over()}
    this.nextClass = 'next',
    this.prevClass = 'prev'
  }
  },
  
  mounted(){
    this.addActive();

    setTimeout(() => {
      this.autoScroll = setInterval(this.next,3000), console.log('setInterval')
    }, 2000);
    console.log('mounted')
  }

}).mount('#app')
