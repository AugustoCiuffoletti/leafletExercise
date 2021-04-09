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

The structure and functionalities of the program are not affected by the change in data representation, but there are many change in details.

