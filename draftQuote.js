
var selectBuilding = document.getElementById('selectBuilding');
var residentialForm = document.getElementById('residentialForm');
var commercialForm = document.getElementById('commercialForm');
var corporateForm = document.getElementById('corporateForm');
var hybridForm = document.getElementById('hybridForm');

	

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


	





/*?? Do I need another event listener to invoke the calculator function?


***PARTs OF SOME CALCULATIONS:

num-floors
num-basements
max-occupants
num-elevators
num-apartments

***NOT PART OF A CALCULATION
hrs-activity
num-parking
num-businesses


first value  --multiply by second value ------

if floors>20 && 

***code from make a calculator tutorial:

const firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
const secondValue = displayedNum

if (
  firstValue &&
  operator &&
  previousKeyType !== 'operator'
) {
  const calcValue = calculate(firstValue, operator, secondValue)
  display.textContent = calcValue
  
// Update calculated value as firstValue
  calculator.dataset.firstValue = calcValue
} else {
  // If there are no calculations, set displayedNum as the firstValue
  calculator.dataset.firstValue = displayedNum
}

key.classList.add('is-depressed')
calculator.dataset.previousKeyType = 'operator'
calculator.dataset.operator = action

We also want to carry forward the previous secondValue into the new calculation. For secondValue to persist to the next calculation, we need to store it in another custom attribute. Let’s call this custom attribute modValue (stands for modifier value).

if (action === 'calculate') {
  let firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum
  
if (firstValue) {
    if (previousKeyType === 'calculate') {
      firstValue = displayedNum
    }
    
display.textContent = calculate(firstValue, operator, secondValue)
  }
  
// Set modValue attribute
  calculator.dataset.modValue = secondValue
  calculator.dataset.previousKeyType = 'calculate'
}
If the previousKeyType is calculate, we know we can use calculator.dataset.modValue as secondValue. Once we know this, we can perform the calculation.

if (firstValue) {
  if (previousKeyType === 'calculate') {
    firstValue = displayedNum
    secondValue = calculator.dataset.modValue
  }
  
display.textContent = calculate(firstValue, operator, secondValue)




//  potential code from freecodecamp tutorial to display calculated total
{
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum
    
    if (
      firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
    ) {
      return calculate(firstValue, operator, secondValue)
    }
  }

  display.textContent = 0



*** FROM JSFIDDLE COMPUTER BUILDEREXAMPLE:

HTML: 
<form id="form1" method="post" action="">
  <p>
    <select name="CPU" id="CPU">
      <option value="0" selected>Select CPU</option>
      <option value="246">Intel Core i5 4440 3.1GHz (3.3GHz Turbo) Quad Core</option>
      <option value="268.80">Intel Core i5 4570 3.2GHz (3.6GHz Turbo) Quad Core CPU</option>
      <option value="282">Intel Core i5 4570S 2.9GHz (3.6GHz Turbo) Quad Core CPU</option>
      <option value="294">Intel Core i5 4670 3.4GHz (3.8GHz Turbo) Quad Core CPU</option>
      <option value="414">Intel Core i7 4770 3.4GHz (3.9GHz Turbo) Quad Core CPU</option>
    </select>
  </p>
  <p>
    <select name="GPU" id="GPU">
      <option value="0">Select Graphics Card</option>
      <option value="1498.80">EVGA GeForce GTX Titan 6GB Superclocked</option>
      <option value="958.80">Gigabyte GeForce GTX 780 Ti 3GB</option>
      <option value="754.80">Gigabyte GeForce GTX 780 OC 3GB</option>
      <option value="502.80">EVGA GeForce GTX 770 Superclocked 2GB</option>
      <option value="378">EVGA GeForce GTX 760 ACX 2GB</option>
      <option value="262.80">Gigabyte GeForce GTX 660 OC 2GB</option>
      <option value="250.80">EVGA GeForce GTX 650 Ti Boost 2GB Superclocked</option>
      <option value="154.80">EVGA GeForce GTX 650 1GB</option>
      <option value="130.80">ASUS GeForce GT 640 2GB</option>
      <option value="814.80">XFX Radeon R9 290X 4GB</option>
      <option value="598.80">XFX Radeon R9 290 4GB</option>
    </select>
  </p>
  <p>
    <select name="HDD" id="HDD">
      <option value="0">Select HDD
        <option value="70.80">500gb</option>
        <option value="82.80">1TB</option>
        <option value="118.80">2TB</option>
        <option value="130.80">1TB SSHD</option>
        <option value="166.80">3TB</option>
        <option value="178.80">2TB SSHD</option>
        <option value="238.80">4TB</option>
    </select>
  </p>
  <p>
    <select name="RAM" id="RAM">
      <option value="0">Select Amount of RAM</option>
      <option value="66">4gb</option>
      <option value="110.40">8gb</option>
      <option value="202.80">16gb</option>
      <option value="526.80">32gb</option>
    </select>
  </p>
  <p>
    <select name="OD" id="OD">
      <option value="0">Select Optical Drive</option>
      <option value="26.40">DVD-RW</option>
      <option value="102">Blu Ray</option>
    </select>
  </p>
  <p>
    <select name="PSU" id="PSU">
      <option value="0">Select Power Supply</option>
      <option value="58.80">Aerocool VP450 450W True Power</option>
      <option value="70.80">Aerocool VP550 550W True Power</option>
      <option value="94.80">Aerocool VP650 650W Power Supply</option>
      <option value="106.80">Aerocool VP750 750W True Power</option>
      <option value="210">Silverstone Strider Plus 850W ST85F-P</option>
      <option value="214.80">Antec High Current Gamer 900W Power Supply HCG-900</option>
      <option value="226.80">Aerocool Strike-X 1100W</option>
      <option value="418.80">Seasonic X-1250 80Plus Gold 1250W</option>
    </select>
  </p>
</form>
<div id=list></div>
Total Price: <u id="price"></u>


JS: 

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
*/



// I don't recall where this came from or why I thought it would help.
//$(function() {
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
