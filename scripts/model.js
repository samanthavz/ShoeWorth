
// the link to your model provided by Teachable Machine export panel
const URL = "/tm-my-image-model/";
let model, webcam, labelContainer, maxPredictions;

let result = {};

const webcamDiv = document.getElementById("webcam-container");
// Load the image model and setup the webcam
async function init() {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  document.getElementById("button1").classList.add("invisible");
  document.getElementById("button2").classList.add("invisible");

  document.getElementById("camera-notice").classList.add("invisible");

  const h3 = document.getElementById("h3")
  h3.classList.add("h3-2");
  h3.innerText = "Is this a...";

  // load the model and metadata
  // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
  // or files from your local hard drive
  // Note: the pose library adds "tmImage" object to your window (window.tmImage)
  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  // Convenience function to setup a webcam
  const flip = true; // whether to flip the webcam
  webcam = new tmImage.Webcam(webcamDiv.offsetWidth, webcamDiv.offsetHeight, flip); // width, height, flip
  await webcam.setup(); // request access to the webcam
  await webcam.play();
  window.requestAnimationFrame(loop);

  // append elements to the DOM
  document.getElementById("webcam-container").appendChild(webcam.canvas);
  labelContainer = document.getElementById("label-container");
  for (let i = 0; i < maxPredictions; i++) {
    // and class labels
    labelContainer.appendChild(document.createElement("div"));
  }

  document.getElementById("button3").classList.add("visible");
  document.getElementById("button4").classList.add("visible");
}

async function loop() {
  webcam.update(); // update the webcam frame
  await predict();
  window.requestAnimationFrame(loop);

// run the webcam image through the image model
async function predict() {
  // predict can take in an image, video or canvas html element
  const prediction = await model.predict(webcam.canvas);

   result = {};
   for (let i = 0; i < maxPredictions; i++) {
     result[prediction[i].className] = prediction[i].probability.toFixed(2);
   }

  if (result["Vans"] > 0.9) {
      labelContainer.innerHTML = "Vans";
    } else if (result["Nike"] > 0.9) {
      labelContainer.innerHTML = "Nike";
    } else if (result["Adidas"] > 0.9) {
      labelContainer.innerHTML = "Adidas";
    } else {
      labelContainer.innerHTML = "Analyzing...";
    }
  }
}
