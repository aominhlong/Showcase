

let getAllAnime = fetch('https://showcase-api-eight.vercel.app/api/v1/anime')
    .then(res => {
      if(res.ok) {
        return res.json()
      } else {
        console.log(res)
        throw Error(res.status)
      }
    })

let addAnime = (newAnime) => {
    fetch(`https://showcase-api-eight.vercel.app/api/v1/anime`, {
      method: 'POST',
      body: JSON.stringify({
        "title": newAnime.title,
        "image": newAnime.image,
        "rating": newAnime.rating,
        "runtime": newAnime.runtime,
        "genre": newAnime.genre
      }),
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          console.log(res)
          throw Error(res.status)
        }
      })
      .catch(err => {
        this.setState({error: `${err}! Please try again later`})
      })
} 

let updateWatchList = () => {
   
}

let removeAnime = (foundAnime) => {
    // fetch(`https://showcase-api-eight.vercel.app/api/v1/anime`, {
    //   method: 'DELETE',
    //   body: JSON.stringify({
    //     "title": foundAnime.title,
    //     "image": foundAnime.image,
    //     "rating": foundAnime.rating,
    //     "runtime": foundAnime.runtime,
    //     "genre": foundAnime.genre
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    //   })
    //   .then(() =>fetch('https://showcase-api-eight.vercel.app/api/v1/anime'))
    //   .then(res => {
    //     if (res.ok) {
    //       return res.json()
    //     } else {
    //       console.log(res) 
    //       throw Error(res.status)
    //     }
    //   })
}

export { getAllAnime, addAnime, removeAnime, updateWatchList }