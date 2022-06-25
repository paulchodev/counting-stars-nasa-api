document.querySelector("img").classList.add("hidden");
document.querySelector("iframe").classList.add("hidden");

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=7y487BbWNTzuiBjpVnkQhVpWWby80Xg7PSDQUg5e&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === "image"){
          const img = data.hdurl;
          const bg = document.querySelector(".mainbg");
          bg.style.backgroundImage = `url(${img})`
          // document.querySelector("img").src = data.hdurl;
          document.querySelector("img").classList.remove("hidden");
          document.querySelector("iframe").classList.add("hidden");
        }else if(data.media_type === "video"){
          document.querySelector("iframe").src = data.url;
          document.querySelector("img").classList.add("hidden");
          document.querySelector("iframe").classList.remove("hidden");
        }
        document.querySelector('h3').innerText = data.explanation;
        document.querySelector("h2").innerText = data.title;
        document.querySelector(".credit").innerText = "by: "+data.copyright;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

