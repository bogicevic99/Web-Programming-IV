function sortColumn1() {
	if(this.style.color === 'red') {
		this.style.color = 'blue';

	}else {
		this.style.color = 'red';
	}

	if(c1 == false) {
		array1.sort();
		tds[0].innerHTML = array1[0] + ".";
		tds[3].innerHTML = array1[1] + ".";
		tds[6].innerHTML = array1[2] + ".";
		c1 = true;
	}
	else {
		array1.reverse();
		tds[0].innerHTML = array1[0] + ".";
		tds[3].innerHTML = array1[1] + ".";
		tds[6].innerHTML = array1[2] + ".";
	}
}
// Druga kolona
function sortColumn2() {
	if(this.style.color === 'red') {
		this.style.color = 'blue';

	}else {
		this.style.color = 'red';
	}

	if(c2 == false) {
		array2.sort();
		tds[1].innerHTML = array2[0];
		tds[4].innerHTML = array2[1];
		tds[7].innerHTML = array2[2];
		c2 = true;
	}
	else {
		array2.reverse();
		tds[1].innerHTML = array2[0];
		tds[4].innerHTML = array2[1];
		tds[7].innerHTML = array2[2];
	}
}
// Treca kolona
function sortColumn3() {
	if(this.style.color === 'red') {
		this.style.color = 'blue';

	}else {
		this.style.color = 'red';
	}

	if(c3 == false) {
		array3.sort();
		tds[2].innerHTML = array3[0];
		tds[5].innerHTML = array3[1];
		tds[8].innerHTML = array3[2];
		c3 = true;
	}
	else {
		array3.reverse();
		tds[2].innerHTML = array3[0];
		tds[5].innerHTML = array3[1];
		tds[8].innerHTML = array3[2];
	}
}
var a = document.getElementsByTagName('a');
var tds = document.getElementsByTagName('td');

var a1 = a[0];
var a2 = a[1];
var a3 = a[2];

var c1 = false;
var c2 = false;
var c3 = false;

var array1 = [tds[0].innerHTML[0],tds[3].innerHTML[0],tds[6].innerHTML[0]];
var array2 = [tds[1].innerHTML,tds[4].innerHTML,tds[7].innerHTML];
var array3 = [tds[2].innerHTML,tds[5].innerHTML,tds[8].innerHTML];

a1.addEventListener('click', sortColumn1);
a2.addEventListener('click', sortColumn2);
a3.addEventListener('click', sortColumn3);

/*
// Uzimanje svih linkova
var a = document.getElementsByTagName('a');
console.log(a);

// Definisanje zasebnih promenljivih
var a1 = a[0];
var a2 = a[1];
var a3 = a[2];
console.log(a1);
console.log(a2);
console.log(a3);

// Kreiranje dogadjaja
a1.addEventListener('click', sortColumn);
a2.addEventListener('click', sortColumn);
a3.addEventListener('click', sortColumn);

// Uzimanje vrednosti iz TD
var tds = document.getElementsByTagName('td');
console.log(tds);

// Formiranje nizova kolona
var array1 = [tds[0].innerHTML[0],tds[3].innerHTML[0],tds[6].innerHTML[0]];
var array2 = [tds[1].innerHTML,tds[4].innerHTML,tds[7].innerHTML];
var array3 = [tds[2].innerHTML,tds[5].innerHTML,tds[8].innerHTML];
console.log(array1);
console.log(array2);
console.log(array3);
console.log(" ");

// Sortiranje nizova
array1.sort();
array2.sort();
array3.sort();
console.log(array1);
console.log(array2);
console.log(array3);

// Obrnutno sortiranje nizova
array1.reverse();
array2.reverse();
array3.reverse();
console.log(array1);
console.log(array2);
console.log(array3);

array1.reverse();
console.log(array1);
array1.reverse();
console.log(array1);
console.log(" ");

*/