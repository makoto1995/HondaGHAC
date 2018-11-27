debugString( 'initializing simulated data...'); //this line print customized string

var list = {
'temperature_cook': 100,
'temperature_air': 50,
'pressure_cook': 80,
'weight_cook': 10,
'part_a': 100,
'part_b': 100,
'part_c': 100,
'part_d': 100
};

for (var i in list) {
    var data = getTag(i) || Math.random()*list[i];
	data = getProcessData( data, list[i]);
	setTag( i , data);
	debugTag( i); //this line print value of tag in debugging mode.
}

function getProcessData( prev, range) {
    var rnd = Math.random()*5;
	if ((prev + rnd)> range) {
	    rnd = prev - rnd;
	}
	else {
	    rnd = prev + rnd;
    }
    return rnd;
}

