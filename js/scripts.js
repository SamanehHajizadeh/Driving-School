// onClick on 'Browse' load the internal page
$(function(){
  $('.btn-default').click(function(){
    window.open('student.html','_self');
  });
});

$(function(){
        $(".btn-teacher").on('click', function() {
          window.open('teacher.html','_self');
          });
     });

 $(function(){
        $(".btn-student").on('click', function() {
          $('#studentModal').modal('show');
          });
     }); 

$(function () {
       $(".btn-login").on('click', function() {
         $('#loginModal').modal('show');
       });
    });

$(document).ready(function(){
        $("#mycarousel").carousel( { interval: 2000 } );

        $("#carouselButton").click(function(){
            if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
            }
            else if ($("#carouselButton").children("span").hasClass('fa-play')){
                $("#mycarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');
            }
        });
    });
