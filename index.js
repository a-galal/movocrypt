"use strict";
var algorithm = 'aes256';
let crypto;

module.exports.encrypt = function (dataEncrypt, secretKey, callback) {
    try {
        crypto = require('crypto');
    } catch (err) {
        return callback('crypto support is disabled!');
    }
    var cipher = crypto.createCipher(algorithm, secretKey);
    try {
        var crypted = cipher.update(String(dataEncrypt), 'utf8', 'hex')
        crypted += cipher.final('hex');
    } catch (ex) {
        return callback("Error Happened While Decrypt");
    }
    return callback(null, crypto.getCiphers());
}

module.exports.deCrypt = function (dataEncrypt, secretKey, callback) {
    try {
        crypto = require('crypto');
    } catch (err) {
        return callback('crypto support is disabled!');
    }
    var decipher = crypto.createDecipher(algorithm, secretKey)
    try {
        var dec = decipher.update(String(dataEncrypt), 'hex', 'utf8')
        dec += decipher.final('utf8');
    } catch (ex) {
        return callback("Error Happened While Decrypt");
    }
    return callback(null, dec);
}




module.exports.genHash = function (data, callback) {
    try {
        crypto = require('crypto');
    } catch (err) {
        return callback('crypto support is disabled!');
    }
    var hash = crypto.createHash('sha256');
    var returnData;
    hash.on('readable', () => {
        var readData = hash.read();
        if (readData) {
            returnData = readData.toString('hex');
        }
    });
    hash.write(String(data));
    hash.end();
    return callback(returnData);
}

module.exports.compareHash = function (data, dataHashed, callback) {
    try {
        crypto = require('crypto');
    } catch (err) {
        return callback('crypto support is disabled!');
    }
    var hash = crypto.createHash('sha256');
    var returnData;
    hash.on('readable', () => {
        var readData = hash.read();
        if (readData) {
            returnData = readData.toString('hex');
        }
    });
    hash.write(String(data));
    hash.end();
    if (returnData == dataHashed)
        return callback(true);
    else
        return callback(false);
}

