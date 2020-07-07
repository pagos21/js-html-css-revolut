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

  $(document).mouseup(function (e){
	var container = $(".hiddenMenu");
  // console.log(e.target);
  // console.log(container.has(e.target));
  // console.log(container.has(e.target).length == 0); Restituisce true se la condizione è falsa
      // se il target del click non è il container stesso && un discendente del cotainer >> se è VERO che la condizione è falsa esegue il fadeOut
	if (!container.is(e.target) && container.has(e.target).length == 0){
		container.fadeOut();
	}
});


console.log();
})
