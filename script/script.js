console.log("Here!");
$(document).ready(function(){
  $(".p_drop").mouseenter(
    function(){
      $(this).next(".dropCont").show("fast");
    }
  )


  $(".dropCont").mouseleave(
    function(){
      $(this).hide("fast");
    }
  )
  $(".mainbarleft").mouseleave(
    function(){
      $(".dropCont").hide("fast");
    }
  )


})
