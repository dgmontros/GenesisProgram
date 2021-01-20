



function selectForm() {

}






$(document).ready(function () {
  $('.building_type').hide();
  
  $('#selectMe').change(function () {
      $('.building_type').hide();
      $('#'+$(this).val()).show();
  })
});

var residentialForm = "residential-form"
var commercialForm = "commercial-form"
var corporateForm = "corporate-form"
var hybridForm = "hybrid-form"



/*

selectBuilding.onchange = selectForm() {
  if selectBuilding.value=residential {
    quote.getElementById(residential-form)
}
  else if selectBuilding.value=commercial {
    quote.getElementById(commercial-form)
}
  else if selectBuilding.value=corporate {
    quote.getElementById(corporate-form)
}
  else if selectBuilding.value=hybrid {
    quote.getElementById(hybrid-form)
}

selectForm();










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