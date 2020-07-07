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

  $(".hiddenBar").click(
    function(){
      $(".hiddenMenu").fadeIn("slow");

    }
  )

  $(".close").click(
    function(){
      $(".hiddenMenu").fadeOut("slow");
      if(this.class != 'close') {
        $(".hiddenMenu").hide();
      }

    }
  )

  $(".hiddenMenuArts").click(
    function(){
      $(this).children(".hiddenParag").slideToggle(1000);
      $(this).children("i").toggle("fast");
    }
  )
})
