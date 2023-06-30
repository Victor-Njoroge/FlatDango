let navbar=document.querySelector('.header')
window.onscroll=()=>{
    if (window.scrollY > 1){
        navbar.classList.add('nav-active');
    }else{
        navbar.classList.remove('nav-active')
    }
}

let menuMovie=document.querySelector(".shopping-cart");
document.querySelector(".fa-bars").onclick=()=>{
    menuMovie.classList.toggle("active")
}

const render=(video)=>{
    console.log(video)
    const videoContainer=document.createElement("div")
    videoContainer.innerHTML=`
    <video src="${video.high}" autoplay muted loop></video>
    <h2>${video.name}</h2>
    <p class='description'>${video.description}</p>
    <p class='industry'>${video.industry}</p>
    <button class="IMD">IMD</button>
   `
    document.querySelector(".home").appendChild(videoContainer)
}

const theatre=(film)=>{
    console.log(film)
    const menu=document.createElement("div")
    menu.className="box"
    menu.innerHTML=`
    <i class="fas fa-film"></i>
    <img src=${film.poster}>
    <div class="content">
    <h3>${film.title}</h3>
    <span class="quantity">Run time ${film.runtime} minutes</span>
   
    </div>

    `
    console.log(menu)
    document.querySelector(".shopping-cart").appendChild(menu)
}

const getData=()=>{
    fetch("http://localhost:3000/home")
    .then((res)=>{
        res.json()
        .then(home => home.forEach(video=>render(video)));
    })


    fetch("http://localhost:3000/films")
    .then((res)=>{
        res.json()
       .then(films => films.forEach(film=>theatre(film)));
    })
}

getData();