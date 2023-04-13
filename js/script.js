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
      images : ["assets-slider/img/01.webp",
                "assets-slider/img/02.webp",
                "assets-slider/img/03.webp",
                "assets-slider/img/04.webp",
                "assets-slider/img/05.webp",
                ],
      
      indexCounter : 3,
      inputCounter : 0,         

    }
  },

  methods: {
    next: function(){
      return console.log('next',this.inputCounter, this.images.length - 1),
      // if (this.inputCounter > this.images.length ) {
      // this.inputCounter = 0;  
      // },
      this.inputCounter++
      
    },
    prev: function(){
      return console.log('prev',this.inputCounter),
      this.inputCounter--
    },

  },
  
  mounted(){
    console.log('mounted')
  }
}).mount('#app')
