
var selectBuilding = document.getElementById('selectBuilding');
var residentialForm = document.getElementById('residentialForm');
var commercialForm = document.getElementById('commercialForm');
var corporateForm = document.getElementById('corporateForm');
var hybridForm = document.getElementById('hybridForm');

//selectBuilding.addEventListener("select", selectForm());

	
// function selectForm(selectBuilding) {
	
	
	// console.log(document.getElementById('#selectBuilding').value === 'commercial')
	//  console.log($('#selectBuilding').val());
	// console.log(select.selectBuilding.hybrid);
	

	selectBuilding.addEventListener('change', function(){

		if (selectBuilding.value === 'residential') {

			residentialForm.style.display = "block";
			corporateForm.style.display = "none";
			commercialForm.style.display = "none";
			hybridForm.style.display = "none";

		}

		else if (selectBuilding.value === 'corporate') {

			residentialForm.style.display = "none";
			corporateForm.style.display = "block";
			commercialForm.style.display = "none";
			hybridForm.style.display = "none";

	}
	else if (selectBuilding.value === 'commercial') {

		residentialForm.style.display = "none";
		corporateForm.style.display = "none";
		commercialForm.style.display = "block";
		hybridForm.style.display = "none";

}

	else if (selectBuilding.value === 'hybrid') {

		residentialForm.style.display = "none";
		corporateForm.style.display = "none";
		commercialForm.style.display = "none";
		hybridForm.style.display = "block";

}

	});


	




	
	 // 	if (selectBuilding(document.getElementById(residential)) 
	// 	{
	// 		console.log(selectForm) === (document.getElementById('residentialForm'));
		
		// /quote.getElementById(residentialOutput);
		// }
		// else if (selectBuilding.type === commercial) {
		// 	quote.getElementById(commercialOutput);
		// }
		// else if (selectBuilding.type === corporate) {
		// 	quote.getElementById(corporateOutput);
		// }
		// else if (selectBuilding.type === hybrid) {
		// 	quote.getElementById(hybridOutput);
		// }


//}




// $(function() {
//   var fields = $('#form1 :input').change(calculate)
//   $("#form1 option").text(function(i, t) {
//     if (this.value !== "0")
//       return t + " - " + this.value
//   }).first().change()
  
// function calculate() {
//   var price = 0;
//   var list = []
//   fields.each(function() {
//     price += +$(this).val();
//     if ($(this).val() > 0)
//       list.push($(this).find("option:selected").text())
//   })
//   $("#list").html(list.join("<br>"))
//   $('#price').html(price.toFixed(2));
// }
// });

// var selectBuilding = $('#selectBuilding');
// var residential = selectBuilding.type(residential);
// var residentialOuput = ["number-of-apartments", "number-of-floors", "number-of-basements"]

// var commercial = selectBuilding.type(commercial)
// var commercialOutput = ["number-of-floors", "number-of-basements", "number-of-companies", "number-of-parking-spots", "number-of-elevators"]
//var selectBuildingType = selectBuilding.options[selectBuilding.selectedIndex].innerHTML;
	//var selectForm = selectBuilding.value;