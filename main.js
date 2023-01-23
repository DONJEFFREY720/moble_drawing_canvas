var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

     canvas = document.getElementById('myCanvas');
     ctx = canvas.getContext("2d");

    var width=screen.width-70
    var height = screen.height-300
  

   if (width<992) {
    document.getElementById("myCanvas").width = width
    document.getElementById("myCamvas").height = height
    document.body.style.overflow="hidden"                                                                                                                                                     
   }
    
   

    canvas.addEventListener("touchstart", my_touchstart);
   

    
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0] .clientY - canvas.offsetTop;

       
    }

  

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0] .clientY - canvas.offsetTop;

       
        ctx.beginPath();
        ctx.strokeStyle = document.getElementById("color_pen")
        ctx.lineWidth = document.getElementById("width_pen")
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
                                  

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

    



  function clear_area() {
     ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
  }