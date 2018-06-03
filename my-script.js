var btnElement = document.getElementById('btn');
btnElement.onclick = function () {
    var newHeaderElement = document.createElement('h1');
    var newParagraphElement = document.createElement('p');

newHeaderElement.innerHTML = ' This javascript DOM';
newParagraphElement.innerHTML = ' This is also DOM';

document.getElementById('div').appendChild(newHeaderElement);
document.getElementById('div').appendChild(newParagraphElement);


};
// ..... jQuery Form Handling



$('#submitBtn').click( function () {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var fullName = firstName+' '+lastName;
    $('#fullName').html(fullName);
});


// ..... jQuery syntax FOR Multiple CSS PROPERTY  .....jeson object style......
$('#h2').click( function () {
    $('#h2').css({
       'color': 'red',
       'background-color': 'green',
        'fontSize': '50px'
    });

});


//...... Image handing jQuery ... event

        $('#img1').mouseover(function () {
            var imgUrl = $('#img1').attr('src');
            $('#mainImage').attr('src',imgUrl);
        });

        $('#img2').mouseover(function () {
           var imgUrl = $('#img2').attr('src');
            $('#mainImage').attr('src',imgUrl);
        });

        $('#img3').mouseover(function () {
            var imgUrl = $('#img3').attr('src');
            $('#mainImage').attr('src',imgUrl);
        });

        $('#img6').mouseover(function () {
            var imgUrl = $('#img6').attr('src');
            $('#mainImage').attr('src',imgUrl);
        });
        $('#imgb1').click(function () {
            var imgUrl = $('#imgb1').attr('src');
            $('#mainImage').attr('src',imgUrl);
        });




// .. js ...
// var headingElement = document.getElementById('h1');
// headingElement.onmouseover = function () {
//     headingElement.style.color = 'red'
// };




// ....... Javascript DOM .........
// var newHeaderElement = document.createElement('h1');
// var newParagraphElement = document.createElement('p');
//
// newHeaderElement.innerHTML = ' This javascript DOM';
// newParagraphElement.innerHTML = ' This is also DOM';
//
// document.getElementById('div').appendChild(newHeaderElement);
// document.getElementById('div').appendChild(newParagraphElement);