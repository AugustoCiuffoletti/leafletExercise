# Step 2: create a popup

It is possibile to programmatically add decorations to the map. A basic operation consists of adding an animated *marker* that displays a short message when clicked.

The marker is created with the *marker* method of the leaflet class. You need to pass a parameter to indicate the geographical coordinates of the marker. An object representing the coordinates is created by packaging a latitude and a longitude with a constructor method, the same used to center the map.

Once the marker is created you need to explicitely add it to the map by applying a *add* method to the map, with the marker passed as a parameter. 

In order to attach a popup to the marker we apply the bindPopup method to the marker, passing the text to display as a parameter.

The popup is immediately displayed with the *openPopup* method.

You can experiment by removing the *openPopup* statement, showing the coordinates in the popup, or altering the style of the marker (see the documentation for this).

Next you can proceed to the next step selecting the *click* branch.