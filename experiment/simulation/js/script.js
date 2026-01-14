let simsubscreennum=0;
let temp=0;


	
function navNext()
{
	
	for(temp=0;temp<2;temp++)
	{ 
		document.getElementById("canvas"+temp).style.display="none";
	}
	
	simsubscreennum+=1;
	//
	document.getElementById("canvas"+simsubscreennum).style.display="block";
	document.getElementById("nextButton").style.display="none";
	// magic();

	
	
}

// function animatearrow()
// {
//     if (document.getElementById('arrow1').style.visibility=="hidden")
//         document.getElementById('arrow1').style.visibility="visible";
//     else
//         document.getElementById('arrow1').style.visibility="hidden";
// }

function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

  // function blinkArrow(l,t,d,h)
  // {
  // 	myInt = setInterval(function(){ animatearrow(); }, 500);
  // 	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+l+"px; top:"+t+"px; height:"+h+"px; z-index: 10;";
  // 	document.getElementById("arrow1").style.WebkitTransform = "rotate("+d+"deg)"; 
  // 	document.getElementById("arrow1").style.msTransform = "rotate("+d+"deg)";
  // 	document.getElementById("arrow1").style.transform = "rotate("+d+"deg)";
  // }

// function magic()
// {
// 	if(simsubscreennum==1)
// 	{
// 		blinkArrow(520,270,360,40);
		
// 	}
	
	
// }
// document.getElementById('numberInput').addEventListener('keypress', function (e) {
//   if (e.key < '0' || e.key > '9') {
//       e.preventDefault();
//   }
// });

// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById('numberInput').addEventListener('keypress', function (e) {
//  var errorDisplay = document.getElementById("warningMessage");
//  if (e.key < '0' || e.key > '9') {
//   errorDisplay.style.visibility = "visible";
//   e.preventDefault();
// } else {
//   errorDisplay.style.visibility = "hidden";
// }
//   });


  // var numericInput = document.getElementById("numberInput");
  // var rangeInput = document.getElementById("slider");
  // var errorDisplay = document.getElementById("warningMessage");
  // errorDisplay.style.display = "none";


  // numericInput.value = 0;
  // rangeInput.value = 0;

  
  // numericInput.addEventListener("input", function() {
    
  //   rangeInput.value = numericInput.value;

   
  //   numberMorse();
  //   const inputValue1 = numericInput.value;

  // // Check if the input value contains multiple zeros
  // if (inputValue1.includes("00")) {
  //   // Remove the extra zeros
  //   numericInput.value = inputValue1.replace(/00/g, "0");
  // }

  //   var inputValue = parseInt(numericInput.value, 10);
  //   if (isNaN(inputValue) || inputValue < 0 || inputValue > 9 || !Number.isInteger(inputValue)|| numericInput.value.includes(".")) {
  //     errorDisplay.style.display = "block";
  //     document.getElementById('submit').disabled = true;
  //     numericInput.value = "";
  //      inputValue = 0;
  //   } else {
  //     errorDisplay.style.display = "none";
  //     document.getElementById('submit').disabled = false;
  //     numberMorse();
  //   }
  // });

  // rangeInput.addEventListener("input", function() {

  //   numericInput.value = rangeInput.value;

  
  //   numberMorse();

  //   var inputValue = parseInt(numericInput.value, 10);
  //   if (isNaN(inputValue) || inputValue < 0 || inputValue > 9 || !Number.isInteger(inputValue)|| numericInput.value.includes(".")) {
  //     errorDisplay.style.display = "block";
  //     document.getElementById('submit').disabled = true;
  //     numericInput.value = "";
  //      inputValue = 0;
  //   } else {
  //     errorDisplay.style.display = "none";
  //     document.getElementById('submit').disabled = false;
  //     numberMorse();
  //   }
  // });

  
  // numberMorse();
// });

