$(document).ready(function() {
    $('.ham_burger').click(function() {
        $('nav').toggleClass('nav-active');
        
      
        $('.line1').toggleClass('toggle');
        $('.line2').toggleClass('toggle');
        $('.line3').toggleClass('toggle');
    });
});