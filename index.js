class CeasarCipher{
    constructor(){
        //All the acceptable characters
        //Methods dynamically interact with the array
        this.allChars  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','#','!','.','%'];
    }
    //Returns the index of a character in the array
    getIndex(singleCharacter){
        let result = null;
        this.allChars.forEach((element,index)=>{
            if(element == singleCharacter){
                result = index + 1;
            }
        });
        return result;
    }
    //Returns the index based on the character inputted
    getCharacter(index){
        if(index > this.allChars.length){
            index = index - this.allChars.length -1 ;
        }else if(index < 0){
            index = this.allChars.length + index +1;
        }
        return this.allChars[index - 1 ];
    }
    //Encrypts the given string with the key specified
    getEncrypted(stringToEncrypt,key){
        stringToEncrypt = stringToEncrypt.toLowerCase();
        let characterArray = stringToEncrypt.split('');
        let finalString = '';
        characterArray.forEach((element)=>{
            if(this.checkForCharacter(element)){
                let charIndex = this.getIndex(element);
                charIndex += key;
                let newChar = this.getCharacter(charIndex);
                finalString += newChar;
            }
        });
        return finalString;
    }
    //Decrypts the given string with the keys 
    getDecrypted(stringToDecrypt,key){
        stringToDecrypt = stringToDecrypt.toLowerCase();
        let characterArray = stringToDecrypt.split('');
        let finalString = '';
        characterArray.forEach((element)=>{
            if(this.checkForCharacter(element)){
                let charIndex = this.getIndex(element);
                charIndex -= key;
                let newChar = this.getCharacter(charIndex);
                finalString += newChar;
            }
        });
        return finalString;
    }
    //Checks for characters that are not included in the allChars array
    checkForCharacter(singleCharacter){
        let foundChar = false;
        this.allChars.forEach((element) => {
            if(element == singleCharacter.toLowerCase()){
                foundChar = true;
            }
        });
        return foundChar;
    }
}

module.exports = CaesarCipher;