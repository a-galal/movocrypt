# movocrypt

Sample & Eazy, Strait forward way to secure important data.
Library to help you secure passwords , pincode and important data.

<img alt="movocrypt logo" src="http://movoclinic.com/images/npm-logo.png" title="movocrypt"/>


### Prerequisites

Download and Install nodejs  [from here](https://nodejs.org/en/download/)
or alternative download nodejs from  [package manager](https://nodejs.org/en/download/package-manager/)

### Installing

to install movocrypt just run this code
```
npm install movocrypt
```

> make sure you install latest version of library.

## Running and usage

 Explain methods in library.

### Encrypt

This method use for encrypt your important data.

[dataForEncrypt] data that you need to encrypt data.

[secretKey] key for encryption.

[result] encrypted data.

```js
var movocrypt = require('movocrypt');
//dataForEncrypt plain data (number , float , string , json) that you need to encrypt data.
//secretKey key for encryption.
movocrypt.encrypt(dataForEncrypt , secretKey, function (err, result) {
//if err get this message "Error Happened While Encrypt"
//result example : dfjghdkgsdkfghiawgfaku
    console.log(err || result);
})
```

### Decrypt

This method use for decrypt your important data.

[dataForDecrypt] data that you need to decrypt data.

[secretKey] key for encryption.

[result] plain data.

```js
var movocrypt = require('movocrypt');
//dataForDecrypt this is data that you need to decrypt data.
//secretKey key for encryption.
movocrypt.decrypt(dataForDecrypt , secretKey, function (err, result) {
//if err get this message "Error Happened While Decrypt"
//result example : plain data
    console.log(err || result);
})
```

### Hash

This method use for hash your important data using sha256 algorithm.

[dataForHash] data that you need to hash.

[result] true/false

```js
var movocrypt = require('movocrypt');
//dataForHash is a plain data (number , float , string , json) for hash
movocrypt.genHash(dataForHash , function (result) {
//result is has data example : ghdkfhgseigedyti845tjhsgjksegh
    console.log(result);
})
```

### Compare Hash

This method use for verify and compare your encrypted important data using sha256 algorithm.

[compareHash] data that you need to compare with hash.

[result] true/false
```js
var movocrypt = require('movocrypt');
//plainData is a plain data (number , float , string , json) for hash
//dataHashed hash that you need to compare of verify data
movocrypt.compareHash(plainData, dataHashed , function (result) {
//result is (true or false)
    console.log(result);
})
```

