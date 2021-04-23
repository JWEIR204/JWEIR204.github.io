$(document).ready(function() {

	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://covid-19-data.p.rapidapi.com/totals",
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "0bab81cefemsh14e2f6a2c20969bp1faaaajsn37cc79a6a39a",
			"x-rapidapi-host": "covid-19-data.p.rapidapi.com"
		}
	};

	$.ajax(settings).done(function (data) {
		console.log(data);
		console.log(data[0].confirmed);
		var total = document.getElementById("total");
		var info = `<h2>Total Number Infected</h2>
					<p class="number">${data[0].confirmed}</p>
					<p class="update">Last Update: ${data[0].lastUpdate}</p>
					<p class="intro">We're here to help. COVID19.com is your hub for Coronavirus information gathered into one place.</p>`
		total.innerHTML += info
	});
});


