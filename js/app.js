let totalCarrinho = 0;
limpar();

function adicionar(){
    //recupera valor, quantidade e nome
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //calculo do subtotal
    let preco = parseInt(quantidade * valorUnitario);
    //adicionar ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`
    //calculo do total do carrinho
    totalCarrinho = totalCarrinho + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalCarrinho}`;
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    totalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';

}