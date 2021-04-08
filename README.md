# Step 3: recording the coordinates in the interface

JavaScript can interact with the HTML page, the DOM. We want to give the user the possibiity to place a number of marks, while keeping the coordinates visible on the screen.

The marker places will be indicated with a mouse click, and the corresponding coordinates appear beneath the map.

To obtain this result we need to add to the HTML a new *div* where to store the coordinates of the markers.

In the JavaScript code we need to modify the function associated to the click event. The first line creates a new marker in the click position and displays it. The second one attaches to the displayed coordinates those of the new marker.

To test your HTML skills you can try to improve the visualization of the coordinates by includung them in a HTML table.

We notice that a progressive numbering would help to associate a certain point with its coordinates (and viceversa). This is the topic of the next step, that you find in the *idList* branch.