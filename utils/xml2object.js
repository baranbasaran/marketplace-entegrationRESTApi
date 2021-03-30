const xml2js = require('xml2js');
const parser = xml2js.Parser({ explicitArray: false });

async function getData(data) {
	let entries = Object.entries(data);
	for (const [k, v] of entries) {
		if (k.includes('Response') === true) {
			return v;
		} else if (v instanceof Object && k !== '$') {
			return await getData(v);
		} else {
			continue;
		}
	}
}

module.exports = async function (xml) {
	return new Promise(function (resolve, reject) {
		parser.parseString(xml, function (err, result) {
			if (err) reject(err);
			resolve(result);
		});
	})
		.then(function (result) {
			return getData(result);
		})
		.then(function (result) {
			delete result['$'];
			return { ...result };
		});
};
