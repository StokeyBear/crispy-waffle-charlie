$(function () {
    console.log("Bring on the confusion");
    $("#draggable").draggable();

    var $drag_counter = $("#event-drag"),counts = 0;

    $("#resetGame").click(function () {
      console.log("clicked button");
      counts =0;
      $("span.count").text(counts);
      $("#gameOutput").text("");
    });

    $("#draggable").draggable({
      drag: function (){
        counts++;
        updateCounterStatus ($drag_counter, counts);
      },
    });

    function updateCounterStatus( $event_counter, new_count ) {
    //Various messages for increment counts
      
      var game_msg = "";

      if (new_count <180){
          game_msg = "You're not quite there sweetie"
      } else if ((new_count == 180)) {
        game_msg = "Look at you! No more confusion!"
      } else {
        game_msg = "You've reached enlightenment";
        $(img).attr(
          "src",
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FQLN1WAVm_IsMrg2FA8qZO8t0i3I%3D%2F0x0%3A1024x576%2F1600x900%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F54925923%2Fspongebob_rainbow_meme_video_16x9.0.jpg&f=1&nofb=1&ipt=606eb01b348dbedfdb353c088cca24dedde8081c05b79777b7abc3980dcaead1&ipo=images"
        );
      }
      
      $("gameOutput").text(game_msg);
      $("span.count", $event_counter).text(new_count);
    }
  });