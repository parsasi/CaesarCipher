# Javascript Array Calendar

Encrypts and Decrypts a string based on an array of characters, using CeasarCipher algorithm.
## Getting Started

Require the file in your project and make an instance of it.

```
let CeasarCipher = require('./index.js');
let CC = new CeasarCipher(); 

```
## Encrypting an string
```
let encryptedStr = CC.getEncrypted('Hello World',16);
//The key is 16
let decryptedStr = CC.getDecreypted(encryptedStr , 16);
console.log(decryptedStr);
//helloworld
```

### Adding Characters 

To add more characters, so that you can encode and decode them, go to index.js and manipulat the allChars array.

```

this.allChars  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','#','!','.','%'];

```
Once characters  are added/removed from the array, the algorithm will automatically take the new array into consideration. 


Note:
If the character is not included in the array, it will be skipped on Encryption and will not exist in the decrypted version.


## Developer

* **ParsaSi** - [Parsa.Pro](http://Parsa.pro)

