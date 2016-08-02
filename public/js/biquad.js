'use strict'

var audio = document.getElementById('biquadAudio');

var source = audioCtx.createMediaElementSource(audio);

var gainNode = audioCtx.createGain();


function onGainChange(){
	console.log('changing gain value...');
	gainNode.gain.value = $('#biquadSlider').val();
	$('#biquadGainVal').text($('#biquadSlider').val());
}

// set default value for slider
$('#biquadSlider').val(gainNode.gain.value);
$('#biquadGainVal').text(gainNode.gain.value);

source.connect(gainNode);
gainNode.connect(audioCtx.destination);

