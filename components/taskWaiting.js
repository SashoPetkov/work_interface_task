(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['taskWaiting'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0["color-1"] : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "        <div class=\"bordGreen\">\n          <h3>"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</h3>\n          <img src="
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + " alt=\"\">\n        </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0["color-2"] : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "        <div class=\"bordGrey\">\n          <h3>"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</h3>\n          <img src="
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + " alt=\"\">\n        </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "        <div class=\"bordRed\">\n          <h3>"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</h3>\n          <img src="
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + " alt=\"\">\n        </div>\n      ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<article>\n  <header>\n    <img src=\"../Img_and_icons/sandwatch.png\" alt=\"sandwatch\">\n    <h1>WAITING</h1>\n    <p>16</p>\n  </header>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.waiting : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <footer>\n    <h1>+ ADD TASK</h1>\n  </footer>\n</article>";
},"useData":true});
})();