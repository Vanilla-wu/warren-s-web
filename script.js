$(window).mousemove(function(evt){
    var x = evt.pageX;
    var y = evt.pageY;
    console.log(x);
    
    $("#meat").css("left",x-70+"px");
    $("#meat").css("top",y-70+"px");
    
    
    if (x<$(window).width()/2 - 50){
      $("#cyclopes").attr("src","img/img_left.png");
    }else if (x>$(window).width()/2 + 50){
      $("#cyclopes").attr("src","img/img_right.png");
    }else{
      $("#cyclopes").attr("src","img/img_up.png");
    }
    if (x<$(window).width()/2 - 50 && y<$(window).height()/2){
      $("#cyclopes").attr("src","img/img_left_up.png");
    }
    if (x>$(window).width()/2 + 50 && y<$(window).height()/2){
      $("#cyclopes").attr("src","img/img_right_up.png");
    }
    
    
  });