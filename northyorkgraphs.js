
	   google.charts.load('current', {packages: ['corechart', 'line']});
	   google.charts.setOnLoadCallback(drawBasic1);

	   function drawBasic1() {
	   // Creates the data table
	         var data = new google.visualization.DataTable();
	         data.addColumn('string', 'Month');
	         data.addColumn('number', 'Cases per 100,000');
	   
	         data.addRows([
	           ["22/09", 687.0],
	           ["02/10", 756.1],  
	           ["12/10", 805.6],  
	           ["22/10", 1021.1],  
	           ["01/11", 1294.2],  
	           ["11/11", 1743.4],
	           ["21/11", 2042.7],
	           ["01/12", 2202.2],
	         ]);
	   //Sets chart options
	         var options = { "title":"COVID-19 cases per 100,000 in North Yorkshire",
	           hAxis: {
	             title: 'Month'
	   
	             
	           },
	           vAxis: {
	             title: 'Cases',
	           },
	           titleTextStyle: {
	               fontSize: 24
	           }
	         };
	   //Draws the chart with options
	         var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	   
	         chart.draw(data, options);
	       }

	   google.charts.load('current', {packages: ['corechart', 'line']});
	   google.charts.setOnLoadCallback(drawBasic2);
	   // calls function that draws the line graph from API
	   function drawBasic2() {
	   // Creates the data table
	         var data = new google.visualization.DataTable();
	         data.addColumn('string', 'Month');
	         data.addColumn('number', 'Death');
	   
	         data.addRows([
	           ["22/09", 565],
	           ["02/10", 569],
	           ["12/10", 577], 
	           ["22/10", 584],
	           ["01/11", 595],
	           ["11/11", 617],
	           ["21/11", 690],
	           ["01/12", 714],
	         ]);
	   //Sets chart options
	         var options = { "title":"Cumulative COVID-19 deaths in North Yorkshire",
	           hAxis: {
	             title: 'Month'
	   
	             
	           },
	           vAxis: {
	             title: 'Deaths',
	           },
	           titleTextStyle: {
	               fontSize: 24
	           }
	         };
	   //Draws the chart with options
	         var chart = new google.visualization.LineChart(document.getElementById('chart2_div'));
	   
	         chart.draw(data, options);
	       }
           
       function visitPage(){ //Declare function visitpage()
               document.location='North East overview.html';
           }
