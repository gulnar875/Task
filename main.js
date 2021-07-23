var userPerson = document.getElementById("userList");

var usersData = [
  { fname: "esme", lname: "sanchez", id: 1892038, isTherapist: true },

  { fname: "rick", lname: "jeps", id: 1894024, isTherapist: false },

  { fname: "angie", lname: "lange", id: 1982403, isTherapist: false },

  { fname: "renat", lname: "gros", id: 1894039, isTherapist: true },

  { fname: "bettino", lname: "yang", id: 3789204, isTherapist: true },
];

for (var a = 0; a < usersData.length; a++) {
  var li = document.createElement("li");
  li.innerHTML = usersData[a].lname + ", " + usersData[a].fname;
  userList.appendChild(li);
}
