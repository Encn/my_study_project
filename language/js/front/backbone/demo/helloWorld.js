$("document").ready(function() {
	/**********************************************************
	 * model
	 ***********************************************************/
	World = Backbone.Model.extend({
		name: null
	});

	/**********************************************************
	 * collection
	 ***********************************************************/
	Worlds = Backbone.Collection.extend({
		initialize: function(models, options) {
			this.bind("add", options.view.addOneWorld);
		}
	});

	/**********************************************************
	 * View
	 ***********************************************************/
	AppView = Backbone.View.extend({
		el: $("body"),
		initialize: function() {
			this.worlds = new Worlds(null, {
				view: this
			});
		},

		events: {
			"click #check": "checkIn" //事件绑定，绑定Dom中id为check的元素
		},

		checkIn: function() {
			var world_name = prompt("请问，您是哪星人？");
			if (world_name == "") {
				world_name = "未知"
			}
			var world = new World({
				name: world_name
			});
			this.worlds.add(world);
		},
		addOneWorld: function(model) {
			$("#world-list").append("<li>这里是来自<b>" + model.get('name') + "</b>星球的问候：hello world！</li>");
		}
	});

	/**********************************************************
	 * Router
	 ***********************************************************/
	var AppRouter = Backbone.Router.extend({
		routes: {
			"posts/:id": "getPost"
		},
		getPost: function(id) {
			alert(id);
		}
	});

	var app_router = new AppRouter;
	var appView = new AppView;
	Backbone.history.start();
});