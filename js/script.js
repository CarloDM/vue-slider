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
      if (this.inputCounter > this.images.length -2 ) {
        return this.inputCounter = 0;  
        }
        return this.inputCounter++,
        console.log('next',this.inputCounter, this.images.length - 1)
      
    },
    prev: function(){
      if (this.inputCounter < 1 ) {
        this.inputCounter = this.images.length;  
        }
      return this.inputCounter--, 
      console.log('prev',this.inputCounter)

    },

  },
  
  mounted(){
    console.log('mounted')
  }
}).mount('#app')
