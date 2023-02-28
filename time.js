const moment = require("moment");

const eventOneStartTime = "9.00 AM";
const eventOneEndTime = "10.00 AM";
const eventOneDate = "01/03/2023";

const eventTwoStartTime = "9.00 PM";
const eventTwoEndTime = "10.00 PM";
const eventTwoDate = "01/03/2023";

const dateFormat = "DD/MM/YYYY h:mm A";

const eventOneStart = moment(
  `${eventOneDate} ${eventOneStartTime}`,
  dateFormat
);
const eventOneEnd = moment(`${eventOneDate} ${eventOneEndTime}`, dateFormat);

const eventTwoStart = moment(
  `${eventTwoDate} ${eventTwoStartTime}`,
  dateFormat
);
const eventTwoEnd = moment(`${eventTwoDate} ${eventTwoEndTime}`, dateFormat);

const now = moment();

const eventOneRemainingTime = moment.duration(eventOneEnd.diff(now, "minutes"));
const eventOneFormattedTime = eventOneRemainingTime.humanize(true);

const eventTwoRemainingTime = moment.duration(eventTwoEnd.diff(now));
const eventTwoFormattedTime = eventTwoRemainingTime.humanize(true);

console.log(`Event One Start: ${eventOneStart.diff(now, "hours")} hours`);
console.log(`Event One End: ${eventOneEnd.diff(now, "hours")} hours`);
console.log(`Event Two Start: ${eventTwoStart.diff(now, "hours")} hours`);
console.log(`Event Two End: ${eventTwoEnd.diff(now, "hours")} hours`);
