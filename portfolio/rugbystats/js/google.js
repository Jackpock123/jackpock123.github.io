  // 1) Calling the data from tabletop
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1gaGsawEmEH1zLxKsMvcmVBStpk6in0t_T4vXpenk_BA/edit?usp=sharing';
  
  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    // alert('Successfully processed!')
    //console.log(data);

    drawPointsChart(data);
    drawPercentageChart(data);

  }

  window.addEventListener('DOMContentLoaded', init);





  // 2) Google Charts 

    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawPointsChart);

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawPercentageChart);


    // A) CHART 1

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    // JMJ: Note I am pushing the data into the drawChart function
    function drawPointsChart(data) {

      console.log(data);
      console.log(data[0].Country, parseInt(data[0].Wins, 10), parseInt(data[0].Losses,10), parseInt(data[0].Draws,10), '');

      // Create the data table.
      var chartData = google.visualization.arrayToDataTable([
        ['Team', 'Won', 'Lost', 'Drew', { role: 'annotation' } ],
        ['Ireland', 10, 3, 0, ''],
        ['New Zealand', 9, 2, 1, ''],
        ['South Africa', 7, 3, 1, ''],
        [data[0].Country, parseInt(data[0].Wins, 10), parseInt(data[0].Losses,10), parseInt(data[0].Draws,10), ''],
        ['England', 9, 3, 1, ''],
        ['Australia', 5, 6, 0, ''],
        ['Scotland', 6, 6, 1, ''],
        ['France', 5, 6, 0, '']
      ]);

      var options = {
        'title': 'Match Results',          
        //hAxis.minorGridlines.count, vAxis.title
        vAxis: {title: 'No. of result', gridlines: { count: 10 }},
        hAxis: {title: 'Country'},
        width: 800,
        height: 400,
        //legend.position
        legend: { position: 'top', maxLines: 1 },
        bar: { groupWidth: '75%' },
        isStacked: true,
      };

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.ColumnChart(document.getElementById('points_chart_div'));
      chart.draw(chartData, options);
    }


    // B) CHART 2 

    function drawPercentageChart(data) {

        //console.log(data);

        // Create the data table.
        var chartData = google.visualization.arrayToDataTable([
          ['Team', 'Won', 'Lost', 'Drew', { role: 'annotation' } ],
          ['Ireland', 10, 3, 0, ''],
          ['New Zealand', 9, 2, 1, ''],
          ['South Africa', 7, 3, 1, ''],
          [data[0].Country, parseInt(data[0].Wins, 10), parseInt(data[0].Losses,10), parseInt(data[0].Draws,10), ''],
          ['England', 9, 3, 1, ''],
          ['Australia', 5, 6, 0, ''],
          ['Scotland', 6, 6, 1, ''],
          ['France', 5, 6, 0, '']
        ]);

        var options = {
          'title': 'Match Results',          
          //hAxis.minorGridlines.count, vAxis.title
          vAxis: {title: '% of result', gridlines: { count: 10 }},
          hAxis: {title: 'Country'},
          width: 800,
          height: 400,
          //legend.position
          legend: { position: 'top', maxLines: 1 },
          bar: { groupWidth: '75%' },
          isStacked: 'percent',
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('percentage_chart_div'));
        chart.draw(chartData, options);
      }
    


    // 3) Additional doodle code
    // var header = document.querySelector('.header');
    // var bodyText = document.querySelector('.bodytext');

    // //You could also create new divs for the content using createElement()  
    // data.forEach(function(data){
    //   //console.log(data);
    //   header.innerHTML = "International Rugby Statistics";
    //   bodyText.innerHTML = "Total number of wins, losses and draws for each country since October 2018";      
    
    // });


        // //Create the array for the team 
        // resultsArray = function(){
        //   var newResultsArray = [data[0].Country, parseInt(data[0].Wins, 10), parseInt(data[0].Losses,10), parseInt(data[0].Draws,10), ''];
        //   console.log(newResultsArray);
        //   return newResultsArray;         
          
        // }
        // resultsArray();