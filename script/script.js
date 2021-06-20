const API_KEY = 'o8hEwYeZBFKfclQfYHlVsFPs5W9pan7rnd-4O_zLpbQ';

const getPhotos = () => {
  const url = `https://api.unsplash.com/photos?client_id=${API_KEY}&page=${Math.round(Math.random() * (1 - 100) + 100)}`;
  fetch(url)
    .then((res) => {return res.json()})
    .then((res) => {res.map((photo) => {
      let results = 
      `<article>
          <img src="${photo.urls.regular}"/>
      </article>`
        return (document.getElementById('apiInbox').innerHTML = document.getElementById('apiInbox').innerHTML+ results);
      });
    })
    .catch(err);
};


getPhotos();
