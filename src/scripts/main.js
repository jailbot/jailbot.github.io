var home = {

  headerHeight: 140,

  createPattern: function(){

    // add more color options
    // http://bl.ocks.org/mbostock/5577023
    // YlOrRd
    // OrRd
    // YlOrBr
    // Reds
    //// Oranges
    //// Greys
    // Spectral
    var cellSize = 102;
    var pattern = Trianglify({
      // api options
      // http://qrohlf.com/trianglify/
      width: window.innerWidth,
      height: window.innerHeight,
      cell_size: cellSize,
      x_colors: "YlOrRd"
    });
    $("#mainHeader").append(pattern.canvas());
  },

  headerScrollListener: function(){
    var _this = this;
    $(window).on('scroll', function(e){
      var vh = Math.floor(window.innerHeight - window.scrollY);
      if (vh > _this.headerHeight){
        $("#mainHeader").css({
          height: vh
        });
      } else {
        $("#mainHeader").css({
          height: _this.headerHeight
        });
      }
    });
  },

  contentOpacityScroll: function(){
    $(window).on('scroll', function(e){
      var op = window.scrollY / window.innerHeight;
      if (op <= 1){
        $(".container").css("opacity", op);
        $(".soundcloud").css("opacity", op);
      } else {
        $(".container").css("opacity", 1);
        $(".soundcloud").css("opacity", 1);
      }
    });
  },

  expandPhoto: function(){
    $(".photo").on('click', function(){
      var $self = $(this);
      if($self.hasClass("active")){
        $self.css({
          height: 102
        });
        $("html,body").animate({
          scrollTop: $self.offset().top - 200
        });
      } else {
        $self.css({
          height: $self.find('img').innerHeight()
        });
      }
      $self.toggleClass("active");
      console.log();

      //console.log();
    });
  },

  setSectionIndex: function(){
    var index = 0;
    $('.container section').each(function(i){
      if($(this).css('display') === "none"){
        return;
      }
      $(this).find("header h4 span").text("0" + index);
      index++;
    });
  },

  updateContactName: function(){
    $('.contact .name').on('change', function(){
      var newValue = $('.contact textarea').text().replace("John Doe", this.value);
      $('.contact textarea').text(newValue);
    });
  },
  flag: function(){
    $('.credits .flag').on('click', function(){
      $(this).toggleClass('active');
      $(this).toggleClass('inactive');
    });
  },


  init: function(){
    this.createPattern();
    this.headerScrollListener();
    this.contentOpacityScroll();
    this.expandPhoto();
    this.setSectionIndex();
    this.updateContactName();
    this.flag();
  }
}


$(document).ready(function(){
  home.init();
});