//? What is an HTTP Server?
//* =>A protocol that is defined for machines to communicate
//* => Specifically for websites, it is the most common way for your websites frontend to talk to it's backend
//* Some code that follows the HTTP Protocol & is able to communicate with clients (browsers/mobileapps..)
//* assume as functions, args-->client send, client uses url instead of calling
//? What are frontends and Backends
//*  Frontend=>UI
//* Backend=>Place where a request goes and response comes
//* HTTP(95% times)-->medium of communication b/w FE & BE

//? How do frontends talk to backends?
//* Wires/routers

//? HTTP (Client Side)
//* Things clients need to worry about
//! Protocols(http/https): "https://"
//! Address(url/ip/port): "chat.openai.com"
//! Routes:"backend-api/converstation"
//! Headers,Body,Query Params:
//~"Body-->What is 2+2 (Usually in JSON)"
//  Header-cookie 123@987ghj
//! Method :"POST,PUT,DELETE,GET"

//?
//* Things server need to worry about
//! Response Headers
//! Response Body:
//~"2+2 equal to 4"
//! Status codes:
//~"200"

//? Things that happen in your browser after you fire the request
//* 1. Browser parses the URL
//* 2. Does a DNS(Domain Name servce) lookup/resolution (converts google.com to IP)
//* 3. Establishes a  connection to the IP (does handshake..)

//? What is DNS resolution
//* Url's are just like contacts in ur phone,
//* IN the end they map to an IP.
//* If you ever buy a URL of your own , you will need to point it to the IP of your server.

//? Things that happen on your server after the request is received
//* You get the inputs(route,body,headers)
//* You do some logic on the input,calculate the output
//* You return the output body,headers and status code.

//? What are the common methods you can send to your BE server?
//* GET:"get back response"
//* POST:"Add new insert"
//* PUT :"replace"
//* DELETE:"remove"

//? What are the common status codes the backend responds with?
//* 200-->Everything is OK
//* 404-->Page/route not found
//* 403-->Authentication issues
//* 411--> something went wronng
//* 500 Internal server error.
