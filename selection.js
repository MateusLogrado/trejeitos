let resposta = document.createElement("div")
let body = document.querySelector("body")
let gerar = document.getElementById("gerar")
let crescente = document.getElementById("crescente")
let decrescente = document.getElementById("decrescente")
let numArray = []

resposta.setAttribute("id", "res")
body.appendChild(resposta)

function gerarAleatorio(max,min){
    let valor = Math.floor(Math.random() * (max - min + 1) + min)

    return valor
}

gerar.addEventListener("click", ()=>{
    let num = parseInt(document.getElementById("num").value)

    for(let i = 0; i < num; i++){
        numArray[i] = gerarAleatorio(num,1)
    }

    res.innerHTML = `O Array = [ ${numArray} ]`
    res.style.fontSize = "1.5rem"
})

crescente.addEventListener("click", ()=>{
    let contador = 0
    let valor_atual = 0
    let menor = 0
    for(let i = 0; i < numArray.length; i++){
        menor = i
        for(let j = i+1; j < numArray.length; j++){
            if(numArray[j] < numArray[menor]){
                menor = j
            }
        }
        if(i != menor){
            valor_atual = numArray[i]
            numArray[i] = numArray[menor]
            console.log(numArray)
            console.log("------------------------------")
            numArray[menor] = valor_atual
            console.log(numArray)
            console.log("------------------------------")
            contador++
        }
    }

    console.log(contador)
    res.innerHTML = `O Array ordenado de forma crescente = [ ${numArray} ]`
    res.style.fontSize = "1.5rem"

})


decrescente.addEventListener("click", ()=>{
    let contador = 0
    let valor_atual = 0
    let maior = 0
    for(let i = 0; i < numArray.length; i++){
        maior = i
        for(let j = i+1; j < numArray.length; j++){
            if(numArray[j] > numArray[maior]){
                maior = j
            }
        }
        if(i != maior){
            valor_atual = numArray[i]
            numArray[i] = numArray[maior]
            console.log(numArray)
            console.log("------------------------------")
            numArray[maior] = valor_atual
            console.log(numArray)
            console.log("------------------------------")
            contador++
        }
    }

    console.log(contador)
    res.innerHTML = `O Array ordenado de forma decrescente = [ ${numArray} ]`
    res.style.fontSize = "1.5rem"

})
