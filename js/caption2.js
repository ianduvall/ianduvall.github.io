 var imageWidth = 0;
 var captionWidth = 0;
 var captionHeight = 0;
 var x = 0;
 var y = 0;
 $(document).ready(function (e) {
     $(".portfolio-item img").hover(function () {
         checkSize($(this));
     });
 });

 $(window).resize(function () {
     //     reset the settings
     imageWidth = 0;
     captionWidth = 0;
     captionHeight = 0;
     x = 0;
     y = 0;

     $("div.caption").css('width', 0);
     $("div.caption").css('height', 0);
     $(".portfolio-item img").hover(function () {
         checkSize($(this));
     });
 });

 function checkSize(object) {
     var currentItem = object;
     imageWidth = currentItem.width();
     captionWidth = imageWidth;
     captionHeight = currentItem.height();
     captionPosition = currentItem.position();

     x = captionPosition.left + parseInt(currentItem.css('marginLeft'), 10);

     currentItem.parent().children().css('width', captionWidth);
     currentItem.parent().find("div.caption").css('height', captionHeight);
     currentItem.parent().find("div.caption").css('left', x);


 }