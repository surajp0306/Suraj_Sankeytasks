async function getData() {

	let api_url = 'https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817';
	let response = await fetch(api_url);
	let data = await response.json();
	
	console.log(data);

	let employeeData = data.data;

	let employeeTable = ''

	employeeData.forEach(element => {
		employeeTable += `
			<tr>
				<td>${element.name}</td>
				<td>${element.office}</td>
				<td>${element.position}</td>
				<td>$${element.salary}</td>
			</tr>
		`
	});

	document.getElementById('loading').style.display = "none";
	document.getElementById('employeeTable').style.display = "block";
	document.getElementById('employeeData').innerHTML = employeeTable;
}