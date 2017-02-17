(function(){
  var template = Handlebars.templates['navBar-comp'];
  // var templateInfo = $('#navBar-template').html();
  // var template = Handlebars.compile(templateInfo);
  $.getJSON('../datas.json', function(data){
    // var navBtnName = {};
    // navBtnName.info = navBar;
    var navBtnName = data[0];
    var templateData = template(navBtnName);
    $('.nav').html(templateData);
  });
})();



