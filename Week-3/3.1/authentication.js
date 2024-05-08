//? Authentication
//* As you tell by now , anyone can send requests to your backend they can just go to postman and send a request, How do you ensyre that this user has access to a ceertain resource

//~ Dumb Way
//* ask user to send the username and passwords in all requests as headers

//~ Slightly better way
//* 1. Give the user back a token on signup/signin
//* 2. Ask the user to send back the token in all future requests
//* 3. When the user logs out, ask the user to forget the (or revoke it from the backend)