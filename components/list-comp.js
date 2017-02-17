(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "    <article>\n      <img src="
    + alias2(alias1((depth0 != null ? depth0.img : depth0), depth0))
    + " alt=\"\">\n      <h3>"
    + alias2(alias1((depth0 != null ? depth0.menu : depth0), depth0))
    + "</h3>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "    </article>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "        <p class=\"grey\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.number : depth0), depth0))
    + "</p>\n        ";
},"4":function(container,depth0,helpers,partials,data) {
    return " <p>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.number : depth0), depth0))
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.list : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        ";
},"useData":true});
})();