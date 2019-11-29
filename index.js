const Image = document.getElementById("image");
const Title = document.getElementById("title");
const information = document.getElementById("information");
const Copyright = document.getElementById("copyright");

const Image2 = document.getElementById("image2");
const Title2 = document.getElementById("title2");
const information2 = document.getElementById("information2");
const Copyright2 = document.getElementById("copyright2");

const Image3 = document.getElementById("image3");
const Title3 = document.getElementById("title3");
const information3 = document.getElementById("information3");
const Copyright3 = document.getElementById("copyright3");

fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-22")
  .then(response => {
    return response.json();
  })
  .then(result => {
    console.log(result);
    const { url, copyright, title, explanation } = result;
    Image.src = url;
    Title.innerText = title;
    information.innerText = explanation;
    Copyright.innerText = copyright;
  });

fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-21")
  .then(response => {
    return response.json();
  })
  .then(result => {
    console.log(result);
    const { url, copyright, title, explanation } = result;
    Image2.src = url;
    Title2.innerText = title;
    information2.innerText = explanation;
    Copyright2.innerText = copyright;
  });

fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-20")
  .then(response => {
    return response.json();
  })
  .then(result => {
    console.log(result);
    const { url, copyright, title, explanation } = result;
    Image3.src = url;
    Title3.innerText = title;
    information3.innerText = explanation;
    Copyright3.innerText = copyright;
  });
