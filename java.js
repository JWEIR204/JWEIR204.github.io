$(document).ready(function() {


	$(window).on("load", function getUKData(){
		$.ajax({
			url: 'https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview;areaName=United%20Kingdom&structure={"date":"date","areaName":"areaName","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","cumDeaths28DaysByPublishDateRate":"cumDeaths28DaysByPublishDateRate","cumCasesByPublishDateRate":"cumCasesByPublishDateRate","newDeaths28DaysByDeathDate":"newDeaths28DaysByDeathDate","cumDeathsByDeathDate":"cumDeathsByDeathDate","hospitalCases":"hospitalCases", "newPeopleVaccinatedFirstDoseByPublishDate":"newPeopleVaccinatedFirstDoseByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate","maleCases":"maleCases","femaleCases":"femaleCases"}',
			type: "get",
			dataType: "json",
			success: function(data){
				console.log(data);
				var xDates = [];
				var yCases = [];
				var yDeaths = [];
				var yHospitalisations = [];
				var yVaccines = [];
				for(let i=0; i<7; i++){
					xDates.push(data.data[i].date);
					yCases.push(data.data[i].newCasesByPublishDate);
					yDeaths.push(data.data[i].newDeaths28DaysByDeathDate);
					yHospitalisations.push(data.data[i].hospitalCases)
					yVaccines.push(data.data[i].newPeopleVaccinatedFirstDoseByPublishDate)
				}
				var ctx = document.getElementById('UKNewCasesChart').getContext('2d');
				var scotChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: xDates.reverse(),
						datasets: [{
							fill: false,
							label: 'Confirmed Cases by Date in the UK',
							backgroundColor: 'rgb(65,105,225)',
							borderColor: 'rgb(65,105,225)',
							data: yCases.reverse(),
						}]
					},
					options: {}
				});

				var ctx = document.getElementById('UKDeathChart').getContext('2d');
				var scotChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: xDates,
						datasets: [{
							fill: false,
							label: 'Deaths in the UK within 28 days of positive test',
							backgroundColor: 'rgb(65,105,225)',
							borderColor: 'rgb(65,105,225)',
							data: yDeaths.reverse(),
						}]
					},
					options: {
						scales: {
							yAxes: [{
								ticks: {
									stepSize: 1,
								}
							}]
						}
					}
				});

				var ctx = document.getElementById('UKHospitalChart').getContext('2d');
				var scotChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: xDates,
						datasets: [{
							fill: false,
							label: 'Hospitalisations in the UK',
							backgroundColor: 'rgb(65,105,225)',
							borderColor: 'rgb(65,105,225)',
							data: yHospitalisations.reverse(),
						}]
					},
					options: {}
				});

				var ctx = document.getElementById('UKVaccineChart').getContext('2d');
				var scotChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: xDates,
						datasets: [{
							fill: false,
							label: 'Vaccine First Doses Given by Date in the UK',
							backgroundColor: 'rgb(65,105,225)',
							borderColor: 'rgb(65,105,225)',
							data: yVaccines.reverse(),
						}]
					},
					options: {}
				});

				var table = document.getElementById("ukTableBody");
				var row = `<tr>
								<th>Total Cases</th>
								<th>Total Deaths</th>
								<th>Cases per 100k</th>
								<th>Deaths per 100k</th>
							</tr>`
				table.innerHTML += row
				var row = `<tr>
								<td>${data.data[0].cumCasesByPublishDate}</td>
								<td>${data.data[0].cumDeaths28DaysByPublishDate}</td>
								<td>${data.data[0].cumCasesByPublishDateRate}</td>
								<td>${data.data[0].cumDeaths28DaysByPublishDateRate}</td>
							</tr>`
				table.innerHTML += row
			}
		});
	});

	$(window).on("load", function getScotlandData(){
		$.ajax({
			url: 'https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=scotland&structure={"date":"date","areaName":"areaName","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","cumDeaths28DaysByPublishDateRate":"cumDeaths28DaysByPublishDateRate","cumCasesByPublishDateRate":"cumCasesByPublishDateRate","newDeaths28DaysByDeathDate":"newDeaths28DaysByDeathDate","cumDeathsByDeathDate":"cumDeathsByDeathDate","hospitalCases":"hospitalCases", "newPeopleVaccinatedFirstDoseByPublishDate":"newPeopleVaccinatedFirstDoseByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"}',
			type: "get",
			dataType: "json",
			success: function(data){
				console.log(data);
				var xDates = [];
				var yCases = [];
				var yDeaths = [];
				var yHospitalisations = [];
				var yVaccines = [];
				for(let i=0; i<7; i++){
					xDates.push(data.data[i].date);
					yCases.push(data.data[i].newCasesByPublishDate);
					yDeaths.push(data.data[i].newDeaths28DaysByDeathDate);
					yHospitalisations.push(data.data[i].hospitalCases)
					yVaccines.push(data.data[i].newPeopleVaccinatedFirstDoseByPublishDate)
				}
				var ctx = document.getElementById('scoNewCasesChart').getContext('2d');
				var scotChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: xDates.reverse(),
						datasets: [{
							fill: false,
							label: 'Confirmed Cases by Date in Scotland',
							backgroundColor: 'rgb(0,127,193)',
							borderColor: 'rgb(0,127,193)',
							data: yCases.reverse(),
						}]
					},
					options: {}
				});

				var ctx = document.getElementById('scoDeathChart').getContext('2d');
				var scotChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: xDates,
						datasets: [{
							fill: false,
							label: 'Deaths in Scotland within 28 days of positive test',
							backgroundColor: 'rgb(0,127,193)',
							borderColor: 'rgb(0,127,193)',
							data: yDeaths.reverse(),
						}]
					},
					options: {
						scales: {
							yAxes: [{
								ticks: {
									stepSize: 1,
								}
							}]
						}
					}
				});

				var ctx = document.getElementById('scoHospitalChart').getContext('2d');
				var scotChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: xDates,
						datasets: [{
							fill: false,
							label: 'Hospitalisations in Scotland',
							backgroundColor: 'rgb(0,127,193)',
							borderColor: 'rgb(0,127,193)',
							data: yHospitalisations.reverse(),
						}]
					},
					options: {}
				});

				var ctx = document.getElementById('scoVaccineChart').getContext('2d');
				var scotChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: xDates,
						datasets: [{
							fill: false,
							label: 'Vaccine First Doses Given by Date in Scotland',
							backgroundColor: 'rgb(0,127,193)',
							borderColor: 'rgb(0,127,193)',
							data: yVaccines.reverse(),
						}]
					},
					options: {}
				});
				var table = document.getElementById("scoTableBody");
				var row = `<tr>
								<th>Total Cases</th>
								<th>Total Deaths</th>
								<th>Cases per 100k</th>
								<th>Deaths per 100k</th>
							</tr>`
				table.innerHTML += row
				var row = `<tr>
								<td>${data.data[0].cumCasesByPublishDate}</td>
								<td>${data.data[0].cumDeaths28DaysByPublishDate}</td>
								<td>${data.data[0].cumCasesByPublishDateRate}</td>
								<td>${data.data[0].cumDeaths28DaysByPublishDateRate}</td>
							</tr>`
				table.innerHTML += row
			}
		});
	});

	$(window).on("load", function getEngData(){
		$.ajax({
			url: 'https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=england&structure={"date":"date","areaName":"areaName","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","cumDeaths28DaysByPublishDateRate":"cumDeaths28DaysByPublishDateRate","cumCasesByPublishDateRate":"cumCasesByPublishDateRate","newDeaths28DaysByDeathDate":"newDeaths28DaysByDeathDate","cumDeathsByDeathDate":"cumDeathsByDeathDate","hospitalCases":"hospitalCases", "newPeopleVaccinatedFirstDoseByPublishDate":"newPeopleVaccinatedFirstDoseByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"}',
			type: "get",
			dataType: "json",
			success: function(data){
				console.log(data);
				var xDates = [];
				var yCases = [];
				var yDeaths = [];
				var yHospitalisations = [];
				var yVaccines = [];
				for(let i=0; i<7; i++){
					xDates.push(data.data[i].date);
					yCases.push(data.data[i].newCasesByPublishDate);
					yDeaths.push(data.data[i].newDeaths28DaysByDeathDate);
					yHospitalisations.push(data.data[i].hospitalCases)
					yVaccines.push(data.data[i].newPeopleVaccinatedFirstDoseByPublishDate)
				}
				var ctx = document.getElementById('engNewCasesChart').getContext('2d');
				var scotChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: xDates.reverse(),
						datasets: [{
							fill: false,
							label: 'Confirmed Cases by Date in England',
							backgroundColor: 'rgb(255,0,0)',
							borderColor: 'rgb(255,0,0)',
							data: yCases.reverse(),
						}]
					},
					options: {}
				});

				var ctx = document.getElementById('engDeathChart').getContext('2d');
				var scotChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: xDates,
						datasets: [{
							fill: false,
							label: 'Deaths in England within 28 days of positive test',
							backgroundColor: 'rgb(255,0,0)',
							borderColor: 'rgb(255,0,0)',
							data: yDeaths.reverse(),
						}]
					},
					options: {
						scales: {
							yAxes: [{
								ticks: {
									stepSize: 1,
								}
							}]
						}
					}
				});

				var ctx = document.getElementById('engHospitalChart').getContext('2d');
				var scotChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: xDates,
						datasets: [{
							fill: false,
							label: 'Hospitalisations in England',
							backgroundColor: 'rgb(255,0,0)',
							borderColor: 'rgb(255,0,0)',
							data: yHospitalisations.reverse(),
						}]
					},
					options: {}
				});

				var ctx = document.getElementById('engVaccineChart').getContext('2d');
				var scotChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: xDates,
						datasets: [{
							fill: false,
							label: 'Vaccine First Doses Given by Date in England',
							backgroundColor: 'rgb(255,0,0)',
							borderColor: 'rgb(255,0,0)',
							data: yVaccines.reverse(),
						}]
					},
					options: {}
				});
				var table = document.getElementById("engTableBody");
				var row = `<tr>
								<th>Total Cases</th>
								<th>Total Deaths</th>
								<th>Cases per 100k</th>
								<th>Deaths per 100k</th>
							</tr>`
				table.innerHTML += row
				var row = `<tr>
								<td>${data.data[0].cumCasesByPublishDate}</td>
								<td>${data.data[0].cumDeaths28DaysByPublishDate}</td>
								<td>${data.data[0].cumCasesByPublishDateRate}</td>
								<td>${data.data[0].cumDeaths28DaysByPublishDateRate}</td>
							</tr>`
				table.innerHTML += row
			}
		});
	});

	$(window).on("load", function getWalData(){
		$.ajax({
			url: 'https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=wales&structure={"date":"date","areaName":"areaName","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","cumDeaths28DaysByPublishDateRate":"cumDeaths28DaysByPublishDateRate","cumCasesByPublishDateRate":"cumCasesByPublishDateRate","newDeaths28DaysByDeathDate":"newDeaths28DaysByDeathDate","cumDeathsByDeathDate":"cumDeathsByDeathDate","hospitalCases":"hospitalCases", "newPeopleVaccinatedFirstDoseByPublishDate":"newPeopleVaccinatedFirstDoseByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"}',
			type: "get",
			dataType: "json",
			success: function(data){
				console.log(data);
				var xDates = [];
				var yCases = [];
				var yDeaths = [];
				var yHospitalisations = [];
				var yVaccines = [];
				for(let i=0; i<7; i++){
					xDates.push(data.data[i].date);
					yCases.push(data.data[i].newCasesByPublishDate);
					yDeaths.push(data.data[i].newDeaths28DaysByDeathDate);
					yHospitalisations.push(data.data[i].hospitalCases)
					yVaccines.push(data.data[i].newPeopleVaccinatedFirstDoseByPublishDate)
				}
				var ctx = document.getElementById('walNewCasesChart').getContext('2d');
				var scotChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: xDates.reverse(),
						datasets: [{
							fill: false,
							label: 'Confirmed Cases by Date in Wales',
							backgroundColor: 'rgb(0,102,0)',
							borderColor: 'rgb(0,102,0)',
							data: yCases.reverse(),
						}]
					},
					options: {}
				});

				var ctx = document.getElementById('walDeathChart').getContext('2d');
				var scotChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: xDates,
						datasets: [{
							fill: false,
							label: 'Deaths in Wales within 28 days of positive test',
							backgroundColor: 'rgb(0,102,0)',
							borderColor: 'rgb(0,102,0)',
							data: yDeaths.reverse(),
						}]
					},
					options: {
						scales: {
							yAxes: [{
								ticks: {
									stepSize: 1,
								}
							}]
						}
					}
				});

				var ctx = document.getElementById('walHospitalChart').getContext('2d');
				var scotChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: xDates,
						datasets: [{
							fill: false,
							label: 'Hospitalisations in Wales',
							backgroundColor: 'rgb(0,102,0)',
							borderColor: 'rgb(0,102,0)',
							data: yHospitalisations.reverse(),
						}]
					},
					options: {}
				});

				var ctx = document.getElementById('walVaccineChart').getContext('2d');
				var scotChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: xDates,
						datasets: [{
							fill: false,
							label: 'Vaccine First Doses Given by Date in Wales',
							backgroundColor: 'rgb(0,102,0)',
							borderColor: 'rgb(0,102,0)',
							data: yVaccines.reverse(),
						}]
					},
					options: {}
				});
				var table = document.getElementById("walTableBody");
				var row = `<tr>
								<th>Total Cases</th>
								<th>Total Deaths</th>
								<th>Cases per 100k</th>
								<th>Deaths per 100k</th>
							</tr>`
				table.innerHTML += row
				var row = `<tr>
								<td>${data.data[0].cumCasesByPublishDate}</td>
								<td>${data.data[0].cumDeaths28DaysByPublishDate}</td>
								<td>${data.data[0].cumCasesByPublishDateRate}</td>
								<td>${data.data[0].cumDeaths28DaysByPublishDateRate}</td>
							</tr>`
				table.innerHTML += row
			}
		});
	});

	$(window).on("load", function getNIData(){
		$.ajax({
			url: 'https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=northern%20ireland&structure={"date":"date","areaName":"areaName","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","cumDeaths28DaysByPublishDateRate":"cumDeaths28DaysByPublishDateRate","cumCasesByPublishDateRate":"cumCasesByPublishDateRate","newDeaths28DaysByDeathDate":"newDeaths28DaysByDeathDate","cumDeathsByDeathDate":"cumDeathsByDeathDate","hospitalCases":"hospitalCases", "newPeopleVaccinatedFirstDoseByPublishDate":"newPeopleVaccinatedFirstDoseByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"}',
			type: "get",
			dataType: "json",
			success: function(data){
				console.log(data);
				var xDates = [];
				var yCases = [];
				var yDeaths = [];
				var yHospitalisations = [];
				var yVaccines = [];
				for(let i=0; i<7; i++){
					xDates.push(data.data[i].date);
					yCases.push(data.data[i].newCasesByPublishDate);
					yDeaths.push(data.data[i].newDeaths28DaysByDeathDate);
					yHospitalisations.push(data.data[i].hospitalCases)
					yVaccines.push(data.data[i].newPeopleVaccinatedFirstDoseByPublishDate)
				}
				var ctx = document.getElementById('niNewCasesChart').getContext('2d');
				var scotChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: xDates.reverse(),
						datasets: [{
							fill: false,
							label: 'Confirmed Cases by Date in Northern Ireland',
							backgroundColor: 'rgb(255,209,0)',
							borderColor: 'rgb(255,209,0)',
							data: yCases.reverse(),
						}]
					},
					options: {}
				});

				var ctx = document.getElementById('niDeathChart').getContext('2d');
				var scotChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: xDates,
						datasets: [{
							fill: false,
							label: 'Deaths in Northern Ireland within 28 days of positive test',
							backgroundColor: 'rgb(255,209,0)',
							borderColor: 'rgb(255,209,0)',
							data: yDeaths.reverse(),
						}]
					},
					options: {
						scales: {
							yAxes: [{
								ticks: {
									stepSize: 1,
								}
							}]
						}
					}
				});

				var ctx = document.getElementById('niHospitalChart').getContext('2d');
				var scotChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: xDates,
						datasets: [{
							fill: false,
							label: 'Hospitalisations in Northern Ireland',
							backgroundColor: 'rgb(255,209,0)',
							borderColor: 'rgb(255,209,0)',
							data: yHospitalisations.reverse(),
						}]
					},
					options: {}
				});

				var ctx = document.getElementById('niVaccineChart').getContext('2d');
				var scotChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: xDates,
						datasets: [{
							fill: false,
							label: 'Vaccine First Doses Given by Date in Northern Ireland',
							backgroundColor: 'rgb(255,209,0)',
							borderColor: 'rgb(255,209,0)',
							data: yVaccines.reverse(),
						}]
					},
					options: {}
				});
				var table = document.getElementById("niTableBody");
				var row = `<tr>
								<th>Total Cases</th>
								<th>Total Deaths</th>
								<th>Cases per 100k</th>
								<th>Deaths per 100k</th>
							</tr>`
				table.innerHTML += row
				var row = `<tr>
								<td>${data.data[0].cumCasesByPublishDate}</td>
								<td>${data.data[0].cumDeaths28DaysByPublishDate}</td>
								<td>${data.data[0].cumCasesByPublishDateRate}</td>
								<td>${data.data[0].cumDeaths28DaysByPublishDateRate}</td>
							</tr>`
				table.innerHTML += row
			}
		});
	});
});