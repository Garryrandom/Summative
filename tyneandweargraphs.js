
    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(drawBasic1);
    // calls function that draws the line graph from API
    function drawBasic1() {
    // Creates the data table
          var data = new google.visualization.DataTable();
          data.addColumn('string', 'Month');
          data.addColumn('number', 'Cases per 100k');
    
          data.addRows([
            ["22/09", 946.1],
            ["02/10", 1888.6],  
            ["12/10", 2959.8],  
            ["22/10", 3483.6],  
            ["01/11", 3892.7],  
            ["11/11", 4517.9],
            ["21/11", 5008.6],
            ["01/12", 5225.5],
          ]);
    //Sets chart options
          var options = { "title":"COVID-19 cases per 100,000 in Tyne and Wear",
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
            ["22/09", 267],
            ["02/10", 274],
            ["12/10", 280], 
            ["22/10", 286],
            ["01/11", 298],
            ["11/11", 312],
            ["21/11", 324],
            ["01/12", 367],
          ]);
    //Sets chart options
          var options = { "title":"Cumulative COVID-19 deaths in Tyne and Wear",
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
   
