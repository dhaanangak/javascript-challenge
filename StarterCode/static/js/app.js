// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each  object
 data.forEach(function(ufoReport) {
  console.log(ufoReport);
});

// Step 2:  Use d3 to append one table row `tr` for each  object
 // Don't worry about adding cells or text yet, just try appending the `tr` elements.
 data.forEach(function(ufoReport) {
  console.log(ufoReport);
   var row = tbody.append("tr");
 });

 // Step 3:  Use `Object.entries` to console.log each weather report value
 data.forEach(function(ufoReport) {
   console.log(ufoReport);
   var row = tbody.append("tr");

  Object.entries(ufoReport).forEach(function([key, value]) {
     console.log(key, value);
  });
 });



 // Step 5: Use d3 to update each cell's text with
 // weather report values (weekday, date, high, low)
data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");
     Object.entries(ufoReport).forEach(function([key, value]) {
     console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
 });
