(function(){
  // var work = $('#work').html();
  // var compileWork = Handlebars.compile(work);
  var template = Handlebars.templates['taskWaiting'];

  $.ajax({url:'../datas.json'}).done(function(data){

    $(document).ready(function(){
      var addDiv = '<div class="add1">' +
                      '<input type="text">'+
                      '<button class="btn1">ADD</button>' +
                   '</div>';
      $(addDiv).prependTo('.containerOne footer');  
      $('.add1 > *').addClass('invisible');

      $('.containerOne footer h1').on('click', function(){
        $('footer').find('.add1').toggleClass('visible');
        $('.add1 > *').toggleClass('invisible');
      });
      
      $('.btn1').on('click', btn1Click);
      $('.containerOne input').on('keyup', function(e){
        if(e.keyCode === 13){
          btn1Click();
        }
      });

      function btn1Click() {
        var random = Math.floor(Math.random()*taskWaiting.waiting.length); 
        // console.log(random);
        var value = $('.add1 input').val();
        $('.containerOne article > div:last-of-type').after('<div class="bordGreen"><h3>' + value + '<h3>' + '<img src="' + taskWaiting.waiting[random].image + '">' + '</div>');
        // console.log(value);
        value = $('.add1 input').val('');
        contDiv();
      }

      function contDiv(){
        var numberDivs = $('.containerOne article > div').length;
        $('.containerOne header p').text(numberDivs);
      }
    });


    var taskWaiting = data[2];
    
    // console.log(taskWaiting);
    var taskWaitingTemp = template(taskWaiting);
  
    // $('.container').html(compileWork(taskWaiting));
    $('.containerOne').html(taskWaitingTemp);
  });
})();