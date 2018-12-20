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
	'totalConsumption':1167677,
	'PlantA': 184511,
	'buswayLV': 539928,
	'equipUPS': 1470,
	'genUPS': 1867,
	'PlantB': 38323,
	'DataCenter': 30333,
	'ConnectedLoads': 4563,
	'chillerUnits': 197177,
	'chillerCP': 414,
	'MAU': 36456,
	'PCW': 32088,
	'CWP': 14736,
	'CWSP': 7752,
	'CTF': 12960,
	'CTMF': 150,
	'CWPP': 11352,
	'RCU': 3776,
	'AHU': 3936,
	'FFU': 9344,
	'scrubberExhaust': 16608,
	'SRP': 1528,
	'generalExhaust': 2643,
	'solventExhaust': 1384,
	'WWTP': 456,
	'PWP': 539,
	'TCM': 600,
	'TGM': 466,
	'PVP': 3365,
	'lighting': 9035,
	'boiler': 743,
	'DWP': 151,
	'CCTV': 221,
	'scada': 566
	
};

for (var i in horizontalReportData) {
    var data = horizontalReportData[i] + (horizontalReportData[i]*0.2*Math.random());
	setTag( i , data);
}

var dummylist = {
	'dummyText': 'KWH Per Day'
};

for (var i in dummylist) {
	setTag( i , dummylist[i] );
}

