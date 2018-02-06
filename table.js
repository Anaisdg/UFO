// jQuery
$.getScript('data.js', function() {
      var rows = dataSet.length
      var columns = keys(dataSet[0]).length
      var datetime = dataSet.map(function(siting) {
        return siting.datetime
      })
      var city = dataSet.map(function(siting) {
        return siting.city
      })
      var state = dataSet.map(function(siting) {
        return siting.state
      })

      var country = dataSet.map(function(siting) {
        return siting.country
      })

      var shape = dataSet.map(function(siting) {
        return siting.shape
      })

      var durationMinutes dataSet.map(function(siting) {
        return siting.durationMinutes
      })

      var comments dataSet.map(function(siting) {
        return siting.comments
      })

      function generate_table() {
        // get the reference for the body
        var body = document.getElementsByTagName("body")[0];

        // creates a <table> element and a <tbody> element
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");

        // creating all cells
        for (var i = 0; i < rows; i++) {
          // creates a table row
          var row = document.createElement("tr");
          for (var j = 0; j < columns, j++) {}
          var cell = document.createElement("td");
          var Text = document.createTextNode(dataSet[i].map(function(sitting) {
            return sitting[j]
          }));
          cell.appendChild(datetimeText);
          row.appendChild(datetimecell);


          // add the row to the end of the table body
          tblBody.appendChild(row);
        }

        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tbl);
        // sets the border attribute of tbl to 2;
        tbl.setAttribute("border", "2");
      }