document.addEventListener('DOMContentLoaded', function () {
  const playButton = document.getElementById('play-button');
  const meterElement = document.getElementById('signal-strength-meter');
  
  // Audio context for playing distortion audio
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  let distortionBuffer; // Buffer to hold distortion audio data
  let distortionSource; // Variable to keep track of distortion source node
  
  // Load distortion audio file (MP3)
  fetch('/distortion.mp3') // Adjust the path to the correct location of the uploaded file
    .then(response => response.arrayBuffer())
    .then(data => audioContext.decodeAudioData(data, buffer => {
      distortionBuffer = buffer;
    }, error => {
      console.error('Error decoding audio data:', error);
    }));
  
  // Mapping for custom settings for readability (rate), signal strength (volume), and tone (pitch)
  const settings = {
    readability: {
      "1": { volume: 0, rate: 1.8 },
      "2": { rate: 1.8 },
      "3": { rate: 1.6 },
      "4": { rate: 1.3 },
      "5": { rate: 1 }
    },
    signalStrength: {
      "1": { volume: 0.2, distortion: 1.0 },
      "2": { volume: 0.3, distortion: 0.8 },
      "3": { volume: 0.4, distortion: 0.6 },
      "4": { volume: 0.5, distortion: 0.5 },
      "5": { volume: 0.6, distortion: 0.4 },
      "6": { volume: 0.7, distortion: 0.3 },
      "7": { volume: 0.8, distortion: 0.2 },
      "8": { volume: 0.9, distortion: 0.1 },
      "9": { volume: 1.0, distortion: 0.0 }
    },
    tone: {
      "1": { pitch: 0.2 },
      "2": { pitch: 0.3 },
      "3": { pitch: 0.4 },
      "4": { pitch: 0.5 },
      "5": { pitch: 0.6 },
      "6": { pitch: 0.7 },
      "7": { pitch: 0.8 },
      "8": { pitch: 0.9 },
      "9": { pitch: 1.0 }
    }
  };
  
  // Generate speech synthesis audio and play it
  function generateAudio() {
    const readabilityValue = document.getElementById('readability').value;
    const signalStrengthValue = document.getElementById('signal-strength').value;
    const toneValue = document.getElementById('tone').value;
  
    // If readability is 1, do not speak
    if (readabilityValue === "1") {
      console.log("Readability is 1, not speaking.");
      return;
    }
  
    // Get the custom settings from the mapping
    const rate = settings.readability[readabilityValue]?.rate || 1;
    const volume = settings.signalStrength[signalStrengthValue]?.volume || 1;
    const pitch = settings.tone[toneValue]?.pitch || 1;
    const distortionVolume = settings.signalStrength[signalStrengthValue]?.distortion || 0;
  
    // Ensure the rate is a finite number
    if (!isFinite(rate)) {
      console.error('Invalid rate value:', rate);
      return;
    }
  
    // Get text from the input, or use default if empty
    const text = `${readabilityValue} ${signalStrengthValue} ${toneValue}`;
    const utterance = new SpeechSynthesisUtterance(text);
  
    // Apply custom settings to the speech synthesis utterance
    utterance.rate = rate;
    utterance.volume = volume;
    utterance.pitch = pitch;
  
    // Update the signal quality meter
    meterElement.value = signalStrengthValue;
  
    // Play the distortion audio with controlled volume
    if (distortionBuffer) {
      distortionSource = audioContext.createBufferSource();
      distortionSource.buffer = distortionBuffer;
  
      const gainNode = audioContext.createGain();
      gainNode.gain.value = distortionVolume; // Adjust distortion volume based on signal strength
  
      distortionSource.connect(gainNode);
      gainNode.connect(audioContext.destination);
  
      distortionSource.start();
    }
  
    // Play the speech synthesis
    window.speechSynthesis.speak(utterance);
  
    // Stop distortion audio when speech ends
    utterance.onend = () => {
      if (distortionSource) {
        distortionSource.stop();
        distortionSource.disconnect(); // Clean up audio nodes
      }
    };
  }
  
  // Handle user input changes
  function handleInputChange() {
    const signalStrengthValue = document.getElementById('signal-strength').value;
    meterElement.value = signalStrengthValue;
  }
  
  // Initialize event listeners
  document.getElementById('readability').addEventListener('change', handleInputChange);
  document.getElementById('signal-strength').addEventListener('change', handleInputChange);
  document.getElementById('tone').addEventListener('change', handleInputChange);
  playButton.addEventListener('click', generateAudio);
});

		

























