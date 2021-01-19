
/*function showFields() {
if(quote.getElementById(corporate).checked)
quote.getElementById(corporate).style.display=figureoutthisvalue;
}
else if {
  (quote.getElementById(residential).checked)
quote.getElementById(residential).style.display=figureoutthisvalue;
}
else if {(quote.getElementById(commerical).checked)
quote.getElementById(commercial).style.display=figureoutthisvalue;
}
else if{
  (quote.getElementById(hybrid).checked)
quote.getElementById(hybrid).style.display=figureoutthisvalue;
}

onClick=showFields();










/*--BEGIN CODE FOR JQUERY CALCULATOR FORM>
quoteFormElements: [
	{  
		type: "residential",
		input fields: ["number-of-apartments", "number-of-floors", "number-of-basements"]
	},
{  
		type: "commercial",
		input fields: ["number-of-floors", "number-of-basements", "number-of-companies", "number-of-parking-spots", "number-of-elevators"]
	},
{  
		type: "corporate",
		input fields: ["number-of-floors", "number-of-basements", "number-of-parking-spots", "number-of-corporations", "maximum-occupancy"]
	},
{  
		type: "hybrid",
		input fields: ["number-of-floors", "number-of-basements", "number-of-companies","number-of-parking-spots", "maximum-occupancy", "business-hours"]
	},


<!-- <div id= "number-of-apartments" ...>
	<label>N. of Apartments </label>
	<input  ...>
	</div>

	<div id= "number-of-floors" ...>
	<label>N. of Floors </label>
	<input  ...>
	</div>

	<div id= "number-of-companies" ...>
	<label>N. of Companies </label>
	<input  ...>
	</div>

	<div id= "number-of-corporations" ...>
	<label>N. of Corporations </label>
	<input  ...>
	</div>

	<div id= "number-of-basements" ...>
	<label>N. of Basements </label>
	<input  ...>
	</div>

	<div id= "number-of-parking-spots" ...>
	<label>N. of Parking Spots </label>
	<input  ...>
	</div>

	<div id= "number-of-apartments" ...>
	<label>N. of Apartments </label>
	<input  ...>
	</div>

	<div id= "number-of-elevators" ...>
	<label>N. of Elevators </label>
	<input  ...>
  </div>
  
	<div id= "maximum-occupancy" ...>
	<label>Maximum Occupancy</label>
	<input  ...>
	</div>

*/


GOOD CODE ABOVE


/*<meta name="viewport" content="width=device-width, initial-scale=1">
<script>
var subjectObject = {
  "Front-end": {
    "HTML": ["Links", "Images", "Tables", "Lists"],
    "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
    "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]    
  },
  "Back-end": {
    "PHP": ["Variables", "Strings", "Arrays"],
    "SQL": ["SELECT", "UPDATE", "DELETE"]
  }
}
window.onload = function() {
  var subjectSel = document.getElementById("subject");
  var topicSel = document.getElementById("topic");
  var chapterSel = document.getElementById("chapter");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    chapterSel.length = 1;
    topicSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  }
  topicSel.onchange = function() {
    //empty Chapters dropdown
    chapterSel.length = 1;
    //display correct values
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  }
}
</script>
</head>   
<body>

<h1>Cascading Dropdown Example</h1>

<form name="form1" id="form1" action="/action_page.php">
Subjects: <select name="subject" id="subject">
    <option value="" selected="selected">Select subject</option>
  </select>
  <br><br>
Topics: <select name="topic" id="topic">
    <option value="" selected="selected">Please select subject first</option>
  </select>
  <br><br>
Chapters: <select name="chapter" id="chapter">
    <option value="" selected="selected">Please select topic first</option>
  </select>
  <br><br>
  <input type="submit" value="Submit">  
</form>


*/


$(function() {
  var fields = $('#form1 :input').change(calculate)
  $("#form1 option").text(function(i, t) {
    if (this.value !== "0")
      return t + " - " + this.value
  }).first().change()
  
function calculate() {
  var price = 0;
  var list = []
  fields.each(function() {
    price += +$(this).val();
    if ($(this).val() > 0)
      list.push($(this).find("option:selected").text())
  })
  $("#list").html(list.join("<br>"))
  $('#price').html(price.toFixed(2));
}
})