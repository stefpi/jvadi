const rp = require('request-promise');
const cheerio = require('cheerio');

const url = "https://clipr.xyz/AthleticLightRatCmonBruh";

rp(url)
    .then(function(html){
        //success!
        const $ = cheerio.load(html);
        let downloadButton = ($('div').hasClass('btn btn-md btn-primary clipr-button'));
        console.log($(''));
    })
    .catch(function(err){
        //handle error
    });
