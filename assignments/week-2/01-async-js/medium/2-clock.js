// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// console.log(`${date.getHours()}`);
function clock() {
  const date = new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let amPm = "";
  hour < 10 ? (hour = `0${hour}`) : (hour = hour);
  minute < 10 ? (minute = `0${minute}`) : (minute = minute);
  second < 10 ? (second = `0${second}`) : (second = second);
  hour > 12 ? (hour -= 12) : (hour = hour);
  hour > 12 ? (amPm = "PM") : (amPm = "AM");
  console.log(`${hour}:${minute}:${second} ${amPm}`);
  setTimeout(clock, 1000);
}
clock();
// setInterval(clock, 1000);
