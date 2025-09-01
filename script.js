
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
      }


    }
}

calendar(thisDay, thisMonth, thisYear);
