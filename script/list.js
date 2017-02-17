(function(){
  // var windowHeight = $(window).height(); 
  // $('.static').css('height', windowHeight);
  
  var template = Handlebars.templates['list'];

  $.ajax({url: '../datas.json'}).done(function(data){
    // console.log(listData);  
    // console.log(listData.list[0].header);
    var listData = data[1];
    var templateData = template(listData);
    $('.listItems').html(templateData);
  });
})();