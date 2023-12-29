'use strict';

let name=prompt('Please let us know who you are;')
            document.write('<p> Hi ',name,' welcome to my page!</p>');
            confirm('are you sure?')

            if(confirm('Do these pop ups annoy you?')){
                document.write('<p>Okay I will remove the pop ups.</p>');
            } else {
                document.write('<p> Thanks! I will add more!</p>');
            }
