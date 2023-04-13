/*
1.creare l oggetto immagini
2.sentire il click a next e prev
3.contatore immagini
4.assegnazione classe active
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

    }
  },

  methods: {

  },
  
  mounted(){
    console.log('mounted')
  }
}).mount('#app')
