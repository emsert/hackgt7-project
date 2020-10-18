var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    var CryptoJS = require("crypto-js");
    const convertVariables = function(templateContent) {
        const regexPattern = /({{(.*?)}})/g;
        let convertedContent = templateContent;
        //let matchedVar = new RegExp(regexPattern).exec(convertedContent);
        return convertedContent;
    }

    const signableContent = function() {
        let x = `${req.protocol}://${req.hostname}${req.originalUrl}`
        console.log(x);
        const requestPath = convertVariables(x.trim()).replace(/^https?:\/\/[^\/]+\//, '/');
        const params = [
            req.method,
            requestPath,
            req.headers['content-type'],
            req.headers['content-md5'],
            convertVariables(req.headers['nep-organization'])
        ];
        return params.filter(p => p && p.length > 0).join('\n');
    }

    // Generates a unique date-based signing key
    const uniqueKey = function(date) {
        const nonce = date.toISOString().slice(0, 19) + '.000Z';
        return "3f01d1de19b34e36aa960ae6193be05d" + nonce;
    }
    // Calculates the HMAC signature
    const calculateSignature = function() {
        const date = new Date();
        console.log(new Date().toGMTString());
        const key = uniqueKey(date);
        const sc = signableContent();
        const hmac = CryptoJS.HmacSHA512(sc, key);
        return CryptoJS.enc.Base64.stringify(hmac);
    }
    // Stores the generated HMAC signature under the access key
    const signature = calculateSignature();
    const sharedKey = "663098aac1064003b9bba2d389f4f8ad"
    const accessKey = `AccessKey ${sharedKey}:${signature}`;
    
    var request = require('request');
    var options = {
    'method': 'POST',
    'url': 'https://gateway-staging.ncrcloud.com/emerald/selling-service/v1/carts',
    'headers': {
        'Content-Type': 'application/json',
        'Authorization': accessKey,
        'nep-organization': 'e1f950050d1c496fa26d39c404d35930',
        'nep-enterprise-unit': 'a8ba21c80f964fc3b9ff863ffa74a805',
        'Date': new Date().toGMTString(),
    }
    };
    request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    });
});

module.exports = router;