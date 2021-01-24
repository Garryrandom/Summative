
   google.charts.load('current', {packages: ['corechart', 'line']});
   google.charts.setOnLoadCallback(drawBasic1);

   function drawBasic1() {
   // Creates the data table
         var data = new google.visualization.DataTable();
         data.addColumn('string', 'Month');
         data.addColumn('number', 'Cases per 100k');
   
         data.addRows([
           ["22/09", 702.2],
           ["02/10", 932.6],  
           ["12/10", 1164.0],  
           ["22/10", 1417.0],  
           ["01/11", 1682.2],  
           ["11/11", 2094.4],
           ["21/11", 2441.4],
           ["01/12", 2663.8],
         ]);
   //Sets chart options
         var options = { "title":"COVID-19 cases per 100,000 in Northumberland",
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
           ["22/09", 296],
           ["02/10", 311],
           ["12/10", 321], 
           ["22/10", 334],
           ["01/11", 341],
           ["11/11", 359],
           ["21/11", 372],
           ["01/12", 425],
         ]);
   //Sets chart options
         var options = { "title":"Cumulative COVID-19 deaths in Northumberland",
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
 