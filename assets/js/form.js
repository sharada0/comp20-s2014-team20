
// This is the check script

var food_selection;
var max_price;
var address;
var city;
var state;

data = Array();

function checkit()
{
	// Check that all the text boxes been filled in?

	var box = document.forms['example'].elements[0];
		if (!box.value) {
			alert('You haven\'t filled in ' + box.name + '!');
			box.focus()
			return;
		}
	food_selection = box.value;

	var box = document.forms['example'].elements[1];
		if (!box.value) {
			alert('You haven\'t filled in ' + box.name + '!');
			box.focus()
			return;
		}
	max_price = box.value;

	var box = document.forms['example'].elements[2];
		if (!box.value) {
			alert('You haven\'t filled in ' + box.name + '!');
			box.focus()
			return;
		}
	address = box.value;

	var box = document.forms['example'].elements[3];
		if (!box.value) {
			alert('You haven\'t filled in ' + box.name + '!');
			box.focus()
			return;
		}
	city = box.value;

	state = document.example.refer.options[document.example.refer.selectedIndex].value

/*
	// Get value of the 'Why' radio buttons.

	 user_input = '';
	for (i=0;i<document.forms['example'].why.length;i++) {
		if (document.forms['example'].why[i].checked) {
			user_input = document.forms['example'].why[i].value;
		}
	}
	textstring += 'Why: ' + user_input + '\n';

	// See what checkboxes are checked. They are elements 9-12

	textstring += 'More info: ';
	for (i=9;i<13;i++) {
		if (document.example.elements[i].checked) {
			textstring += document.example.elements[i].name + ' ';
		}
	}
*/
	
	document.forms['example'].output.value = food_selection + '\n' + address + '\n' + city + ', ' + state;
}

var locu = require('locu');
var mclient = locu.MenuItemClient(e18c6ceaae14397336d3a768afc41d7fbbd6bbca); // KEY is your API key, found on dev.locu.com
mclient.search({name: food_selection, price: max_price}, function(result){
 
... });

function saveText(){
    		var dataJSON = "[";

    		for(var i = 0; i < data.length; i ++){
       			dataJSON += "{\"val\":\"" + data[i].innerHTML + "\"}";
       			
       				if(i < data.length -1){
          				dataJSON += ",";
       				}
    		}
    		dataJSON += " ]";
    		localStorage.setItem('food_selection', dataJSON);
    	
    	if(localStorage.data != undefined){
        		var m_price = document.getElementById("max_price");
         		store = JSON.parse(localStorage.data);

        			for(var i = 0; i < store.length; i ++){
          				var newElement = document.createElement('p');
          				newElemnt.innerHTML = store[store.length-1-i].val;
          					
          					if (status.firstChild){
           						status.insertBefore(newElement, status.firstChild);
          					}else{
            					status.appendChild(newElement);
          					}
          				}
          			}
          		}