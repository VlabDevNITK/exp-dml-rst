let simsubscreennum=0;
let temp=0;


	
function navNext()
{
	
	for(temp=0;temp<2;temp++)
	{ 
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	
	simsubscreennum+=1;
	//
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();

	
	
}

function animatearrow()
{
    if (document.getElementById('arrow1').style.visibility=="hidden")
        document.getElementById('arrow1').style.visibility="visible";
    else
        document.getElementById('arrow1').style.visibility="hidden";
}

function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

function blinkArrow(l,t,d,h)
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+l+"px; top:"+t+"px; height:"+h+"px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+d+"deg)"; 
	document.getElementById("arrow1").style.msTransform = "rotate("+d+"deg)";
	document.getElementById("arrow1").style.transform = "rotate("+d+"deg)";
}

function magic()
{
	if(simsubscreennum==1)
	{
		blinkArrow(520,270,360,40);
		
	}
	
	
}
function message(){

	
		// Retrieve the values of the select tags
		var select1Value = document.getElementById("readable1");
		var select2Value = document.getElementById("signalStrength1");
		var select3Value = document.getElementById("tone1");
  
		// Create a paragraph element to display the values
		var resultParagraph = document.getElementById("RST");
		resultParagraph.innerHTML = + select1Value.options[select1Value.selectedIndex].text + " " + select2Value.options[select2Value.selectedIndex].text
		 + " " + select3Value.options[select3Value.selectedIndex].text;

		 const RST={
			"r":"",
			"R1":{text:"Unreadable",rate:2},
			"R2":{text:"Barely readable,occasional words distinguishable",rate:1.8},
			"R3":{text:"Readable with pratically no difficulty", rate:1.6},
			"R4":{text:"Readable with practically no difficulty", rate:1.3},
			"R5":{text:"Perfectly readable", rate:1},
			"s":"",
			"S1":{text:"Faint signals barely perceptible",strength:0.2},
			"S2":{text:"Very weak signals",strength:0.3},
			"S3":{text:"Weak signals",strength:0.4},
			"S4":{text:"Fair signals",strength:0.5},
			"S5":{text:"Fairly good signals",strength:0.6},
			"S6":{text:"Good signals",strength:0.7},
			"S7":{text:"Moderately good signals",strength:0.8},
			"S8":{text:"Strong signals",strength:0.9},
			"S9":{text:"Extremely strong signals",strength:1.0},
			"t":"",
			"T1":{text:"Sixty-cycle ac or less, very rough and broad",pitch:0.2},
			"T2":{text:"Very rough ac, vry harsh and broad",pitch:0.3},
			"T3":{text:"Rough ac tone, rectified but not filtered",pitch:0.4},
			"T4":{text:"Rough note,some trace of filtering",pitch:0.5},
			"T5":{text:"Filtered rectified ac but strongly ripple-modulated",pitch:0.6},
			"T6":{text:"Filtered tone,definite trace of ripple modulation",pitch:0.7},
			"T7":{text:"Near pure tone,trace of ripple modulation",pitch:0.8},
			"T8":{text:"Near perfect tone,slight trace of modulation",pitch:0.9},
			"T9":{text:"Perfect tone, no trace of ripple or modulation of any ripple",pitch:1.0}
	
		   }
  //readablity
  var selectedOption=select1Value.value;
  let selectedR1 = RST[selectedOption].text;
  console.log(selectedR1)
  

  document.getElementById("readR1").innerHTML=selectedR1;
//signal astrength
  var selectedOption=select2Value.value;
  let selectedS1=RST[selectedOption].text;
  console.log(selectedS1);

  document.getElementById("signalS1").innerHTML=selectedS1;

  //tone
  var selectedOption=select3Value.value;
  let selectedT1=RST[selectedOption].text;
  console.log(selectedT1);



  document.getElementById("toneT1").innerHTML=selectedT1;

	   if(select1Value.value === "r" || select2Value.value === "s" || select3Value.value === "t"){
		document.getElementById("error").innerHTML="Please select the appropriate values";
		// document.getElementById("repeat").style.visibility="hidden";
	   }
	   else{
		document.getElementById("subMit").addEventListener('click',function navNext() {
			// document.getElementById("repeat").style.visibility="visible";
		
	 
	});
	navNext();
	  }
	}
	function repeat(){


		simsubscreennum = 1;
		document.getElementById("canvas2").style.visibility="hidden";
        document.getElementById("canvas1").style.visibility="visible";
        document.getElementById("repeat").style.visibility="hidden";
	    var selectclear=document.getElementById('readable1');
        selectclear.selectedIndex=0;

	    var selectclear=document.getElementById('signalStrength1');
        selectclear.selectedIndex=0;

        var selectclear=document.getElementById('tone1');
        selectclear.selectedIndex=0;
	    document.getElementById("error").innerHTML="";
	}
 
 
