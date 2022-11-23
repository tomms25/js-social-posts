// Milestone 1 -
// Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: - id del post, numero progressivo da 1 a n - nome autore, - foto autore, - data in formato americano (mm-gg-yyyy), - testo del post, - immagine (non tutti i post devono avere una immagine), - numero di likes.



const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];





// Milestone 2 -
// Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.


// Creo la costante relativa al container

const container = document.getElementById("container");



// Creo la funzione per "stampare" i vari dati 

function printAllPost() {
  posts.forEach((singlePost) => {

    // Credo i div tramite const
    const post = document.createElement("div");

    // Tramite set attiribute imposto un classe con valore post ed un id single.Post

    post.setAttribute("class", "post");

    post.setAttribute("id", `${singlePost.id}`);

    // Inserisco il codice HTML dentro Js una volta dati i valori ai vari elementi 
    // Tramite l'id creato singlePost scelgo gli oggetti che dovrenno essere stampati, sia il name, l'image, sia , perché l'Html delle immagini infatti è contenuto dentro l'oggetto image. 

    post.innerHTML = `
        <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${
                  singlePost.author.image 
                }" alt="${singlePost.author.name}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${singlePost.author.name}</div>
                <div class="post-meta__time">${new Date(
                  singlePost.created
                ).toLocaleDateString()}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
    <div class="post__image">
        <img src="${singlePost.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button js-like-button" href="#" data-postid="${
                  singlePost.id
                }">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${
                  singlePost.id
                }" class="js-likes-counter">${singlePost.likes}</b> persone
            </div>
        </div> 
    </div> 
        `;
    container.append(post);
  });
}

// Milestone 3 -
// Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

printAllPost();

let likedPost = [];
const likeButtons = document.querySelectorAll("[data-postid]");


// Scrivo la funzione per il bottone e per aumentare il numero di like al click di conseguenza

likeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    button.classList.add("like-button--liked");
    let postId = button.getAttribute("data-postid");

    const idCounter = document.getElementById(`like-counter-${postId}`);
    likedPost.push(postId);

    idCounter.innerHTML = `${posts[postId - 1].likes + 1}`;
    console.log(likedPost);
  });
});

function press() {
  let counter = document.getElementById("like-counter");
  counter.innerHTML = `${posts[0].likes++}`;
}

counter = document.getElementById("like-counter-1");
