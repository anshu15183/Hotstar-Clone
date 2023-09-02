let movies = [
    {
        name: "the falcon and the winter soldier",
        des: 
        "Following the events of \"Avengers: Endgame,\" Sam Wilson and Bucky Barnes team up in a global adventure that tests their abilities and their patience. .",
        image: "images/slider 2.png",
        url: "https://www.hotstar.com/in/shows/the-falcon-and-the-winter-soldier/1260055670"
    },
    {
        name: "loki",
        des: 
        "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of \"Avengers: Endgame\".",
        image: "images/slider 1.png",
        url: "https://www.hotstar.com/in/shows/loki/1260063451"
    },
    {
        name: "wanda vision",
        des: 
        "Wanda Maximoff and Vision—two super-powered beings living idealized suburban lives—begin to suspect that everything is not as it seems.",
        image: "images/slider 3.png",
        url: "https://www.hotstar.com/in/shows/wandavision/1260051344"
    },
    {
        name: "raya and the lost dragon",
        des: 
        "Raya, a fallen princess, must track down the legendary last dragon to stop the evil forces that have returned and threaten her world. ",
        image: "images/slider 4.png",
        url: "https://www.hotstar.com/in/movies/raya-and-the-last-dragon/1260062999"
    },
    {
        name: "luca",
        des: 
        "The movie is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides. ",
        image: "images/slider 5.png",
        url: "https://www.hotstar.com/in/movies/luca/1260063730"
    }
];

const carousel=document.querySelector('.carousel');
let sliders=[];

let slideIndex=0;//track the current slide

const createSlide = () => 
{
    if(slideIndex>=movies.length)
    {
        slideIndex=0;
    }

    //create DOM Elements
    let slide= document.createElement("div");
    var imgElement= document.createElement("img");
    let content= document.createElement("div");
    let h1= document.createElement("h1");
    let p= document.createElement("p");
    //create anchors
    let link = document.createElement("a");
    link.href = movies[slideIndex].url;
    link.target = "_blank";


    //attaching all the elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    link.appendChild(content);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up images
    imgElement.src=movies[slideIndex].image;
    slideIndex++;

    //setting elements classnames
    slide.className="slider";
    content.className="slide-content";
    h1.className="movie-title";
    p.className="movie-des";

    sliders.push(slide);

    //adding sliding effect
    if(sliders.length)
    {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
            30 * (sliders.length - 2)
        }px)`;
    }
};

for (let i=0; i<3; i++)
{
    createSlide();
}

setInterval(()=>{
    createSlide();
},3000);

// Video cards
const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    const video = item.children[1];
    const image = item.children[0];
    let videoPlaying = false;
    let isLinkClicked = false;

    // Start the video when hovering over the video card
    item.addEventListener('mouseenter', () => {
        if (!isLinkClicked) {
            video.play();
            videoPlaying = true;
        }
    });

    // Pause the video when leaving the video card
    item.addEventListener('mouseleave', () => {
        if (!isLinkClicked && videoPlaying) {
            video.pause();
            videoPlaying = false;
        }
    });

    // Redirect to the video link when clicking on the video card
    item.addEventListener('click', () => {
        if (!isLinkClicked) {
            isLinkClicked = true;
            window.location.href = video.getAttribute('data-link');
        }
    });
});


//card sliders
let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item,i)=>
{
    let containerDimensions= item.getBoundingClientRect();
    let containerWidth= containerDimensions.width;

    nxtBtns[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth -200;
    });

    preBtns[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth +200;
    });
});

