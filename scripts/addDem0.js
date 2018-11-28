var init = {
	//EU
	'J1_Cmd_Close': true,
	'J2_Cmd_Close': true,
	'J3_Cmd_Close': true,
	'J4_Cmd_Close': true,
	'J6_Cmd_Close': true,
	'J7_Cmd_Close': true,
	'J8_Cmd_Close': true,
	'J1_Cmd_Open': false,
	'J2_Cmd_Open': false,
	'J3_Cmd_Open': false,
	'J4_Cmd_Open': false,
	'J6_Cmd_Open': false,
	'J7_Cmd_Open': false,
	'J8_Cmd_Open': false,
	'J_Estop': false,
	'device_PLC_connected': true,
	'device_J1_connected': true,
	'device_J2_connected': true,
	'device_J3_connected': true,
	'device_J6_connected': true,
	'device_J7_connected': true,
	'device_J8_connected': true,
	
	//BMS
	'Temperature_Set1': 10,
	'Temperature_Set2': 20,
	'Temperature_Set3': 30,
	'Particle_Set': 40,
	
    'initAD': true //last item no trailing comma.
};

if (!getTag('initAD')) {
	for (var i in init) {
		setTag(i, init[i]);
	}
}

var J = ['J1','J2','J3','J4','J6','J7','J8'];
for (var i in J) {
	if (getTag(J[i]+'_Cmd_Close')) {
		setTag(J[i]+'_SG', true);
		setTag(J[i]+'_Cmd_Close', false)
	}
	else if (getTag(J[i]+'_Cmd_Open')) {
		setTag(J[i]+'_SG', false);
		setTag(J[i]+'_Cmd_Open', false);
	}
	setTag(J[i]+'_PF', Math.random());
	setTag(J[i]+'_Ep', getTag(J[i]+'_Ep')+getTag(J[i]+'_PF'));
}

var list = {
	//UE
	'J1_kW': 100,
	'J1_P': 100,
	'J1_Q': 100,
	'J1_Vab': 22000,
	'J1_Vbc': 22000,
	'J1_Vca': 22000,
	'J1_Vll': 22000,
	'J1_Ia': 1000,
	'J1_Ib': 1000,
	'J1_Ic': 1000,
	'J1_Iavg': 1000,
	'J2_kW': 100,
	'J2_P': 100,
	'J2_Q': 100,
	'J2_Vab': 22000,
	'J2_Vbc': 22000,
	'J2_Vca': 22000,
	'J2_Vll': 22000,
	'J2_Ia': 1000,
	'J2_Ib': 1000,
	'J2_Ic': 1000,
	'J2_Iavg': 1000,
	'J3_kW': 100,
	'J3_P': 100,
	'J3_Q': 100,
	'J3_Vab': 22000,
	'J3_Vbc': 22000,
	'J3_Vca': 22000,
	'J3_Vll': 22000,
	'J3_Ia': 1000,
	'J3_Ib': 1000,
	'J3_Ic': 1000,
	'J3_Iavg': 1000,
	'J6_kW': 100,
	'J6_P': 100,
	'J6_Q': 100,
	'J6_Vab': 22000,
	'J6_Vbc': 22000,
	'J6_Vca': 22000,
	'J6_Vll': 22000,
	'J6_Ia': 1000,
	'J6_Ib': 1000,
	'J6_Ic': 1000,
	'J6_Iavg': 1000,
	'J7_kW': 100,
	'J7_P': 100,
	'J7_Q': 100,
	'J7_Vab': 22000,
	'J7_Vbc': 22000,
	'J7_Vca': 22000,
	'J7_Vll': 22000,
	'J7_Ia': 1000,
	'J7_Ib': 1000,
	'J7_Ic': 1000,
	'J7_Iavg': 1000,
	'J8_kW': 100,
	'J8_P': 100,
	'J8_Q': 100,
	'J8_Vab': 22000,
	'J8_Vbc': 22000,
	'J8_Vca': 22000,
	'J8_Vll': 22000,
	'J8_Ia': 1000,
	'J8_Ib': 1000,
	'J8_Ic': 1000,
	'J8_Iavg': 1000,
	//BMS
	'Flow_Rate': 100,
	'Temperature': 30,
	'Frequency': 50,
	'Pressure': 80,
	'Particle': 80,
	'Percent': 100,
	'CT1_FreqR': 60,
	'CT1_FreqY': 60,
	'CT1_FreqB': 60,
	'CT1_Power': 180,
	'CT2_FreqR': 60,
	'CT2_FreqY': 60,
	'CT2_FreqB': 60,
	'CT2_Power': 180,
	'CT4_FreqR': 60,
	'CT4_FreqY': 60,
	'CT4_FreqB': 60,
	'CT4_Power': 180
};
for (var i in list) {
    var data = getTag(i) || Math.random()*list[i];
	data = getProcessData( data, list[i]);
	setTag( i , data);
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
var RT = getTag('Frequency');
setTag('Chil_Eff', getTag('CT1_FreqR')/RT);
setTag('CT_Eff', getTag('CT1_FreqY')/RT);
setTag('CHW_Eff', getTag('CT1_FreqB')/RT);
setTag('CNW_Eff', getTag('Temperature')/RT);
setTag('Sys_Eff', getTag('CT1_Power')/RT);
setTag('Chil1_Eff', getTag('CT2_Power')/getTag('CT1_FreqB'));