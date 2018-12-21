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

setTag('tag1', getTag('tag1')+1);

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

var horizontalReportData = {
	'RTOEnergy': 184511,
	'TransportEnergy': 539928,
	'PCSEnergy': 1470,
	'WorkEnergy_1': 1867,
	'WorkEnergy_2': 38323,
	'WorkEnergy_3': 30333,
	'WorkEnergy_4': 4563,
	'WorkEnergy_5': 197177
};

var energySum = 0;

for (var i in horizontalReportData) {
    var data = horizontalReportData[i] + (horizontalReportData[i]*0.2*Math.random());
	setTag( i , data);
	energySum += data;
}

setTag('Energy Summary', energySum);

var dummylist = {
	'dummyText': 'KWH Per Day'
};

for (var i in dummylist) {
	setTag( i , dummylist[i] );
}

