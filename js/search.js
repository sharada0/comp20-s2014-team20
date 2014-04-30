function init()
{
	console.log("start");
//	var response = https://api.locu.com/v1_0/menu_item/search/?name=latte&api_key=e18c6ceaae14397336d3a768afc41d7fbbd6bbca;
//	console.log(response);

	var locu = require('locu');
	var mclient = locu.MenuItemClient(e18c6ceaae14397336d3a768afc41d7fbbd6bbca);
	mclient.search({name:'espresso', locality:'San Francisco'},
					function(result){
						console.log(result.objects[0]);
					});

	document.write(mclient);
}