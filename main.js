const dadosAlexandre = [
    { produto: "Notebook", categoria: "Informática", quantidade: 10, preco: 3500 },
    { produto: "Mouse", categoria: "Acessórios", quantidade: 25, preco: 80 },
    { produto: "Monitor", categoria: "Informática", quantidade: 8, preco: 1200 },
    { produto: "Teclado", categoria: "Acessórios", quantidade: 15, preco: 150 },
    { produto: "Carregador", categoria: "Acessórios", quantidade: 67, preco: 40},
    { produto: "Headset", categoria: "Acessórios", quantidade: 12, preco: 150},
    { produto: "Microfone", categoria: "Acessórios", quantidade: 13, preco: 400},
    { produto: "Headphone", categoria: "Acessórios", quantidade: 15, preco: 45},
    { produto: "Prossesador", categoria: "Informática", quantidade:7, preco: 900},
    { produto: "GPU", categoria: "Informática", quantidade: 9, preco: 700}
]

const corpoTabela = document.getElementById("corpoTabela")

for (let item of dadosAlexandre){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${item.produto}</td>
        <td>${item.categoria}</td>
        <td>${item.quantidade}</td>
        <td class="preco">${item.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
}
