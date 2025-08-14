let botao = document.getElementById('botao')
let contador = 1

botao.addEventListener('click', () => {
    botao.innerText = `Você clicou no botão ${contador++} vezes` 
})