# netduma-test

For this task I managed to get an application where a user can input and delete an address in the address book.
The app saves the data to the local storage and when the app is opened up the data is retrieved and displayed in a table.
There is form validation in the respect that a user must input all fields before being able to submit an entry. 
The entry is then saved to a object and when the user clicks to submit button it saves the data as a string to the local storage.
When deleting an item it checks to see if the clicked ID matches an ID in the address book and if it does, removes it.

Unfortunately I didnt manage to complete the search function, so if I had more time I would of liked to get that done. I would also update the styling as I wasnt focused too much on that. Im sure there are cleaner and easier ways to accomplish some of the tasks that I completed so I would refactor my code to account for those ways.

As for the issues i encountered. I had some trouble ensuring all input fields were valid. I first tried an if statement to see if the input fields were empty then not to run any code. But when i clicked on the submit button it kept showing all fields as undefined. This was an issue i kept running into where the results of any calls where displaying undefined in the display table. I had to do some googling as well to get the splice method as i couldnt remember what this was called to remove the item.

If you need anything else just let me know

regards
Darryl
