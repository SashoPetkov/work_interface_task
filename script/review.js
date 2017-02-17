(function(){
  // var work = $('#work').html();
  // var compileWork = Handlebars.compile(work);
  var template = Handlebars.templates['review'];

  $.ajax({url:'../datas.json'}).done(function(data){

    $(document).ready(function(){
      var addDivReview = '<div class="add3">' +
                                '<input type="text">'+
                                '<button class="btn3">ADD</button>' +
                             '</div>';
      $(addDivReview).prependTo('.containerThree footer');  
      $('.add3 > *').addClass('invisible');

      $('.containerThree footer h1').on('click', function(){
        $('footer').find('.add3').toggleClass('visible');
        $('.add3 > *').toggleClass('invisible');
        // console.log('test');
      });

      $('.btn3').on('click', btn3Click);
      $('.containerThree input').on('keyup', function(e){
        if(e.keyCode === 13){
          btn3Click();
        }
      });

      function btn3Click(){
        var random = Math.floor(Math.random()*taskReview.review.length); 
        // console.log(random);
        var value = $('.add3 input').val();
        $('.containerThree article > div:last-of-type').after('<div class="bordGreen"><h3>' + value + '<h3>' + '<img src="' + taskReview.review[random].image + '">' + '</div>');
        // console.log(value);
        value = $('.add3 input').val('');
        contDiv();
      }

      function contDiv(){
        var numberDivs = $('.containerThree article > div').length;
        $('.containerThree header p').text(numberDivs);
      }
    });

    var taskReview = data[4];
    
    // console.log(taskTeview);
    var taskReviewTemp = template(taskReview);
  
    // $('.container').html(compileWork(taskWaiting));
    $('.containerThree').html(taskReviewTemp);
  });
})();