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
    for(let j = numArray.length - 1; j > 0; j--){
        for(let i = 0; i < numArray.length - 1; i++){
            if(numArray[i] > numArray[i+1]){
                valor_atual = numArray[i]
                numArray[i] = numArray[i+1]
                console.log(numArray)
                console.log("------------------------------")
                numArray[i+1] = valor_atual
                console.log(numArray)
                console.log("------------------------------")
                contador++
            }
        }
    } 

    console.log(contador)
    res.innerHTML = `O Array ordenado de forma crescente = [ ${numArray} ]`
    res.style.fontSize = "1.5rem"

})


decrescente.addEventListener("click", ()=>{
    let contador = 0
    let valor_atual = 0
    for(let j = numArray.length - 1; j > 0; j--){
        for(let i = 0; i < numArray.length - 1; i++){
            if(numArray[i] < numArray[i+1]){
                console.log(numArray)
                console.log("------------------------------")
                valor_atual = numArray[i]
                numArray[i] = numArray[i+1]
                console.log(numArray)
                console.log("------------------------------")
                numArray[i+1] = valor_atual
                console.log(numArray)
                console.log("------------------------------")
            }
            contador++
        }
    } 

    console.log(contador)
    res.innerHTML = `O Array ordenado de forma decrescente = [ ${numArray} ]`
    res.style.fontSize = "1.5rem"

})
