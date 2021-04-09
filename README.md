# Step 9: adoption of GeoJSON

It is always difficult to modify the data representation of a project, since the change will pervade the whole project. For this reason the designer should carefully select one, adhering to standards when they exist. In our case we want to change the data representation from a plain array to a GeoJSON object.

The GeoJSON object that corresponds to a single marker on our map is the *Feature*, which is represented as follows:

  {
		"type": "Feature",
		"geometry": {
			"type": "Point",
			"title": 1,
			"coordinates": [<longitude>, <latitude>]
	}

Note that the coordinates are in reverse order with respect to our representation. A collection of features is a *FeatureCollection", which is represented as a JSON object containing an array:

  {
	  "type": "FeatureCollection",
	  "features": [
      {
		    "type": "Feature",
		    "geometry": {
			    "type": "Point",
			    "title": 1,
			    "coordinates": [<longitude>, <latitude>]
		    }
	    }, 
      ...
  ]
}

The structure and functionalities of the program are not affected by the change in data representation, but there are many different details.

The array inizialization on top of the program is replaced with the initialization of an object with *type* *FeatureCollection*. 

The function associated to a click on the map creates a new *Feature* object which is then pushed into the *features* array in the *FeaturesCollection*.

The visualization function descends into each a *Feature* object to find the coordinates.

The function associated with the save button is similar to the previous one, while the one associated with the load button exhibits significant changes. The loop for the creation of the markers is now replaced with a single call to the *addTo* method that, alone, does the job. The function associated with the *onEachFeature* attribute initializes the *title* attribute of each marker with the *title* attribute of the corrsponding feature. This preserves the index numbers shown hovering on the markers.  

We are now able to import our data into QGis. For this open QGis and load a raster. Next open the *Later* module and select *Source Data Manager*. In the dialog select the *Protocol* radio button and the GeoJSON protocol, and finally paste your personal URL in the URI text box. Clicking on the *add* button the points in your list are loaded on the QGis Map.
