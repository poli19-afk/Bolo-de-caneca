const receita = {
    ingredientes: [
        "1 colher de sopa de farinha de trigo",
        "1 colher de sopa de achocolatado em pó",
        "1 colher de sopa de açúcar",
        "1 colher de sopa de óleo",
        "1/4 de xícara de leite",
        "1/4 de colher de chá de fermento em pó"
    ],
    preparo: [
        "Em uma caneca, misture todos os ingredientes secos (farinha, achocolatado, açúcar e fermento).",
        "Adicione o óleo e o leite e mexa até que a massa fique homogênea.",
        "Leve a caneca ao micro-ondas por cerca de 1 a 2 minutos em potência alta, ou até que o bolo cresça e fique firme.",
        "Deixe esfriar um pouco e está pronto para servir!"
    ]
};

// Preenchendo os ingredientes na página
const ingredientesList = document.getElementById("ingredientes");
receita.ingredientes.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ingredientesList.appendChild(li);
});

// Preenchendo o modo de preparo na página
const preparoList = document.getElementById("preparo");
receita.preparo.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    preparoList.appendChild(li);
});
