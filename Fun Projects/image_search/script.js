const API_KEY = `25968599-1a32f87082b3750d77c601508`;
const URL = `https://pixabay.com/api/?key=25968599-1a32f87082b3750d77c601508&q=yellow+flowers&image_type=photo&pretty=true`;

const output = document.querySelector('#output');
const word = document.querySelector('#word');
const srcBtn = document.querySelector('#srcBtn');
const getURL = (query) => {
  return `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&pretty=true`;
};

const getPhotoHTML = (url) => {
  return `<div class="col-2 mt-3">
            <div class="rounded shadow border">
            <img width="100%" height="150" src="${url}" alt="">
            </div>
        </div>`;
};

const loadPhoto = query => {
    word.value = "";
    axios
    .get(getURL(query))
    .then((res) => {
      const photos = res.data.hits;
      output.innerHTML = "";
      photos.forEach((photo) => {
          output.innerHTML += getPhotoHTML(photo.previewURL)
      });
    })
    .catch((err) => {
      console.log(err);
    });  
}

srcBtn.addEventListener('click', () => {
    let query = word.value;

    if(query.length > 0){
        loadPhoto(query);
    }else{
        word.focus();
        alert('Enter A Name!!');
    }
    
})

word.addEventListener('keydown', e => {
    if(e.key === "Enter"){
        srcBtn.click();
    }
})


