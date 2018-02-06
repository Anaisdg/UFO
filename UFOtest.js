// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");


// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
// $searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredAddresses to addressData initially
var filteredUFO = dataSet;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredUFO.length; i++) {
    // Get get the current address object and its fields
    var ufo = filteredUFO[i];
    var fields = Object.keys(ufo);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufo[field];
    }
  }
}


// function myFunction() {
//   var input, filter, table, tr, td, i;
//   input = document.getElementById("myInput");
//   filter = input.value.toLowerCase();
//
//   for (i = 0; i < tr.length; i++) {
//     datetime = tr[i].getElementsByTagName("td")[0];
//
//     if (datetime) {
//       if (datetime.innerHTML.toLowerCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//         } else {
//         tr[i].style.display = "none";
//       }
//     }
//
//
//   }
// }

// function myFunction1() {
//   var input1, filter1, table, tr, td, i;
//   input1 = document.getElementById("myInput1");
//   filter1 = input1.value.toLowerCase();
//   table = document.getElementById("myTable");
//   tr = table.getElementsByTagName("tr");
//
//     for (i = 0; i < tr.length; i++) {
//       city = tr[i].getElementsByTagName("td")[1];
//
//       if (city) {
//            if (city.innerHTML.toLowerCase().indexOf(filter1) > -1) {
//              tr[i].style.display = "";
//            } else {
//              tr[i].style.display = "none";
//            }
//          }
//        }
//      }



//   input1 = document.getElementById("myInput1");
//   filter1 = input1.value.toLowerCase();
//   input2 = document.getElementById("myInput2");
//   filter2 = input2.value.toLowerCase();
//   input3 = document.getElementById("myInput3");
//   filter3 = input3.value.toLowerCase();
//   input4 = document.getElementById("myInput4");
//   filter4 = input4.value.toLowerCase();
//   input5 = document.getElementById("myInput5");
//   filter5 = input5.value.toLowerCase();
//   input6 = document.getElementById("myInput6");
//   filter6 = input6.value.toLowerCase();
//   table = document.getElementById("myTable");
//   tr = table.getElementsByTagName("tr");


//     city = tr[i].getElementsByTagName("td")[1];
//     state = tr[i].getElementsByTagName("td")[2];
//     country = tr[i].getElementsByTagName("td")[3];
//     shape = tr[i].getElementsByTagName("td")[4];
//     durationMinutes = tr[i].getElementsByTagName("td")[5];
//     description = tr[i].getElementsByTagName("td")[6];
//



// function myFunction2() {
//   var input1, filter1, table, tr, td, i;
//   input1 = document.getElementById("myInput1");
//   filter1 = input1.value.toLowerCase();
//   table = document.getElementById("myTable");
//   tr = table.getElementsByTagName("tr");
//
//     for (i = 0; i < tr.length; i++) {
//       city = tr[i].getElementsByTagName("td")[1];
//
//       if (city) {
//            if (city.innerHTML.toLowerCase().indexOf(filter1) > -1) {
//              tr[i].style.display = "";
//            } else {
//              tr[i].style.display = "none";
//            }
//          }
//        }
//      }






//
//     if (city) {
//       if (city.innerHTML.toLowerCase().indexOf(filter1) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//
//     if (state) {
//       if (state.innerHTML.toLowerCase().indexOf(filter2) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//
//     if (country) {
//       if (country.innerHTML.toLowerCase().indexOf(filter3) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//
//     if (shape) {
//       if (shape.innerHTML.toLowerCase().indexOf(filter4) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//
//     if (durationMinutes) {
//       if (durationMinutes.innerHTML.toLowerCase().indexOf(filter5) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//
//     if (description) {
//       if (description.innerHTML.toLowerCase().indexOf(filter6) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//
//   }
// }









// (function(document) {
// 	'use strict';
//
// 	var LightTableFilter = (function(Arr) {
//
// 		var _input;
//
// 		function _onInputEvent(e) {
// 			_input = e.target;
// 			var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
// 			Arr.forEach.call(tables, function(table) {
// 				Arr.forEach.call(table.tBodies, function(tbody) {
// 					Arr.forEach.call(tbody.rows, _filter);
// 				});
// 			});
// 		}
//
// 		function _filter(row) {
// 			var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
// 			row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
// 		}
//
// 		return {
// 			init: function() {
// 				var inputs = document.getElementsByClassName('light-table-filter');
// 				Arr.forEach.call(inputs, function(input) {
// 					input.oninput = _onInputEvent;
// 				});
// 			}
// 		};
// 	})(Array.prototype);
//
// 	document.addEventListener('readystatechange', function() {
// 		if (document.readyState === 'complete') {
// 			LightTableFilter.init();
// 		}
// 	});
//
// })(document);


//
// function handleSearchButtonClick() {
//   // Format the user's search by removing leading and trailing whitespace, lowercase the string
//   var filterState = $stateInput.value.trim().toLowerCase();
//
//   // Set filteredAddresses to an array of all addresses whose "state" matches the filter
//   filteredUFO = dataSet.filter(function(ufo) {
//     var ufoState = ufo.state.toLowerCase();
//
//     // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
//     return ufoState === filterState ;
//   });
//
//   renderTable();
// }

// Render the table for the first time on page load
renderTable();
