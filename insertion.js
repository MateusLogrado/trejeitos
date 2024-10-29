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
    for(let i = 1; i < numArray.length; i++){
        let j = i - 1
        valor_atual =  numArray[i]
        while(j >= 0 && valor_atual < numArray[j]){
            console.log(numArray)
                numArray[j+1]  = numArray[j]
                console.log(numArray)
                j--
                contador++
        }
        numArray[j+1] = valor_atual
        console.log(numArray)
    }
    console.log(contador)
    res.innerHTML = `O Array ordenado de forma crescente = [ ${numArray} ]`
    res.style.fontSize = "1.5rem"

})


    decrescente.addEventListener("click", ()=>{
        let contador = 0
        let valor_atual = 0
        for(let i = 1; i < numArray.length; i++){
            let j = i - 1
            valor_atual =  numArray[i]
            while(j >= 0 && valor_atual > numArray[j]){
                console.log(numArray)
                console.log("------------------------------")
                    numArray[j+1]  = numArray[j]
                    console.log(numArray)
                    console.log("------------------------------")
                    j--
                    contador++
            }

            console.log(contador)
            numArray[j+1] = valor_atual
            console.log(numArray)
            console.log("------------------------------")
        }

        res.innerHTML = `O Array ordenado de forma decrescente = [ ${numArray} ]`
        res.style.fontSize = "1.5rem"

    })
