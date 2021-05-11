let csvToJson = require('convert-csv-to-json');
var fs = require('fs');

let fileOutputName = 'myOutputFile.json';
    var position = 0;
    var file_path = 'Data.csv';
    var header = 'title;seo_title;url;author;date;category;locales;content'+'\r\n';

    fs.readFile(file_path, function read(err, data) {
        if (err) {
            throw err;
        }
        var file_content = data.toString();
        file_content = file_content.substring(position);
        var file = fs.openSync(file_path,'r+');
        var bufferedText = Buffer.from(header+file_content);
        fs.writeSync(file, bufferedText, 0, bufferedText.length, position);
        csvToJson.generateJsonFileFromCsv(file_path,fileOutputName);
    });
