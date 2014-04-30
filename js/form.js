
// This is the check script

function checkit()
{
	// In textstring I gather the data that are finally written to the textarea.

	var textstring = '';

	// First of all, have all the text boxes been filled in?
	// This part is treated in the normal page.
	// I put all boxes and their values in textstring

	for (i=0;i<4;i++) {
		var box = document.forms['example'].elements[i];
		if (!box.value) {
			alert('You haven\'t filled in ' + box.name + '!');
			box.focus()
			return;
		}
		textstring += box.name + ': ' + box.value + '\n';
	}

	// Get value of the 'Why' radio buttons.

	 user_input = '';
	for (i=0;i<document.forms['example'].why.length;i++) {
		if (document.forms['example'].why[i].checked) {
			user_input = document.forms['example'].why[i].value;
		}
	}
	textstring += 'Why: ' + user_input + '\n';

/*
	// Get value of the 'How' select box.

	user_input = document.example.refer.options[document.example.refer.selectedIndex].value
	textstring += 'How: ' + user_input + '\n';

	// See what checkboxes are checked. They are elements 9-12

	textstring += 'More info: ';
	for (i=9;i<13;i++) {
		if (document.example.elements[i].checked) {
			textstring += document.example.elements[i].name + ' ';
		}
	}

	*/
	 //Write textstring to the text area.

	document.forms['example'].output.value = textstring;
}
