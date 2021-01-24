
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic1);
/**
 * @constructor 
 */
function drawBasic1() {

      var data = new google.visualization.DataTable();
      /**
      * @class addColumn 
      * @param {string} string declares the type of input
      * @param {string} Date the name of the column
      */
      data.addColumn('string', 'Date'); 
      /**
      * @class addColumn 
      * @param {string} number declares the type of input
      * @param {string} Cases the name of the column
      */
      data.addColumn('number', 'Cases per 100k');
      /**
       * @class addRows
       * @param {Array} Array input of data
       */
      data.addRows([
        ["22/09", 830.0],
        ["02/10", 1062.8],  
        ["12/10", 1541.4],  
        ["22/10", 2047.0],  
        ["01/11", 2433.0],  
        ["11/11", 3012.5],
        ["21/11", 3439.0],
        ["01/12", 3669.2],
      ]);
      /** 
      * changes properties of graph 
      * @type {object}
      */
      var options = { "title":"COVID-19 cases per 100,000 in County Durham",
        hAxis: {
          /**
           * 
           *
           */
          title: 'Date'
        },
        vAxis: {
          title: 'Cases',
        },
        titleTextStyle: {
            fontSize: 24
        }
      };
      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }

    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart2);
    function drawChart2() {
      var data = google.visualization.arrayToDataTable([
        ['Age Group','Cases'],
        ['0-19', 3303],
        ['20-39', 3726],
        ['40-59', 3307],
        ['60-79', 1606],
        ['80+', 1104],
      ]);
      var options = {
        chart: {
title: 'Cases by Age & Gender',
        },
        bars: 'vertical',
        colors: ['#1b9e77', '#27b9f3'],
      };
      var chart = new google.charts.Bar(document.getElementById('chart2_div'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    }

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic3);
function drawBasic3() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Month');
      data.addColumn('number', 'Deaths');

      data.addRows([
        ["02/10", 712],  
        ["12/10", 733],  
        ["22/10", 761],  
        ["01/11", 805],  
        ["11/11", 849],
        ["21/11", 893],
        ["01/12", 950],
      ]);
      var options = { "title":"Cumulative COVID-19 deaths in Durham",
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

      var chart = new google.visualization.LineChart(document.getElementById('chart3_div'));

      chart.draw(data, options);
    }
