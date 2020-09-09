// from data.js

var tbody = d3.select("tbody");


//data.forEach(function(report) {
   // console.log(report);
  //  var row= tbody.append("tr");

  //  Object.entries(report).forEach(function([key, value]) {
        //console.log(key, value);    
  //  });

//});


data.forEach((report) => {
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
// YOUR CODE HERE!
