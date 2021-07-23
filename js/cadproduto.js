const tBody = document.getElementById('corpoTabela');

function salvarConteudoStorage() {
  let arraycadastro = [];

  if (localStorage.getItem('dados') != null) {
    arraycadastro = JSON.parse(localStorage.getItem('dados'));
  } else {
    arraycadastro;
  }

  
  var produto = document.getElementById("nameProduct").value;
  var preco = document.getElementById("price").value;
  var tamanho = document.getElementById("size").value;
  var descricao = document.getElementById("description").value;


  var info = {
    produto,
    preco,
    tamanho,
    descricao
  };

  arraycadastro.push(info);
  var infoJson = JSON.stringify(arraycadastro);
  localStorage.setItem("dados", infoJson);

  buscarConteudo();
}


function buscarConteudo() {
  const arr = JSON.parse(localStorage.getItem('dados'));

  if (arr != null) {
    let tr = '';
    arr.map(conteudo => {
      tr += `
			    <tr>
					<td>${conteudo.produto}</td>
					<td>${conteudo.preco}</td>
					<td>${conteudo.tamanho}</td>
					<td>${conteudo.descricao}</td>
				</tr>`

    })
    tBody.innerHTML = tr;
  }
}