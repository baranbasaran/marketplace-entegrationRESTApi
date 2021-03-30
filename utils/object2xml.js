const xml2js = require('xml2js');
const builder = new xml2js.Builder();
module.exports = function (xml) {
  return builder.buildObject(xml);
};
