(function(){
  // var work = $('#work').html();
  // var compileWork = Handlebars.compile(work);
  var template = Handlebars.templates['InProgress'];

  $.ajax({url:'../datas.json'}).done(function(data){

    $(document).ready(function(){
      var addDivInProgress = '<div class="add2">' +
                                '<input type="text">'+
                                '<button class="btn2">ADD</button>' +
                             '</div>';
      $(addDivInProgress).prependTo('.containerTwo footer');  
      $('.add2 > *').addClass('invisible');

      $('.containerTwo footer h1').on('click', function(){
        $('footer').find('.add2').toggleClass('visible');
        $('.add2 > *').toggleClass('invisible');
        // console.log('test');
      });
      $('.btn2').on('click', btn2Click);
      $('.containerTwo input').on('keyup', function(e){
        if(e.keyCode === 13){
          btn2Click();
        }
      });

      function btn2Click(){
        var random = Math.floor(Math.random()*taskInProgress.inProgres.length); 
        // console.log(random);
        var value = $('.add2 input').val();
        $('.containerTwo article > div:last-of-type').after('<div class="bordGreen"><h3>' + value + '<h3>' + '<img src="' + taskInProgress.inProgres[random].image + '">' + '</div>');
        // console.log(value);
        value = $('.add2 input').val('');
        contDiv();
      }

      function contDiv(){
        var numberDivs = $('.containerTwo article > div').length;
        $('.containerTwo header p').text(numberDivs);
      }
    });

    var taskInProgress = data[3];
    
    // console.log(taskInProgress);
    var taskInProgressTemp = template(taskInProgress);
  
    // $('.container').html(compileWork(taskWaiting));
    $('.containerTwo').html(taskInProgressTemp);
  });
})();