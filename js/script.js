$(document).ready(function () { // doc ready

    // portfolio images animation
    $('.std-mobile').animate({left:"0px", bottom:"0px", opacity:"1"}, 2500);
    $('.std-desktop').animate({left:"0px", top:"0px", opacity:"1"}, 2000);
    $('.rtm-mobile').animate({left:"0px", bottom:"0px", opacity:"1"}, 2500);
    $('.rtm-desktop').animate({left:"0px", top:"0px", opacity:"1"}, 2000);
    //------


    //portfolio boxes animation on hover
    $(".portfoliobox").hover(
      function() {
        $(this).stop();
        $(this).children(".box-label").animate({height: "30%"}, 500);
        $(this).children(":first").animate({opacity: "0.5" }, 300);
        $(this).children(".box-label").children(".btn").animate({opacity: "1" }, 500);
      }, function() {
        $(this).children(".box-label").animate({height: "12%"},600);
        $(this).children(":first").animate({opacity: "1" }, 500);
        $(this).children(".box-label").children(".btn").animate({opacity: "0" }, 600);
        }
      );
    // -/portfolio boxes animation

    //View more portfolio - BOX 1:
    $(".viewmorebox1").click(function(){
      $(".viewmorebox2").parents(".portfoliobox").animate({height: "0px", opacity: "0"});
      $(this).parents(".portfoliobox").animate({left:"700", opacity:"0", height: "0px"},1500);
      // Append the header:
      var newHeader = $("<div class='col-md-5 col-lg-6 text-lg-center portfolio'><h2>Something To Do</h2></div>").hide();
      $(".primarycontent").append(newHeader);
      newHeader.delay(500).show(1000);
      // append the images
      var newImages = $("<div class='col-md-4 col-lg-5 offset-md-1'><img class='portfolio-image' src='images/somethingtodo-desktop.png'></div>").hide();
      $(".primarycontent").append(newImages);
      newImages.delay(1000).show(1000);
      // Append the body text
      var newBodyText = $("<div class='col-md-7 portfolio'><p>This was my first large solo project. Users can filter by a number of options in order to select activities that appeal to them. Additionally, by hovering over any box, a 'Learn More' button appears that performs an 'I'm Feeling Lucky' Google search with the activity name as well as 'learn' & 'reddit' search terms.<br><br>I learnt a bunch of new things whilst setting up this project. Including setting up and configuring a LAMP web stack remotely, SSH keys and SFTP file transfer. Frameworks used include Bootstrap and jQuery.</p></div>").hide();
      $(".primarycontent").append(newBodyText);
      newBodyText.delay(1000).show(1200);
      // Append the buttons
      var newButtons = $("<div class='col-md-6 text-xs-center'><a class='btn btn-primary backbtn'>Back</a><a class='btn btn-primary visitsitebtn'>Visit Site</a></div>").hide();
      $(".primarycontent").append(newButtons);
      newButtons.delay(3000).show(1000);
    });



    // -/view more - BOX 1




});// END
