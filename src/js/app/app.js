var App = Marionette.Application();

App.addRegions({
	mainRegion: '#main-content'
});

App.navigate = function(route,  options){
  options = options || {};
  Backbone.history.navigate(route, options);
};

App.getCurrentRoute = function(){
  return Backbone.history.fragment;
};

App.on("start", function(){
  if(Backbone.history){
    Backbone.history.start();

    if(this.getCurrentRoute() === ""){
      App.trigger("contacts:list");
    }
  }
});
