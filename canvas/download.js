var request = require('request');
request("http://bpic.ooopic.com/16/17/84/87bOOOPICf9.swf").pipe(fs.createWriteStream('doodle.png'))
