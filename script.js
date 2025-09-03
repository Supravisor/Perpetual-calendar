
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
  ["April", [], [], ["Good Friday"], [], ["Easter Monday"], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], ["Anzac Day"]],
  ["May", []],
  ["June", []],
  ["July", [], [], [], [], [], [], [], [], [], ["Matariki"]],
  ["August", []],
  ["September", []],
  ["October", []],
  ["November", []],
  ["December", [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], ["Christmas Day"], ["Boxing Day"]]
];

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

  const monthName = document.getElementById("monthName");
  const calendarBody = document.getElementById("calendar-body");
  const days = document.getElementById("days");

  let now = new Date(thisYear, thisMonth, thisDay);
  let diff = new Date(thisYear, thisMonth, 1).getTime();
  let monthStart = new Date(diff).toLocaleString("default", { weekday: "long" });

  let header = document.createElement("header");
    body.appendChild(header);

  // heading
  let h1 = document.createElement("h1");

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

          weeklyRow.appendChild(td);

          td.innerHTML = `${new Date(diff + incrementor).getDate()} </br>`;

          if ((month > 3 && new Date(diff + incrementor).getDate() < 7)) {
            td.innerHTML = "";
            td.style.border = "none";
          }

          if (array[thisMonth][new Date(diff + incrementor).getDate()]) {
            td.innerHTML += `<ul>${array[thisMonth][new Date(diff + incrementor).getDate()].map(el => `<li>${el}</li>`).join("")}</ul>`;
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
