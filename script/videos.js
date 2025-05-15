const video1 = document.getElementById('vid1')
const video2 = document.getElementById('vid2')
const video3 = document.getElementById('vid3')
const video4 = document.getElementById('vid4')

const X = document.getElementById('text-sair')
let clicado = false

video1.addEventListener('click',()=>{
    if(clicado==false){
    const newImg = document.createElement('iframe')
     const div = document.getElementById('tudo')
     div.classList.add('principio')
     div.appendChild(newImg)
     X.textContent='X'
     newImg.src='/videos/danca.mp4'
     newImg.classList.add('imgPrincipal')
     clicado=true
              X.addEventListener('click',()=>{
                div.classList.remove('principio')
         newImg.parentNode.removeChild(newImg)
         X.textContent=''
         clicado=false
     })
    }
})

video2.addEventListener('click',()=>{
    if(clicado==false){
    const newImg = document.createElement('iframe')
     const div = document.getElementById('tudo')
     div.classList.add('principio')
     div.appendChild(newImg)
     X.textContent='X'
     newImg.src='/videos/barata.mp4'
     newImg.classList.add('imgPrincipal')
     clicado=true
              X.addEventListener('click',()=>{
                div.classList.remove('principio')
         newImg.parentNode.removeChild(newImg)
         X.textContent=''
         clicado=false
     })
    }
})

video3.addEventListener('click',()=>{
    if(clicado==false){
    const newImg = document.createElement('iframe')
     const div = document.getElementById('tudo')
     div.classList.add('principio')
     div.appendChild(newImg)
     X.textContent='X'
     newImg.src='/videos/cantando.mp4'
     newImg.classList.add('imgPrincipal')
     clicado=true
              X.addEventListener('click',()=>{
                div.classList.remove('principio')
         newImg.parentNode.removeChild(newImg)
         X.textContent=''
         clicado=false
     })
    }
})

video4.addEventListener('click',()=>{
    if(clicado==false){
    const newImg = document.createElement('iframe')
     const div = document.getElementById('tudo')
     div.classList.add('principio')
     div.appendChild(newImg)
     X.textContent='X'
     newImg.src='/videos/cabecinha.mp4'
     newImg.classList.add('imgPrincipal')
     clicado=true
              X.addEventListener('click',()=>{
                div.classList.remove('principio')
         newImg.parentNode.removeChild(newImg)
         X.textContent=''
         clicado=false
     })
    }
})