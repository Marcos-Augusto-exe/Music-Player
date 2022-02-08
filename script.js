let musicas = [
    { titulo: 'INDUSTRY BABY', artista: 'LIL NAS X', src: 'musicas/LIL NAS X & JACK HARLOW - INDUSTRY BABY.mp3', img: 'imagens/lil nas x.png', fundo:'imagens/fundo/lil-nas-x.jpg' },
    { titulo: 'Sunflower', artista: 'Post Malone', src: 'musicas/Post Malone, Swae Lee - Sunflower (Spider-Man_ Into the Spider-Verse).mp3', img: 'imagens/post malone-Aranhaverso.jpg', fundo:'imagens/fundo/Sunflower.jpg' },
    { titulo: '24K Magic', artista: 'Bruno Mars', src: 'musicas/Bruno Mars - 24K Magic.mp3', img: 'imagens/bm.webp', fundo:'imagens/fundo/bruno-mars.png' },
    { titulo: 'Circles', artista: 'Post Malone', src: 'musicas/Post Malone - Circles.mp3', img: 'imagens/post malone-circles.jpg',fundo:'imagens/fundo/circles.jpg' },
    { titulo: 'Memories', artista: 'Maroon 5', src: 'musicas/Maroon 5 - Memories.mp3', img: 'imagens/maroon-5-memories.jpg', fundo:'imagens/fundo/marron5.jpg' },
    { titulo: 'Leave the Door Open', artista: 'Bruno Mars, Anderson .Paak', src: 'musicas/Bruno Mars, Anderson .Paak, Silk Sonic - Leave the Door Open.mp3', img: 'imagens/Bruno Mars, Anderson .Paak.jpg', fundo:'imagens/fundo/bruno\ mars\ anderson\ paak.jpg' }
]

let musica = document.querySelector("audio");
let count = 0;
let duracaoMusica = document.querySelector(".fim");
let imagem = document.querySelector("#img");
let nomeMusica = document.querySelector(".descricao h2");
let nomeArtista = document.querySelector(".descricao i");
let indexMusica = 0;

renderizarMusica(indexMusica)
musica.addEventListener('timeupdate', atualizarBarra);

function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        document.querySelector("body").style.backgroundImage = 'url("'+ musicas[index].fundo +'")';
        duracaoMusica.textContent = seg_min(Math.floor(musica.duration));
    })
}

function play() {
    musica.play();
    document.querySelector(".pause").style.display = 'inline-block'
    document.querySelector(".play").style.display = 'none'
    count++;
}
function pause() {
    musica.pause();
    document.querySelector(".pause").style.display = 'none'
    document.querySelector(".play").style.display = 'inline-block'
}

function retroceder() {
    musica.currentTime -= 10;
}
function avancar() {
    musica.currentTime += 10;
}

function anterior() {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 5;
    }
    renderizarMusica(indexMusica)
    musica.play();
    document.querySelector(".pause").style.display = 'inline-block'
    document.querySelector(".play").style.display = 'none'

}

function proximo() {
    indexMusica++;
    if (indexMusica > 5) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica)
    musica.play();
    document.querySelector(".pause").style.display = 'inline-block'
    document.querySelector(".play").style.display = 'none'
}



function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector(".inicio");
    tempoDecorrido.textContent = seg_min(Math.floor(musica.currentTime));
    if(tempoDecorrido.innerHTML === duracaoMusica.innerHTML){
        proximo()
    }
}

function seg_min(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos + ':' + campoSegundos;

}

