function exercises1() {
  let count = prompt("輸入成績: ");
  switch (true) {
    case count >= 90 && count <= 100:
      alert("you got a A");
      break;
    case count >= 80 && count <= 89:
      alert("you got a B");
      break;
    case count >= 70 && count <= 79:
      alert("you got a C");
      break;
    case count >= 60 && count <= 69:
      alert("you got a D");
      break;
    case count >= 50 && count <= 59:
      alert("you got a E");
      break;
    case count < 49:
      alert("you got a F");
      break;
    default:
      alert("Err");
  }
}

function exercises2() {
  let month = prompt("輸入月份：");
  switch (month) {
    case "September":
      alert("the season is Autumn.");
      break;
    case "October":
      alert("the season is Autumn.");
      break;
    case "November":
      alert("the season is Autumn.");
      break;
    case "December":
      alert("the season is Winter.");
      break;
    case "January":
      alert("the season is Winter.");
      break;
    case "February":
      alert("the season is Winter.");
      break;
    case "March":
      alert("the season is Spring.");
      break;
    case "April":
      alert("the season is Spring.");
      break;
    case "May":
      alert("the season is Spring.");
      break;
    case "June":
      alert("the season is Summer.");
      break;
    case "July":
      alert("the season is Summer.");
      break;
    case "August":
      alert("the season is Summer.");
      break;
    default:
      alert("Err");
  }
}

function exercises3() {
  let date = prompt("What day is today ?");
  let day = date.toLowerCase();

  switch (day) {
    case "monday":
      alert(" Monday is a working day.");
      break;
    case "tuesday":
      alert(" Tuesday is a working day.");
      break;
    case "wednesday":
      alert(" Wednesday is a working day.");
      break;
    case "thursday":
      alert(" Thursday is a working day.");
      break;
    case "friday":
      alert(" Friday is a working day.");
      break;
    case "saturday":
      alert(" Saturday is a weekend.");
      break;
    case "sunday":
      alert(" Sunday is a weekend.");
      break;
    default:
      console.log("It is not a week day.");
  }
}
//exercises1();
//exercises2();
//exercises3();
