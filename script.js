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
				row.innerHTML = "<td>" + data[i].name + "</td><td>" + data[i].id + "</td><td>" + data[i].author + "</td><td>" + data[i].page + "</td><td>" + data[i].source + "</td>";
				tbody.appendChild(row);
			}
		}
	};
	xhr.open("GET", "mods/examplemod.json", true);
	xhr.send();
	// Send a GET request to retrieve the README file
	var readmeXhr = new XMLHttpRequest();
	readmeXhr.onreadystatechange = function() {
		if (readmeXhr.readyState === 4 && readmeXhr.status === 200) {
			// Set the text content of the "readme" div to the raw markdown content
			var readmeDiv = document.getElementById("readme");
			readmeDiv.textContent = readmeXhr.responseText;
		}
	};
	readmeXhr.open("GET", "README.md", true);
	readmeXhr.send();
};

