const button = document.querySelector('button').addEventListener('click', getFetch)
// Data from NASA API 
const image = document.querySelector('.imgOfTheDay')//
const video = document.querySelector('iframe')//
const caption = document.querySelector('.title')//
const title = document.querySelector('.caption')//
const date = document.querySelector('.date')//

// Main call
function getFetch(){
  document.querySelector('button').value
  const url = "https://api.nasa.gov/planetary/apod?api_key=jc4rI47Ko044UKQzIxuE232SJIurnXMAvXt8bevA"

  fetch(url)
      .then(res => res.json()) // Parse response as JSON
      .then(data => {
        /// Hides iframe if data displayed is an image
        if (data.media_type === 'video') {
          image.style.display = 'none'
          video.src = data.url
        } else {
          video.style.display = 'none'
          image.src = data.url
        }
        ///
        console.log(data)
        image.src = data.url //
        video.src = data.url//
        caption.innerHTML = data.explanation//
        title.innerHTML = data.title//
        date.innerHTML = data.date//
      })
      .then(document.querySelector('.card-grid').style.visibility = 'visible') //Toggle div visibility
      .then(document.querySelector('button').style.visibility = 'hidden') //Toggle div visibility
      .catch(err => {
          console.log(`error ${err}`)
      })
}


