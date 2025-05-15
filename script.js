const botao = document.getElementById('mid')
const pedrosa = document.getElementById('pedrosa')
const aloneText = document.getElementById('sozinho')
botao.addEventListener('click',()=>{
    botao.classList.add('sumir')
        pedrosa.classList.remove('sumir')
        pedrosa.classList.add('aparecer')
        setTimeout(()=>{
            pedrosa.classList.remove('aparecer')
            pedrosa.classList.add('desvanecer')
        },6000)
        setTimeout(()=>{
            pedrosa.classList.remove('desvanecer')
            pedrosa.classList.add('sumir')
            aloneText.classList.remove('sumir')
            aloneText.classList.add('aparecer')
        },10000)
        setTimeout(()=>{
            const confirma =true
            if(confirma==true){
                window.location.href ='/pedrosas.html'
            }
        },14000)

})