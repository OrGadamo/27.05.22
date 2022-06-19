// var h1tag = document.getElementById("task1");  //1
// console.log(h1tag.textContent);
// var h2tag = document.getElementById("task2");
// h2tag.innerHTML = "my dom app";
// var task3 = document.getElementsByClassName("task3"); //3
// console.log(task3);
// for (var i = 0; i < task3.length; i++) {
//   console.log(task3[i].textContent);
// }
// var task4 = document.body.childNodes; //4
// console.log(task4[3]);
// var task5 = document.body.childNodes; //5
// console.log(task5[5].textContent);
// var task6 = document.getElementsByTagName("p");//6
// for (var i = 0; i < task6.length; i++) {
//   console.log(task6[i]);
// }
function printUserNameh2() {
  var userName = prompt("enter your name:");
  var tagh2 = document.createElement("h2");
  tagh2.innerHTML = userName;
  document.body.appendChild(tagh2);
}
// printUserNameh2(); //7
function printUserColorSpan() {
  var userColor = prompt("enter a color:");
  var numberOfPrints = +prompt("enter number:");
  for (var i = 0; i < numberOfPrints; i++) {
    var span = document.createElement("span");
    span.innerHTML = userColor;
    document.body.appendChild(span);
  }
}
// printUserColorSpan();//8
function createUserElement() {
  var tagname = prompt("enter tag:");
  var txt = prompt("enter tag text:");
  var elmnt = document.createElement(tagname);
  elmnt.innerHTML = txt;
  document.body.appendChild(elmnt);
}
// createUserElement(); //9
function createUserInput() {
  var type = prompt("enter input type:");
  var userInput = document.createElement("input");
  userInput.type = type;
  document.body.appendChild(userInput);
}
// createUserInput(); //10
function changeClassText(className) {
  var myclass = document.getElementsByClassName(className);
  var txt = prompt("enter class text:");
  for (var i = 0; i < myclass.length; i++) {
    myclass[i].innerHTML = txt;
  }
}
// changeClassText("task11"); //11
function enterSpanToP() {
  var p = document.getElementsByTagName("p");
  console.log(p);
  for (var i = 0; i < p.length; i++) {
    var span = document.createElement("span");
    span.innerHTML = "hello world";
    p[i].appendChild(span);
  }
}
// enterSpanToP(); //12
function printUserDetail() {
  var user = {};
  user.firstname = prompt("enter first name");
  user.lastname = prompt("enter last name");
  user.age = +prompt("enter age");
  var fnametag = document.createElement("h2");
  var lnametag = document.createElement("h2");
  var agetag = document.createElement("h2");
  fnametag.innerHTML = user.firstname;
  lnametag.innerHTML = user.lastname;
  agetag.innerHTML = user.age;
  document.body.appendChild(fnametag);
  document.body.appendChild(lnametag);
  document.body.appendChild(agetag);
  if (user.age > 18) {
    var input = document.createElement("input");
    document.body.appendChild(input);
  }
}
// printUserDetail();  //13
function printMovieObject() {
  var starter = document.createElement("h2");
  starter.innerHTML = "upload movie image to continue";
  document.body.appendChild(starter);
  var imginput = document.createElement("input");
  imginput.type = "file";
  imginput.accept = "image/png, image/jpeg";
  document.body.appendChild(imginput);
  imginput.onchange = function () {
    document.write("<br>");
    var movie = {};
    movie.name = prompt("enter movie name");
    movie.views = +prompt("enter number of views");
    movie.year = +prompt("enter year of release");
    var img = document.createElement("img");
    img.src = URL.createObjectURL(imginput.files[0]);
    img.style.height = "20vh";
    document.body.appendChild(img);
    var movieName = document.createElement("h1");
    movieName.innerHTML = movie.name;
    document.body.appendChild(movieName);
    var movieViews = document.createElement("h2");
    movieViews.innerHTML = movie.views + " views";
    document.body.appendChild(movieViews);
    var movieYear = document.createElement("h3");
    movieYear.innerHTML = "Year Of Release: " + movie.year;
    document.body.appendChild(movieYear);
  };
}
// printMovieObject(); //14
function createEmploye() {
  var employee = {};
  for (var i = 0; i < 4; i++) {
    var key = prompt("enter key");
    var value = prompt("enter value");
    employee[key] = value;
    var element = document.createElement("h2");
    element.innerHTML = key + ": " + value;
    document.body.appendChild(element);
  }
}
// createEmploye();  //15
function createUserBuildings() {
  var numOfBuilding = +prompt("enter number of buildings:");
  var building = {};
  for (var i = 0; i < numOfBuilding; i++) {
    building.contractor = prompt("enter contractor");
    building.company = prompt("enter company");
    building.floors = +prompt("enter number of floors");
    building.flatinfloor = +prompt("enter number of flats in floor");
    var buildingelmnt = document.createElement("h1");
    buildingelmnt.innerHTML =
      "contractor: " +
      building.contractor +
      " company: " +
      building.company +
      " floors: " +
      building.floors +
      " flats in floor:" +
      building.flatinfloor;
    document.body.appendChild(buildingelmnt);
  }
}
// createUserBuildings(); //16
function createUserStores() {
  var numberOfStores = +prompt("enter the number of stores");
  var store = {};
  var count = countElement();
  for (var i = 0; i < numberOfStores; i++) {
    store.name = prompt("enter the store name");
    store.adress = prompt("enter the store adredd");
    store.sections = +prompt("enter number of sections in store");
    store.employees = +prompt("enter the number of employees in store");
    if (store.employees > 10) {
      var element = document.createElement("h2");
      element.innerHTML =
        store.name +
        ". " +
        store.adress +
        ", " +
        store.sections +
        " sections in store, " +
        store.employees +
        " employees in the store";
      document.body.appendChild(element);
    }
  }
  count = countElement() - count;
  console.log(count + " new elements");
}
// createUserStores(); //17
function countElement() {
  //18
  var count = document.body.childNodes;
  return count.length;
}
function printContactList() {
  var mylist = document.getElementById("list");
  var nummberOfContacts = +prompt("how many contacts?");
  for (var i = 0; i < nummberOfContacts; i++) {
    var contact = {};
    contact.name = prompt("enter contact name:");
    contact.company = prompt("enter contact company");
    contact.phoneNumber = prompt("enter contact phone number");
    contact.email = prompt("enter contact email");
    var newli = document.createElement("li");
    newli.innerHTML = contact.name;
    mylist.appendChild(newli);
  }
}
// printContactList();  //19
function createDoctorTable() {
  var numberOfDoctors = +prompt("enter the number of doctors");
  var tablefields = [
    "Full Name",
    "Practice Field",
    "Phone Number",
    "Available",
    "Email",
  ];
  var mytable = document.getElementById("mytable");
  var myhead = document.createElement("thead");
  mytable.appendChild(myhead);
  for (var i = 0; i < tablefields.length; i++) {
    var tHeader = document.createElement("th");
    tHeader.innerHTML = tablefields[i];
    myhead.appendChild(tHeader);
  }
  var mybody = document.createElement("tbody");
  mytable.appendChild(mybody);
  for (var i = 0; i < numberOfDoctors; i++) {
    var doctor = {};
    var newline = document.createElement("tr");
    mybody.appendChild(newline);
    for (var j = 0; j < tablefields.length; j++) {
      if (j == 3) {
        doctor[tablefields[j]] = confirm("is he available?");
      } else {
        doctor[tablefields[j]] = prompt("please enter " + tablefields[j]);
      }
      var mydata = document.createElement("td");
      mydata.innerHTML = doctor[tablefields[j]];
      newline.appendChild(mydata);
    }
  }
}
// createDoctorTable(); //20
