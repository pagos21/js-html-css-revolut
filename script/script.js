console.log("Here!");
$(document).ready(function(){
  $(".p_drop").mouseenter(
    function(){
      $(this).children(".dropCont").show("fast");
    }
  )

  $(".p_drop").mouseleave(
    function(){
      $(this).children(".dropCont").hide("fast");
    }
  )


})
