//? Project for today
//~ Let people sign up to your website
//~ Only allow signed in user to see people (create a dummy list)

//? Almost all websites have auth
//~ There are complicated ways(login to google..)

//~ Easiest is a ussername password based authentication

//? Before We get into authentication
//~ Let's understand some cryptogaraphy jargon.
//* 1.Hashing
//^ Hash(weird format) password before storing it to DB.
//^ Converting a simple string into some complex Jibrish.
//~ One way
//~ doesn't require password
//~ Given the output , no one can find out the output.
//~ if you try  Changing the i/p a lil bit changes in  the o/p will by a lot
//* 2.Encryption
//~ Two Way
//~ key must to encrypt and decrypt
//~  require password-->may or may not be same for encryption and decryption.

//* 3.Json web tokens(jwt.io)
//* jwt.encode-->jwt.verify
//~ Json--> take json as input(some complex object) and o/p (some long string)
//~ web-->website
//~ token--> create a token from long structured data
//! It's neither of encryption or decryption or hashing (It's technically a digital signature).
//! Anyone can see the original output given the signature.
//! Signature can be verified  only the signature.
//! Signature can be verified only using the password.
//* 4.Local Storage
// A place in browser 