var button = document.getElementsByClassName('button');
console.log(button);
console.log(button.length);
for (var i = 0; i < button.length; i++) {
	alert(button[i].innerText);
};
