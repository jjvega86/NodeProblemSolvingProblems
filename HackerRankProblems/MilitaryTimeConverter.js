// Convert standard AM/PM time to Military Time

/**
 *
 * @param {String} s Time in standard notation (AM/PM)
 * @returns {String} Time converted to military time
 */
function timeConverter(s) {
  let [hours, minutes, secondsAndTimePeriod] = s.split(":");
  let seconds = secondsAndTimePeriod.split("", 2).join("");
  let timePeriod = secondsAndTimePeriod.split("").slice(2).join("");
  let newTime = "";

  if (hours == "12") {
    newTime = `${timePeriod == "PM" ? "12" : "00"}:${minutes}:${seconds}`;
  } else if (timePeriod == "PM") {
    newTime = `${parseInt(hours) + 12}:${minutes}:${seconds}`;
  } else {
    newTime = `${hours}:${minutes}:${seconds}`;
  }

  return newTime;
}
