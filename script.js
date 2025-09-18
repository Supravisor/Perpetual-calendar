
const thisDate = new Date();
let counter = 2;
let thisDay = thisDate.getDate();
let thisMonth = thisDate.getMonth();
const maxMonth = thisMonth - 1;
let thisYear = thisDate.getFullYear();
let nextYear = false;

const array = [
  ["January", ["New Years Day"], ["Day after New Years Day"]],
  ["February", []],
  ["March", []],
  ["April", []],
  ["May", []],
  ["June", []],
  ["July", []],
  ["August", []],
  ["September", []],
  ["October", []],
  ["November", []],
  ["December", [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], ["Christmas Day"], ["Boxing Day"]]
];

// Easter calculator
function getEaster(year, weekday) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;

  if (weekday === "Friday") {
    return new Date (new Date(year, month - 1, day - 2).setHours(1));
  } else if (weekday === "Sunday") {
    return new Date (new Date(year, month - 1, day).setHours(1));
  } else if (weekday === "Monday") {
    return new Date (new Date(year, month - 1, day + 1).setHours(1));
  } else if (weekday === "Tuesday") {
    return new Date (new Date(year, month - 1, day + 2).setHours(1));
  }

}

function previous() {

  if (thisMonth === 0) {
  thisMonth = 12
  thisYear--
  }

  if (counter >= 2) {
    --counter;
  }

  calendar(thisDay, --thisMonth, thisYear);

}

function next() {

  if (counter < 12) {
    counter++;

    if (thisMonth === 11) {
      thisMonth -= 12
      thisYear++
    }

    calendar(thisDay, (++thisMonth), thisYear);
    const callMonth = document.querySelectorAll("h1");
    callMonth[0].innerText = new Date(thisYear, thisMonth, thisDay).toLocaleString("default", { month: "long" }) + " " + new Date(thisYear, thisMonth, thisDay).getFullYear();

  }

}

