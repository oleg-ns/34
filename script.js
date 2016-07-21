sub.addEventListener('click', function (event) {
	event.preventDefault();
	var d = {};
	if(userName.value == '' || userPhone.value == '') {alert('no data')}
	else {d.name = userName.value; d.number=userPhone.value;
		var xhr = new XMLHttpRequest()
		var phoneList = [];
		xhr.open('GET', 'phones.json', false);
		xhr.send();
		console.log(xhr.responseText);
		phoneList = JSON.parse(xhr.responseText);
		phoneList.push(d);
		xhr.open('POST', 'phones.json', false);
		xhr.send(JSON.stringify(phoneList));
		console.log(JSON.stringify(phoneList))
	}
	return false
})
del.addEventListener('click', function (event) {
	event.preventDefault();
	var d = {};
	if(userName.value == '' || userPhone.value == '') {alert('no data1')}
	else {
		d.name = userName.value;
		d.number = userPhone.value
		var phoneList = [];
		var xhr = new XMLHttpRequest()
		xhr.open('GET', 'phones.json', false);
		xhr.send();
		console.log(xhr.responseText);
		phoneList = JSON.parse(xhr.responseText)
		console.log(xhr.responseText.trim());
		for (i=0, l=phoneList.length; i<l; i++) {
			if (phoneList[i].name == userName.value && phoneList[i].number == userPhone.value) {
				delete phoneList[i]
				alert('deleted')
			}
		}
		xhr.open('POST', 'phones.json', false);
		xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
		xhr.send(JSON.stringify(phoneList).replace('null,', ''));
		console.log(JSON.stringify(phoneList).replace('null,', ''))
	}
	return false
})
