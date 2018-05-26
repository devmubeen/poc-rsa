import { Component, OnInit, Inject } from '@angular/core';
/* const cryptico = require('cryptico'); */
declare var cryptico:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  /* PassPhrase = "The Moon is a Harsh Mistress."; */
  
  
  title = 'RSA In-browser Encryption Decryption';
  /* RSA */
  /* User Inputs */
  plaintext : string = "";
  PassPhrase : string = "";

  /* Generated Variables */
  PublicKeyString;
  EncryptionResult : any;
  DecryptionResult : any;
  RSAkey;
  Bits = 1024; 
  
  constructor() {

    

    
  }

  




  ngOnInit() {

    this.EncryptionResult = {

      cipher: ''

    }
    this.DecryptionResult = {

      plaintext : ''

    }

      /* let PassPhrase = "The Moon is a Harsh Mistress.";  */
 
      // The length of the RSA key, in bits.
      /* let  */

     /* let RSAkey = cryptico.generateRSAKey(this.PassPhrase, this.Bits);
     let PublicKeyString = cryptico.publicKeyString(RSAkey);
     console.log(PublicKeyString);
     let PlainText = "My name is mubeen and I am Muslim";
     let EncryptionResult = cryptico.encrypt(PlainText, PublicKeyString); 
     console.log(EncryptionResult);
     let CipherText = EncryptionResult.cipher;
     let DecryptionResult = cryptico.decrypt(CipherText, RSAkey);  
     console.log(DecryptionResult); */
      
      
    
  }


  generatePublicKey(){


    if(this.PassPhrase){

      this.RSAkey = cryptico.generateRSAKey(this.PassPhrase, this.Bits);
      this.PublicKeyString = cryptico.publicKeyString(this.RSAkey);

    }
    else{

      alert('Please Enter Passpharse');

    }
  
  }

  encryptText(){


    this.EncryptionResult = cryptico.encrypt(this.plaintext, this.PublicKeyString); 
    console.log(this.EncryptionResult);    


  }

  decryptText(){
    let CipherText = this.EncryptionResult.cipher;
    this.DecryptionResult = cryptico.decrypt(CipherText, this.RSAkey);  


  }


}