const calendar = (rightNow, month, year) => {
  const body = document.querySelector("body");
    body.innerHTML = "";
  
  const monthName = document.getElementById("monthName");
  const calendarBody = document.getElementById("calendar-body");
  const days = document.getElementById("days");

  let now = new Date(thisYear, thisMonth, thisDay);
  let diff = new Date(thisYear, thisMonth, 1).getTime();
  let monthStart = new Date(diff).toLocaleString("default", { weekday: "long" });

  let header = document.createElement("header");
    body.appendChild(header);

  // previous button
  let previousButton = document.createElement("button");

    if (counter < 2) {
      previousButton.style.backgroundColor = "transparent";
      previousButton.style.border = "none";
      previousButton.onclick = "";
    } else {
        previousButton.innerText = "<< Previous";
        previousButton.onclick = previous;
    }

    header.appendChild(previousButton);

  // heading
  let h1 = document.createElement("h1");
    h1.innerText = now.toLocaleString("default", { month: "long" }) + " " + now.getFullYear();
    header.append(h1);
  
  // next button
  let nextButton = document.createElement("button");

    if (counter === 12) {
      nextButton.style.backgroundColor = "transparent";
      nextButton.style.border = "none";
    } else {
        nextButton.innerText = "Next >>";
        nextButton.onclick = next;
    }

    header.appendChild(nextButton);

  let table = document.createElement("table");

  // days of the week
  let daysOfTheWeek = document.createElement("tr");
    for (let day = 0; day < 7; day++) {
      let td = document.createElement("td");
        td.style.borderRadius = "10px";
        td.innerText = new Date(2000,1,day).toLocaleString("default", { weekday: "long" });
        daysOfTheWeek.appendChild(td);
    }

  // days of the week for table
    table.appendChild(daysOfTheWeek);
    body.appendChild(table)

  // calendar dates
  let week = document.querySelectorAll("td");
  let incrementor = 0;

    for (let month = 0; month < 6; month++) {
      diff = new Date(diff).setHours(1);
      let weeklyRow = document.createElement("tr");

      if (now.toLocaleString("default", { month: "long" }) !== new Date (diff + incrementor).toLocaleString("default", { month: "long" })) {
        break;
      }

      for (let day = 0; day < 7; day++) {
        if (week[day].innerText === monthStart || week[day].innerText === new Date(diff + incrementor).toLocaleString("default", { weekday: "long" })) {
          let td = document.createElement("td");
            td.style.padding = "0.5em 0.5em 0";
            td.style.textAlign = "unset";
            td.style.verticalAlign = "top";
            td.style.height = "8em";

        if (new Date(diff + incrementor).getDate() === thisDay && new Date(diff + incrementor).getMonth() === thisMonth && new Date().getMonth() === thisMonth) {
          td.style.color = "black";
          td.style.backgroundColor = "white";
        }
          weeklyRow.appendChild(td);

          td.innerHTML = `${new Date(diff + incrementor).getDate()} </br>`;

          if (array[thisMonth][new Date(diff + incrementor).getDate()]) {
            td.innerHTML += `<ul>${array[thisMonth][new Date(diff + incrementor).getDate()].map(el => `<li>${el}</li>`).join("")}</ul>`;
          }

        // King's birthday anniversary
        if (new Date(diff + incrementor).getDate() < 8 && week[day].innerText === "Monday" && new Date (diff + incrementor).toLocaleString("default", { month: "long" }) === "June") {
          td.innerHTML += `<ul><li>King's Birthday Anniversary</li></ul>`;
        }

        // Labour day
        if (new Date(diff + incrementor).getDate() > 21 && new Date(diff + incrementor).getDate() < 29 && week[day].innerText === "Monday" && new Date (diff + incrementor).toLocaleString("default", { month: "long" }) === "October") {
          td.innerHTML += `<ul><li>Labour Day</li></ul>`;
        }

        // Anzac Day (Mondayise)
        if ((new Date(diff + incrementor).getDate() === 26 || new Date(diff + incrementor).getDate() === 27) && week[day].innerText === "Monday" && new Date (diff + incrementor).toLocaleString("default", { month: "long" }) === "April") {
          td.innerHTML += `<ul><li>Anzac Day</li></ul>`;
        }

        // Anzac Day (Actual)
        if (new Date(diff + incrementor).getDate() === 25 && week[day].innerText !== "Saturday" && week[day].innerText !== "Sunday" && new Date (diff + incrementor).toLocaleString("default", { month: "long" }) === "April") {
          td.innerHTML += `<ul><li>Anzac Day</li></ul>`;
        }

        // Good Friday
        if (new Date(new Date(diff + incrementor).setHours(1)).getMonth() === getEaster(new Date(diff + incrementor).getFullYear(), "Friday").getMonth() && new Date(new Date(diff + incrementor).setHours(1)).getDate() === getEaster(new Date(diff + incrementor).getFullYear(), "Friday").getDate()) {
          td.innerHTML += `<ul><li>Good Friday</li></ul>`;
        }

        // Easter Sunday
        if (new Date(new Date(diff + incrementor).setHours(1)).getMonth() === getEaster(new Date(diff + incrementor).getFullYear(), "Sunday").getMonth() && new Date(new Date(diff + incrementor).setHours(1)).getDate() === getEaster(new Date(diff + incrementor).getFullYear(), "Sunday").getDate()) {
          td.innerHTML += `<ul><li>Easter Sunday</li></ul>`;
        }

        // Easter Monday
        if (new Date(new Date(diff + incrementor).setHours(1)).getMonth() === getEaster(new Date(diff + incrementor).getFullYear(), "Monday").getMonth() && new Date(new Date(diff + incrementor).setHours(1)).getDate() === getEaster(new Date(diff + incrementor).getFullYear(), "Monday").getDate()) {
          td.innerHTML += `<ul><li>Easter Monday</li></ul>`;
        }

        // Matariki
        if (new Date(new Date(new Date(diff + incrementor)).setHours(1)).getTime() === new Date(new Date(new Date("2022, 6, 24")).setHours(1)).getTime()) {
          td.innerHTML += `<ul><li>Matariki</li></ul>`;
        }

        // Auckland Anniversary
        if (new Date(diff + incrementor).getDate() > 21 && new Date(diff + incrementor).getDate() < 29 && week[day].innerText === "Monday" && new Date (diff + incrementor).toLocaleString("default", { month: "long" }) === "January") {
          td.innerHTML += `<ul><li>Auckland Anniversary</li></ul>`;
        }

        // Taranaki Anniversary
        if (new Date(diff + incrementor).getDate() > 6 && new Date(diff + incrementor).getDate() < 15 && week[day].innerText === "Monday" && new Date (diff + incrementor).toLocaleString("default", { month: "long" }) === "March") {
          td.innerHTML += `<ul><li>Taranaki Anniversary</li></ul>`;
        }

        // Hawke's Bay Anniversary
        if (new Date(diff + incrementor).getDate() > 21 && new Date(diff + incrementor).getDate() < 29 && week[day].innerText === "Friday" && new Date (diff + incrementor).toLocaleString("default", { month: "long" }) === "October") {
          td.innerHTML += `<ul><li>Hawke's Bay Anniversary</li></ul>`;
        }

        // Wellington Anniversary
        if (new Date(diff + incrementor).getDate() > 14 && new Date(diff + incrementor).getDate() < 22 && week[day].innerText === "Monday" && new Date (diff + incrementor).toLocaleString("default", { month: "long" }) === "January") {
          td.innerHTML += `<ul><li>Wellington Anniversary</li></ul>`;
        }

        // Nelson Anniversary
        if (new Date(diff + incrementor).getDate() < 7 && week[day].innerText === "Monday" && new Date (diff + incrementor).toLocaleString("default", { month: "long" }) === "February") {
          td.innerHTML += `<ul><li>Nelson Anniversary</li></ul>`;
        }

        // Marlborough Anniversary
        if (new Date(diff + incrementor).getDate() < 7 && week[day].innerText === "Monday" && new Date (diff + incrementor).toLocaleString("default", { month: "long" }) === "November") {
          td.innerHTML += `<ul><li>Marlborough Anniversary</li></ul>`;
        }

        // Otago Anniversary
        if (new Date(diff + incrementor).getDate() > 21 && new Date(diff + incrementor).getDate() < 29 && week[day].innerText === "Monday" && new Date (diff + incrementor).toLocaleString("default", { month: "long" }) === "March") {
          td.innerHTML += `<ul><li>Otago Anniversary</li></ul>`;
        }

        // Canterbury (South) Anniversary
        if (new Date(diff + incrementor).getDate() > 21 && new Date(diff + incrementor).getDate() < 29 && week[day].innerText === "Monday" && new Date (diff + incrementor).toLocaleString("default", { month: "long" }) === "September") {
          td.innerHTML += `<ul><li>Canterbury (South) Anniversary</li></ul>`;
        }

        // Canterbury Anniversary
        if (new Date(diff + incrementor).getDate() > 11 && new Date(diff + incrementor).getDate() < 18 && week[day].innerText === "Friday" && new Date (diff + incrementor).toLocaleString("default", { month: "long" }) === "November") {
          td.innerHTML += `<ul><li>Canterbury Anniversary</li></ul>`;
        }

        // Southland Anniversary
        if (new Date(new Date(diff + incrementor).setHours(1)).getMonth() === getEaster(new Date(diff + incrementor).getFullYear(), "Tuesday").getMonth() && new Date(new Date(diff + incrementor).setHours(1)).getDate() === getEaster(new Date(diff + incrementor).getFullYear(), "Tuesday").getDate()) {
          td.innerHTML += `<ul><li>Southland Anniversary</li></ul>`;
        }

        // Westland Anniversary (November)
        if (new Date(diff + incrementor).getDate() > 27 && week[day].innerText === "Monday" && new Date (diff + incrementor).toLocaleString("default", { month: "long" }) === "November") {
          td.innerHTML += `<ul><li>Westland Anniversary</li></ul>`;
        }

        // Westland Anniversary (December)
        if (new Date(diff + incrementor).getDate() < 5 && week[day].innerText === "Monday" && new Date (diff + incrementor).toLocaleString("default", { month: "long" }) === "December") {
          td.innerHTML += `<ul><li>Westland Anniversary</li></ul>`;
        }

        // Chatham Islands Anniversary (November)
        if (new Date(diff + incrementor).getDate() > 26 && week[day].innerText === "Monday" && new Date (diff + incrementor).toLocaleString("default", { month: "long" }) === "November") {
          td.innerHTML += `<ul><li>Chatham Islands Anniversary</li></ul>`;
        }

        // Chatham Islands Anniversary (December)
        if (new Date(diff + incrementor).getDate() < 4 && week[day].innerText === "Monday" && new Date (diff + incrementor).toLocaleString("default", { month: "long" }) === "December") {
          td.innerHTML += `<ul><li>Chatham Islands Anniversary</li></ul>`;
        }

        if ((month > 3 && new Date(diff + incrementor).getDate() < 7)) {
          td.innerHTML = "";
          td.style.border = "none";
        }

          incrementor += 1000*24*60*60;

          } else {
              let td = document.createElement("td");
                td.style.padding = "0.5em 0.5em 0";
                td.style.textAlign = "unset";
                td.style.verticalAlign = "top";
                td.style.height = "6em";
    
              if (month === 0 || new Date(diff + incrementor).getDate() < 7) {
                td.innerText = "";
                td.style.border = "none";
              }

              weeklyRow.appendChild(td);
      
          }

      }

      table.append(weeklyRow);

    }
}

calendar(thisDay, thisMonth, thisYear);
