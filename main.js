const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
    'X-RapidAPI-Key': 'fbef8fcc14mshc67147fb98d2fb2p1646dfjsne5676d41e948'
  }
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=code', options)
  .then(response => response.json())
  .then(data => {
    const list = data.d;

    list.map(item => {
      const name = item.l;
      const poster = item.i.imageUrl;
      console.log(poster);
      const movie = `<li><img src="${poster}"> <h2>${name}</h2>`;
      document.querySelector('.movies').innerHTML += movie
    })
  })
  .catch(err => console.error(err));