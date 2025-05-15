const video = document.getElementById('videos')
const galeria = document.getElementById('galeria')
const homenagem = document.getElementById('homenagem')

video.addEventListener('click',()=>{
    window.location.href='/public/videos.html'
})
galeria.addEventListener('click',()=>{
    window.location.href='/public/galeria.html'
})
homenagem.addEventListener('click',()=>{
    window.location.href='/public/homenagem.html'
})
