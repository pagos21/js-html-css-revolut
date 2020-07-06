console.log("Here!");
$(document).ready(function(){
  $(".p_drop").mouseenter(
    function(){
      $(this).next(".dropCont").fadeIn("fast");
    }
  )


  $(".p_drop").mouseleave(
    function(){
      $(this).next(".dropCont").fadeOut("fast");
    }
  )
})
