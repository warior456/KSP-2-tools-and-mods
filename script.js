window.onload = function() {
	// Get the table body element
	var tbody = document.getElementsByTagName("tbody")[0];

	// Send a GET request to retrieve the JSON files
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			// Parse the JSON response
			var data = JSON.parse(xhr.responseText);

			// Create a row for each JSON object and append it to the table body
			for (var i = 0; i < data.length; i++) {
				var row = document.createElement("tr");
				row.innerHTML = "<td>" + data[i].id + "</td><td>" + data[i].name + "</td><td>" + data[i].email + "</td><td>" + data[i].age + "</td>";
				tbody.appendChild(row);
			}
		}
	};
	xhr.open("GET", "data/data.json", true);
	xhr.send();
};
