# Step 7: store the coordinates in a data structure

At this point the coordinates avaliable to the user, that can cut/paste them from the User Interface, but they are not available for processing in the application. In this step we see how to store the coordinates in an Array.

On top of the JavaScript code we declare an array for the coordinates. An arry is an ordered data structure whose elements are accessed by position: this matches the organization of our list of markers. The array is initialized as empty.

Each time the array is modified we want to completely refresh our display, not in an incremental way as in the provious step. So we write functin that displays the whole div in the dedicated *div*. We initialize the div with an empty string, and next add a new line for each element in the array. Each line is prepended with the index of the displayed element incremented by one (remember that array indexes start from 0). The obtain a numerical increment we need to cast the index as a number.

The function associated to a mouse click is simplified, since we moved the string construction in the new function. The coordinates of the new marker are simply pushed in tha array, before calling the display of the whole array.

Howerver, the data collected in our web app is volatile: as soon as we reload the page all data are lost. We need to provide a cloud storage so that they are persistent and possibly shareable among users. This is the goal of the next step, in the *createStorage* branch.
