# Step 7: download from the storage

To download our data we need a new button to trigger the operation, and a function attached to the click event.

The first statement in the function clears the current coordinates list since we do not want to merge the working list with the downloaded one.

Next we invoke the *fetch* operation. We do not need to specify the *method* since it defaults to GET, and we have no payload in our request. Such operation may take time, so we use the *then* method (not to be confused with the if/then/else construct) applied to the result of the fetch operation.

The *then* method takes as parameter a function, that receives as parameter the result from the fetch, as soon as it is ready. The function parses the response and decodes the JSON as an array using the *json* method applied to the response itself. Also this operation may take some time, and we use the *then* method again.

The parameter of such function is an array of coordinates. For each of them we create a marker, while pushing the item in the local array. Note that the *title* property and the indexing are reconstructed from the array

When the download is complete the array of the coordinates is displayed on screen.
