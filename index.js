"use strict";
let crypto;

module.exports.encrypt = function (dataEncrypt, algorithm, secretKey, callback) {
    try {
        crypto = require('crypto');
    } catch (err) {
        return callback('crypto support is disabled!');
    }

    if (!!algorithm) {
        if (['aes256', 'aes192', 'aes128'].indexOf(String(algorithm)) == -1)
            return callback('Please choose valid algorithm');
    } else
        algorithm = 'aes256';

    if (!String(secretKey))
        return callback('Please enter valid secretKey');

    if (!String(dataEncrypt))
        return callback('Please enter valid data');
    var cipher = crypto.createCipher(algorithm, String(secretKey));
    try {
        var crypted = cipher.update(JSON.stringify(dataEncrypt), 'utf8', 'hex')
        crypted += cipher.final('hex');
    } catch (ex) {
        return callback("Error Happened While Encrypt");
    }
    return callback(null, crypted);
}

module.exports.deCrypt = function (dataEncrypt, algorithm, secretKey, callback) {

    try {
        crypto = require('crypto');
    } catch (err) {
        return callback('crypto support is disabled!');
    }
    if (!!algorithm) {
        if (['aes256', 'aes192', 'aes128'].indexOf(String(algorithm)) == -1)
            return callback('Please choose valid algorithm');
    } else
        algorithm = 'aes256';

    if (!String(secretKey))
        return callback('Please enter valid secretKey');

    var decipher = crypto.createDecipher(algorithm, String(secretKey))
    try {
        var dec = decipher.update(dataEncrypt, 'hex', 'utf8')
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

