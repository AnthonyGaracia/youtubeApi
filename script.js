console.log("hello")

fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCJDBbfxL9IowHKoq3903gIw&maxResults=10&order=date&key=AIzaSyDWVIsBijhxyV61rU6DIR2sGzudKZHlQr0")
.then ((result)=>{
    return result.json()
})
.then((data)=>{
    console.log(data)
    let videos = data.items
   
    let videoContainer = document.querySelector('.youtubeContainer')
    for(video of videos){
        videoContainer.innerHTML +=`
        <h3>${video.snippet.title}</h3> 
       <a href="https://www.youtube.com/watch?v=" class="utubeCon">
       <img src="${video.snippet.thumbnails.high.url}">
        </a>`
    }
})
