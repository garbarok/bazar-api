const fs = require('fs');
const { XMLParser } = require('fast-xml-parser');

exports.parseXMLFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, xmlData) => {
      if (err) {
        reject(err);
      } else {
        const parser = new XMLParser();
        const jsonObj = parser.parse(xmlData);
        resolve(jsonObj.root.element);
      }
    });
  });
};
