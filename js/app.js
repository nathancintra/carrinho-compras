function adicionar(){
    //recupera valor, quantidade e nome
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('$')[1];
    let quantidade = document.getElementById('quantidade');
    //calculo do subtotal
    let preco = parseInt(quantidade.value * valorUnitario);
    //adicionar ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade.value}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`
}

function limpar(){

}