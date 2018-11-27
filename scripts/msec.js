//this script will be executed in milliseconds.

//generate several tags for testing
for (var i=0; i<10; i++) {
    setTag( 'rand_msec0' + i, Math.random()*100);
}

var v = getTag( 'queu') || 0;
v>9999? v=0: v++;
for (i=0; i<10; i++) {
    setTag( 'queu_msec0' + i, v);
}
setTag( 'queu', v);
