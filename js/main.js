$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
      if (scroll >= 40) {               // se rolar 40px ativa o evento
        $("#menu").addClass("ativo");    //coloca a classe "ativo" no id=menu
      } else {
        $("#menu").removeClass("ativo"); //se for menor que 40px retira a classe "ativo" do id=menu
      }
    });