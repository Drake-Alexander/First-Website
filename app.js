'use strict';

function username() {
    const username=prompt('Please let us know who you are;')
        if (username =="") { prompt("How about a code name instead?")
            console.log(username);
        } else {
            
        }
            document.write('<p> Hi ',username,' welcome to my page!</p>');
        

            if(confirm('Do these pop ups annoy you?')){
                document.write('<p>Okay I will remove the pop ups.</p>');
            } else {
                document.write('<p> Thanks! I will add more!</p>');
            }
        }


