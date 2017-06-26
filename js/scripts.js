var buttons = document.getElementsByClassName('button');
console.log(buttons);
console.log(buttons.length);
for (var i = 0; i < buttons.length; i++) {
	alert(buttons[i].innerText);
};
