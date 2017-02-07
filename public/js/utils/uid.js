define([
], function() {
  return {
    // generate some unique id
    generate: function() {
      // desired length of id
    	var len = 32;
    	// always start with a letter - base 36 makes for a nice shortcut
    	var id = (Math.floor((Math.random() * 25)) + 10).toString(36) + "_";
    	// add a timestamp in milliseconds (base 36 again) as the base
    	id += (new Date()).getTime().toString(36) + "_";
    	// similar to above, complete the Id using random, alphanumeric characters
    	do {
    		id += (Math.floor((Math.random() * 35))).toString(36);
    	} while (id.length < len);
    	return id;
    }
  }
});
