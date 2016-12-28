$(document).ready(function () { // doc ready



    //portfolio boxes animation on hover -------------------------------------------------------------------------------------
    $(".portfoliobox").hover(
      function() {
        $(this).children(".box-label").animate({height: "30%"}, 500);
        $(this).children(":first").animate({opacity: "0.5" }, 300);
        $(this).children(".box-label").children(".btn").animate({opacity: "1" }, 500);
      }, function() {
        $(this).children(".box-label").animate({height: "12%"},600);
        $(this).children(":first").animate({opacity: "1" }, 500);
        $(this).children(".box-label").children(".btn").animate({opacity: "0" }, 600);
        }
      );
    // -/portfolio boxes animation -------------------------------------------------------------------------------------

    //View more portfolio - BOX 1: -------------------------------------------------------------------------------------
    $(".viewmorebox1").click(function(){
      $(".viewmorebox2").parents(".portfoliobox").animate({left:"1000", opacity: "0"}, 1200).hide(0);
      $(this).parents(".portfoliobox").animate({right:"1000", opacity:"0"},1200).hide(0);
      // Append the header:
      var newHeader = $("<div class='col-md-5 col-lg-6 text-lg-center portfolio opacityzero headertext'><h2>Something To Do</h2></div>");
      $(".primarycontent").append(newHeader);
      window.setTimeout(function(){newHeader.addClass("slideinanimation").removeClass("opacityzero")}, 500);
      // append the images
      var newImages = $("<div class='col-md-4 col-lg-5 offset-md-1 desktopimg opacityzero portfolio-image'><img class='std-desktop' src='images/somethingtodo-desktop.png'></div>");
      $(".primarycontent").append(newImages);
      window.setTimeout(function(){newImages.addClass("slideinanimation").removeClass("opacityzero")}, 1000);
      //append the second mobile image
      var secondImage =$("<div class=''><img class='std-mobile opacityzero' src='images/somethingtodo-mobile.png'></div>")
      $(".desktopimg").append(secondImage);
      window.setTimeout(function(){secondImage.addClass("slideinanimation").removeClass("opacityzero")}, 1000);
      // Append the body text
      var newBodyText = $("<div class='col-md-7 portfolio opacityzero portfolio-body-text'><p>This was my first large solo project. Users can filter by a number of options in order to select activities that appeal to them. Additionally, by hovering over any box, a 'Learn More' button appears that performs an 'I'm Feeling Lucky' Google search with the activity name as well as 'learn' & 'reddit' search terms.<br><br>I learnt a bunch of new things whilst setting up this project. Including setting up and configuring a LAMP web stack remotely, configuring SSH keys and SFTP file transfer. Frameworks used include Bootstrap and jQuery.</p></div>");
      $(".primarycontent").append(newBodyText);
      window.setTimeout(function(){newBodyText.addClass("slideinanimation").removeClass("opacityzero")}, 600);
      // Append the buttons
      var newButtons = $("<div class='col-md-6 text-xs-center opacityzero portfolio-btns-div'><a class='btn btn-primary backbtn viewlessbtn portfolio-btns'><span class='smallericons icon-chevron-with-circle-left'></span> View Less</a><a class='btn btn-primary visitsitebtn portfolio-btns' href='http://www.somethingtodo.co' target='_blank'>Visit Site <span class='smallericons icon-chevron-with-circle-right'></span></a></div>");
      $(".primarycontent").append(newButtons);
      window.setTimeout(function(){newButtons.addClass("slideinanimation").removeClass("opacityzero")}, 1000);
      if ($(window).width() < 1100) {
        newButtons.css("margin-top","4vh");
      }
    });
    // -/view more - BOX 1 -------------------------------------------------------------------------------------


    //VIEW LESS BUTTON Box 1 -------------------------------------------------------------------------------------
    $(".primarycontent").on("click", ".viewlessbtn", function(){
      //slide away buttons
      window.setTimeout(function(){$(".portfolio-btns-div").addClass("slideawayanimation")}, 100);
      window.setTimeout(function(){$(".portfolio-btns-div").remove()}, 1000);
      //slide away images
      window.setTimeout(function(){$(".portfolio-image").addClass("slideawayanimation")}, 400);
      window.setTimeout(function(){$(".portfolio-image").remove()}, 1000);
      //slide away p text
      window.setTimeout(function(){$(".portfolio-body-text").addClass("slideawayanimation")}, 600);
      window.setTimeout(function(){$(".portfolio-body-text").remove()}, 1000);
      //slide away header
      window.setTimeout(function(){$(".headertext").addClass("slideawayanimation")}, 700);
      window.setTimeout(function(){$(".headertext").remove()}, 1500);

      //bring back the boxes
      window.setTimeout(function(){$(".portfoliobox").find(".viewmorebox1").parents(".portfoliobox").show().animate({right:"0", opacity: "1"}, 2000)}, 1500);
      window.setTimeout(function(){$(".portfoliobox").find(".viewmorebox2").parents(".portfoliobox").show().animate({left:"0", opacity: "1"}, 2000)}, 1500);
    })
    //-/VIEW LESS BUTTON Box 1 -------------------------------------------------------------------------------------


    //View more portfolio - BOX 2: -------------------------------------------------------------------------------------
    $(".viewmorebox2").click(function(){
      $(".viewmorebox1").parents(".portfoliobox").animate({right:"1000", opacity: "0"}, 1200).hide(0);
      $(this).parents(".portfoliobox").animate({left:"1000", opacity:"0"},1200).hide(0);
      // Append the header:
      var newHeader = $("<div class='col-md-5 col-lg-6 text-lg-center portfolio opacityzero headertext'><h2>Radio Time Machine</h2></div>");
      $(".primarycontent").append(newHeader);
      window.setTimeout(function(){newHeader.addClass("slideinanimation").removeClass("opacityzero")}, 500);
      // append the images
        var newImages = $("<div class='col-md-5 col-lg-5 offset-md-1 desktopimg opacityzero portfolio-image' ><img class='std-desktop' src='images/radiotimemachine-desktop.png'></div>");
        $(".primarycontent").append(newImages);
        window.setTimeout(function(){newImages.addClass("slideinanimation").removeClass("opacityzero")}, 1000);

      //append the second mobile image
      var secondImage =$("<div class=''><img class='std-mobile' src='images/radiotimemachine-mobile.png'></div>")
      $(".desktopimg").append(secondImage);
      window.setTimeout(function(){secondImage.addClass("slideinanimation").removeClass("opacityzero")}, 1000);
      // Append the body text
      var newBodyText = $("<div class='col-md-7 portfolio opacityzero portfolio-body-text'><p>This was my introduction to HTML, CSS and Javascript. I worked in a team of three - planning, designing and executing this idea. The radio plays news, radio interviews and other media from a selected year. However, due to an issue with how the API interacted with music files, we were not able to also get music to function correctly, and therefore were unable to implement that.<br><br>I designed and built each visual element from scratch in Photoshop. Then I added the functionality and animations for the dials and finally set up the HTML document and positioned the elements.</p></div>");
      $(".primarycontent").append(newBodyText);
      window.setTimeout(function(){newBodyText.addClass("slideinanimation").removeClass("opacityzero")}, 600);
      // Append the buttons
      var newButtons = $("<div class='col-md-6 text-xs-center portfolio-btns-div opacityzero'><a class='btn btn-primary viewlessbtn portfolio-btns'><span class='smallericons icon-chevron-with-circle-left'></span> View Less</a></div>");
      $(".primarycontent").append(newButtons);
      window.setTimeout(function(){newButtons.addClass("slideinanimation").removeClass("opacityzero")}, 1000);
      if ($(window).width() < 1100) {
        newButtons.css("margin-top","4vh");
      }
    });
    // -/view more - BOX 2  -------------------------------------------------------------------------------------



    // MOBILE - APPLY CLASSES DEPENDING ON SCREEN SIZE ------------------------------------------------------------------------------------------

    $(".viewimg-mob-std").click(function(){
      //apply styling depending on screen size:
      if ($(window).width() < 700) {
        $(".img-mob-std").css({width:"100vw",height:"auto"});
      } else {
        $(".img-mob-std").css({width:"auto",height:"auto"});
      }
      // show the image:
      $(".img-mob-std").toggle("slow");


    });

    // radio time machine
    $(".viewimg-mob-rtm").click(function(){
      //apply styling depending on screen size:
      if ($(window).width() < 700) {
        $(".img-mob-rtm").css({width:"100vw",height:"auto"});
      } else {
        $(".img-mob-rtm").css({width:"auto",height:"auto"});
      }
      // show the image:
      $(".img-mob-rtm").toggle("slow");
    })


    // -/MOBILE - APPLY CLASSES DEPENDING ON SCREEN SIZE ------------------------------------------------------------------------------------------





});// END
