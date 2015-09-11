// ! ! !
// Three Bugs

var Atticus = {
  name: "Atticus", 
  employeeNum: "2405",
  employeeBaseSal: "47000",
  employeeScore: 3
};

var Jem = {
  name: "Jem", 
  employeeNum: "62347",
  employeeBaseSal: "63500",
  employeeScore: 4
};

var Boo = {
  name: "Boo", 
  employeeNum: "11435",
  employeeBaseSal: "54000",
  employeeScore: 3
};

var Scout = {
  name: "Scout", 
  employeeNum: "6243",
  employeeBaseSal: "74750",
  employeeScore: 5
};










// var arrayAtticus = ["Atticus","2405","47000",3]
// var arrayJem = ["Jem", "62347", "63500", 4];
// var arrayBoo = ["Boo", "11435", "54000", 3];
// var arrayScout = ["Scout", "6243", "74750", 5];

var array = [Atticus,Jem,Boo,Scout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){

	//Missing array cell position

  array[i] = calculateSTI(array[i]);
 //added console log
  //console.log(array[i]);

 	newEl = document.createElement('li');
	newText = document.createTextNode(array[i]);//.join()
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(object){
  var newArray = [];

  newArray[0] = object.name;

  var employeeNumber = object.employeeNum;
 // console.log("Employee number  " + object.employeeNum);
  var baseSalary = object.employeeBaseSal;
 //console.log("Employee base salary "+ object.employeeBaseSal);
  var reviewScore = object.employeeScore;
  //console.log("Employee review score "+ object.employeeScore);

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = " " + bonus;

  // added parseInt
  newArray[2] = " " + parseInt(baseSalary * (1.0 + bonus));// prefer a math.round
  newArray[3] = " " + parseInt(baseSalary * bonus);
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
      //added default
      default:
      basePercent = 0;
  }
  return basePercent // Removed -1 from basePercent Also shouldn't perform a math function on a return
}


function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}