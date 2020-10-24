function exercises1() {
  let count = prompt("Enter a positive number: ");
  let legalAge = 18;
  if (count >= legalAge) {
    alert("You are old enough to drive.");
  } else {
    let gap = legalAge - count;
    alert("You are left with" + gap + "years to drive.");
  }
}

function exercises2() {
  let count = prompt("Enter a positive number: ");
  const myAge = 23;
  if (count == myAge) {
    alert("we are the same age.");
  } else if (count > myAge) {
    let older = count - myAge;
    alert("You are " + older + " years older than me.");
  } else {
    let younger = myAge - count;
    alert("You are " + younger + " years young than me.");
  }
}

function exercises3_1() {
  let a = 4;
  let b = 3;
  if (a > b) {
    alert("a is greater than b");
  } else {
    alert("a is less than b");
  }
}

function exercises3_2() {
  let a = 4;
  let b = 3;
  alert(a > b ? "a is greater than b" : "a is less than b");
}

function exercises4() {
  let count = prompt("Enter a positive number: ");
  if (count % 2 == 0) {
    alert(`${count} is an even number`);
  } else {
    alert(`${count} is an odd number`);
  }
}
