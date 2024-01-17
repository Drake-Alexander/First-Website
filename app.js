'use strict';

function username() {
    const username=prompt('Please let us know who you are;')
        while (username =="") { prompt("How about a code name instead?")
            console.log(username);
            document.write('<p> Hi ',username,' welcome to my page!</p>');
        } }
username()

function addition(){
    let addition = prompt (' Think fast! What is 176 + 32?');
    const correct = 208
    
     if (addition !== correct)
        while (addition != correct){
               addition = prompt('Please try again. What is 176 + 32?');
}
    
if (addition == correct) {
    alert('<p> You did it! Great job!</p>')
}}
addition()


function ratemypage(){
let rating = prompt('On a scale of 1-5 how much do you like coding?');
for (let i = 0; i < rating; i++){
    document.write('<img src="funny error.jpg" alt="funny image about coding errors")/>');
}}
