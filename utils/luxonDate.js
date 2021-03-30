const { DateTime, Settings } = require('luxon');
Settings.defaultZoneName = 'Europe/Istanbul';
module.exports.today = DateTime.local().toFormat('yyyy-MM-dd');
module.exports.toUTC = function (string) {
  return DateTime.fromISO(string).toUTC();
};
module.exports.minus = function (date, day) {
  return DateTime.fromISO(date).minus({ days: day }).toUTC();
};
module.exports.plus = function (date, day) {
  return DateTime.fromISO(date).plus({ days: day }).toUTC();
};
module.exports.parse = function (date) {
  return DateTime.fromISO(date);
};
