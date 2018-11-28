
var SDV = ['gMovSttsSDV4083','gMovSttsSDV4076','cMovSttsSDV4077'];
for (var i in SDV) {
	if ((getTag(SDV[i]) == 3)||(getTag(SDV[i]) == null)) {
		setTag(SDV[i], 2);
	}
	if (getTag(SDV[i]) == 4) {
		setTag(SDV[i], 1);
	}
}
var skid = [];
for (var i = 1; i <= 3; i++) {
    var gMov_Inlet = getTag('gMov_Inlet'+i);
    if (gMov_Inlet == null) { setTag('gMov_Inlet'+i, 0);}
    var gFcv_ = getTag('gFcv_'+i);
    if (gFcv_ == null) { setTag('gFcv_'+i, 0);}
    var gMov_Outlet = getTag('gMov_Outlet'+i);
    if (gMov_Outlet == null) { setTag('gMov_Outlet'+i, 0);}
    if ((0 == gMov_Inlet)&&(0 == gFcv_)&&(0 == gMov_Outlet)&&(getTag('gMovSttsSDV4076') == 2)) {
        skid.push ('gDmdSVolRate'+i,'gDmdMassRate'+i);
    } else {
        setTag('gDmdSVolRate'+i, 0);
        setTag('gDmdMassRate'+i, 0);
    }
}
if (getTag('gMovSttsSDV4083') == 2) {
	skid.push ('gDmdSVolRate4','gDmdMassRate4');
} else {
    setTag('gDmdSVolRate4', 0);
    setTag('gDmdMassRate4', 0);
}
for (var k = 1; k <= 4; k++) {
	var RUN = getTag('RUN');
	if ((RUN == null)||(1 > RUN)||(4 < RUN)) {
		setTag('RUN', 4);
	} else {
		if (getTag('prevRUN') != RUN) {
			if (k == RUN) {
				setTag('cMov_Inlet'+k, 0);
				setTag('cMov_Outlet'+k, 1);
				setTag('cFcv_'+k, 0);
				setTag('pMov_Inlet'+k, 0);
				setTag('pMov_Outlet'+k, 0);
			} else {
				setTag('pMov_Inlet'+k, 1);
				setTag('pMov_Outlet'+k, 1);
			}
			if (k == 4) { setTag('prevRUN', RUN);}
		}
	}
    var cMov_Inlet = getTag('cMov_Inlet'+k);
	if (cMov_Inlet == null) { setTag('cMov_Inlet'+k, 0);}
    var cMov_Outlet = getTag('cMov_Outlet'+k);
	if (cMov_Outlet == null) { setTag('cMov_Outlet'+k, 0);}
    var cFcv_ = getTag('cFcv_'+k);
	if (cFcv_ == null) { setTag('cFcv_'+k, 0);}
    var pMov_Inlet = getTag('pMov_Inlet'+k);
    if (pMov_Inlet == null) { setTag('pMov_Inlet'+k, 1);}
    var pMov_Outlet = getTag('pMov_Outlet'+k);
	if (pMov_Outlet == null) { setTag('pMov_Outlet'+k, 1);}
    if ((0 == pMov_Inlet)&&(0 == pMov_Outlet)) {
        setTag('pProgress',"RUN "+k);
		setTag('RUN', k);
    }
    if ((getTag('cMovSttsSDV4077') == 2)&&((0 == cMov_Inlet)&&(0 == cFcv_))&&(((0 == pMov_Inlet)&&(0 == pMov_Outlet))||(0 == cMov_Outlet))) {
        skid.push ('cDmdPressure'+k,'cDmdFlowrate'+k,'cFcvPosFV'+k);
    } else {
        setTag('cDmdPressure'+k, 0);
        setTag('cDmdFlowrate'+k, 0);
        setTag('cFcvPosFV'+k, 0);
    }
    if ((getTag('cMovSttsSDV4077') == 2)&&(0 == cMov_Inlet)&&(0 == cFcv_)&&(0 == pMov_Inlet)&&(0 == pMov_Outlet)) {
		skid.push ('cPrvInletTemp','cPrvInletPressKpag','cPrvOutletTemp','cPrvOutletPressKpag');
	}	
}
for (var j in skid) {
    setTag( skid[j], Math.random()*50);
}
/***** Oil & Gas code end *****/