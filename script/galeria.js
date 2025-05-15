const dedo = document.getElementById('img1')
const desgraca = document.getElementById('img2')
const sanduba = document.getElementById('img4')
const davi = document.getElementById('img3')

console.log(sanduba)
const X = document.getElementById('tirar')
let clicado=false
dedo.addEventListener('click',()=>{
    if(clicado==false){

            const newImg = document.createElement('img')
     const div = document.getElementById('cont-principal')
     div.classList.add('principio')
     div.appendChild(newImg)
     X.textContent='X'
     newImg.src='/imgs/dedo.jpg'
     newImg.classList.add('imgPrincipal')
     clicado=true
              X.addEventListener('click',()=>{
         newImg.src=' '
         newImg.classList.remove('imgPrincipal')
         X.textContent=''
         div.classList.remove('principio')
         clicado=false
     })
    }
})
desgraca.addEventListener('click',()=>{
        if(clicado==false){
            const newImg = document.createElement('img')
     const div = document.getElementById('cont-principal')
     div.classList.add('principio')
     div.appendChild(newImg)
     X.textContent='X'
     newImg.src='/imgs/desgraca.jpg'
     newImg.classList.add('imgPrincipal')
     clicado=true
              X.addEventListener('click',()=>{
         newImg.src=' '
         newImg.classList.remove('imgPrincipal')
         div.classList.remove('principio')
         X.textContent=''
         clicado=false
     })
    }

 })
sanduba.addEventListener('click',()=>{
    if(clicado==false){
            const newImg = document.createElement('img')
     const div = document.getElementById('cont-principal')
     div.classList.add('principio')
     div.appendChild(newImg)
     X.textContent='X'
     newImg.src='/imgs/sanduiche.jpg'
     newImg.classList.add('imgPrincipal')
     clicado=true
              X.addEventListener('click',()=>{
         newImg.src=' '
         newImg.classList.remove('imgPrincipal')
         div.classList.remove('principio')
         X.textContent=''
         clicado=false
     })
    }
 })
davi.addEventListener('click',()=>{
    if(clicado==false){
            const newImg = document.createElement('img')
     const div = document.getElementById('cont-principal')
     div.classList.add('principio')
     div.appendChild(newImg)
     X.textContent='X'
     newImg.src='/imgs/davi.png'
     newImg.classList.add('imgPrincipal')
     clicado=true
              X.addEventListener('click',()=>{
         newImg.src=' '
         newImg.classList.remove('imgPrincipal')
         div.classList.remove('principio')
         X.textContent=''
         clicado=false
     })
    }
 })
