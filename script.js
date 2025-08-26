
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
}
