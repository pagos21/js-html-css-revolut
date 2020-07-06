console.log("Here!");
$(document).ready(function(){
  $(".p_drop").mouseenter(
    function(){
      $(this).next(".dropCont").fadeIn("slow");
    }
  )


  $(".p_drop").mouseleave(
    function(){
      $(this).next(".dropCont").fadeOut("slow");
    }
  )
})
