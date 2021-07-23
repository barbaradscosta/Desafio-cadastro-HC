const tBody = document.getElementById('corpoTabela');

function salvarConteudoStorage() {
  let arraycadastro = [];

  if (localStorage.getItem('dados') != null) {
    arraycadastro = JSON.parse(localStorage.getItem('dados'));
  } else {
    arraycadastro;
  }

  
  var nome = document.getElementById("name").value;
  var nascimento = document.getElementById("nascimento").value;
  var celular = document.getElementById("cel").value;
  var email = document.getElementById("email").value;
  var endereco = document.getElementById("adress").value;
  var cpf = document.getElementById("cpf").value;
  var cidade = document.getElementById("city").value;


  var info = {
    nome,
    nascimento,
    celular,
    email,
    endereco,
    cpf,
    cidade
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
					<td>${conteudo.nome}</td>
					<td>${conteudo.nascimento}</td>
					<td>${conteudo.celular}</td>
					<td>${conteudo.email}</td>
                    <td>${conteudo.endereco}</td>
                    <td>${conteudo.cpf}</td>
                    <td>${conteudo.cidade}</td>
				</tr>`

    })
    tBody.innerHTML = tr;
  }
}