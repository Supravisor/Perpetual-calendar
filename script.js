
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
  ["April", [], '', ["Good Friday", 2026], [], ["Easter Monday", 2026], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], ["Anzac Day"], [], [], [], [], []],
  ["May", []],
  ["June", [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], ["Matariki"]],
];
