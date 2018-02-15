import './index.less';

$('a[href^="#"]').click(function(){
    let target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 1500);
    return false;
});



$('.pancake__item-1').click(function(){

    $('.pancakes-description > h1').text("Lorem ipsum");
    $('.pancakes-description > h4').text("Lorem Ipsum");
    $('.pancakes-description > p').text("Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
    $('.tasty-pancakes__prepare > h1').text("80");

});


$('.pancake__item-2').click(function(){

    $('.pancakes-description > h1').text("Lorem ipsum");
    $('.pancakes-description > h4').text("Lorem Ipsum");
    $('.pancakes-description > p').text("Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
    $('.tasty-pancakes__prepare > h1').text("80");

});


$('.pancake__item-3').click(function(){

    $('.pancakes-description > h1').text("Lorem ipsum");
    $('.pancakes-description > h4').text("Lorem Ipsum");
    $('.pancakes-description > p').text("Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
    $('.tasty-pancakes__prepare > h1').text("80");

});

$('.pancake__item-4').click(function(){

    $('.pancakes-description > h1').text("Tasty pancakes");
    $('.pancakes-description > h4').text("SEASON FAVOURITE");
    $('.pancakes-description > p').text("Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus.");
    $('.tasty-pancakes__prepare > h1').text("40");

});



$(function() {
    $('.carousel-hider > ul > li').on('click', function() {
        $('.tasty-pancakes__photo').css('background-image', $(this).css('background-image'));
    });
});



$(document).ready(function() {
    let leftUIEl = $('.carousel-arrow-left');
    let  rightUIEl = $('.carousel-arrow-right');
    let  elementsList = $('.carousel-list');
    let  pixelsOffset = 100;
    let  currentLeftValue = 0;
    let  elementsCount = elementsList.find('li').length;
    let  minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    let  maximumOffset = 0;

    leftUIEl.click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

    rightUIEl.click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });
});