function speak(){
	var select1Value = document.getElementById("readable1");
	var select2Value = document.getElementById("signalStrength1");
	var select3Value = document.getElementById("tone1");
	const loadingGif = document.getElementById('speaker-icon');


	document.getElementById('repeat').style.visibility='hidden';

	// Create a paragraph element to display the values
	// var resultParagraph = document.getElementById("RST");
	// resultParagraph.innerHTML = + select1Value.options[select1Value.selectedIndex].text + " " + select2Value.options[select2Value.selectedIndex].text
	//  + " " + select3Value.options[select3Value.selectedIndex].text;
	const RST={
		"r":"",
		"R1":{text:"Unreadable",rate:2},
		"R2":{text:"Barely readable,occasional words distinguishable",rate:1.8},
		"R3":{text:"Readable with pratically no difficulty", rate:1.6},
		"R4":{text:"Readable with practically no difficulty", rate:1.3},
		"R5":{text:"Perfectly readable", rate:1},
		"s":"",
		"S1":{text:"Faint signals barely perceptible",strength:0.2},
		"S2":{text:"Very weak signals",strength:0.3},
		"S3":{text:"Weak signals",strength:0.4},
		"S4":{text:"Fair signals",strength:0.5},
		"S5":{text:"Fairly good signals",strength:0.6},
		"S6":{text:"Good signals",strength:0.7},
		"S7":{text:"Moderately good signals",strength:0.8},
		"S8":{text:"Strong signals",strength:0.9},
		"S9":{text:"Extremely strong signals",strength:1.0},
		"t":"",
		"T1":{text:"Sixty-cycle ac or less, very rough and broad",pitch:0.2},
		"T2":{text:"Very rough ac, vry harsh and broad",pitch:0.3},
		"T3":{text:"Rough ac tone, rectified but not filtered",pitch:0.4},
		"T4":{text:"Rough note,some trace of filtering",pitch:0.5},
		"T5":{text:"Filtered rectified ac but strongly ripple-modulated",pitch:0.6},
		"T6":{text:"Filtered tone,definite trace of ripple modulation",pitch:0.7},
		"T7":{text:"Near pure tone,trace of ripple modulation",pitch:0.8},
		"T8":{text:"Near perfect tone,slight trace of modulation",pitch:0.9},
		"T9":{text:"Perfect tone, no trace of ripple or modulation of any ripple",pitch:1.0}

	   }
//readablity
var selectedOption=select1Value.value;
let selectedR1=RST[selectedOption].text;
let utRate=RST[selectedOption].rate;

console.log(utRate);

console.log(selectedR1);



document.getElementById("readR1").innerHTML=selectedR1;
//signal strength
var selectedOption=select2Value.value;
let selectedS1=RST[selectedOption].text;
let stRength =RST[selectedOption].strength;
console.log(stRength);
console.log(selectedS1);

document.getElementById("signalS1").innerHTML=selectedS1;

//tone
var selectedOption=select3Value.value;
let selectedT1=RST[selectedOption].text;
let pitchVal=RST[selectedOption].pitch;
console.log(pitchVal);
console.log(selectedT1);

 

// rate value  
const speakButton = document.getElementById('ply');
        speakButton.disabled = true; // Disable the button
	if ('speechSynthesis' in window) {
		const textElement = document.getElementById('RST');
		const textToSpeak = textElement ? textElement.textContent : 'Text not found';
		const utterance = new SpeechSynthesisUtterance(textToSpeak);
		utterance.lang = 'en-US';
        utterance.rate=utRate;
		utterance.volume=stRength;
        utterance.pitch= pitchVal;
		const voices = speechSynthesis.getVoices();
		utterance.voice = voices.find(voice => voice.lang === 'en-US');
	

		utterance.onstart = () => {
			console.log('Speech synthesis started');
			loadingGif.style.visibility = 'visible'; 
		}
		utterance.onend = () => {
			console.log('Speech synthesis ended');
			speakButton.disabled = false; // Enable the button when speech ends
			document.getElementById('repeat').style.visibility='visible';
			loadingGif.style.visibility = 'hidden';

		};
		utterance.onerror = (event) => {
			console.error('Speech synthesis error', event.error);
			speakButton.disabled = false; // Enable the button in case of an error
			document.getElementById('repeat').style.visibility='visible';
			loadingGif.style.visibility = 'hidden';
		};

		speechSynthesis.speak(utterance);
	} else {
		console.error('Speech synthesis is not supported in this browser.');
		speakButton.disabled = false; // Enable the button if speech synthesis is not supported
		document.getElementById('repeat').style.visibility='visible';
		loadingGif.style.visibility = 'hidden';
	}


	
}















	









	
	 
	
		

























