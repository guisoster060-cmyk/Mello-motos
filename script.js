let motoSelecionada = null;

function renderizarMotos() {
  const grid = document.getElementById('motosGrid');
  
  grid.innerHTML = motos.map((moto, index) => `
    <div class="card-moto">
      <div class="card-moto-imagem" style="background-image: url('${moto.imagem}');">
        <img src="${moto.imagem}" alt="${moto.nome}" />
      </div>
      <div class="card-moto-info">
        <div class="card-moto-nome">${moto.nome}</div>
        <div class="card-moto-tipo">${moto.tipo}</div>
        <div class="card-moto-detalhes">
          <strong>Ano:</strong> ${moto.ano} | <strong>Km:</strong> ${moto.km}
        </div>
        <div class="card-moto-preco">${moto.preco}</div>
        <div class="card-moto-descricao">${moto.descricao}</div>
        <div class="card-moto-botoes">
          <button class="btn-detalhes" onclick="abrirModal(${index})">💬 Falar com vendedor</button>
        </div>
      </div>
    </div>
  `).join('');
}

function abrirModal(index) {
  motoSelecionada = motos[index];
  document.getElementById('modalImagem').src = motoSelecionada.imagem;
  document.getElementById('modalNome').textContent = motoSelecionada.nome;
  document.getElementById('modalTipo').textContent = `${motoSelecionada.tipo} • ${motoSelecionada.ano}`;
  
  const specs = `
    <div class="spec-item">
      <span class="spec-label">Ano</span>
      <span class="spec-value">${motoSelecionada.ano}</span>
    </div>
    <div class="spec-item">
      <span class="spec-label">Quilometragem</span>
      <span class="spec-value">${motoSelecionada.km}</span>
    </div>
    <div class="spec-item">
      <span class="spec-label">Tipo</span>
      <span class="spec-value">${motoSelecionada.tipo}</span>
    </div>
    <div class="spec-item">
      <span class="spec-label">Preço</span>
      <span class="spec-value">${motoSelecionada.preco}</span>
    </div>
  `;
  
  document.getElementById('modalSpecs').innerHTML = specs;
  document.getElementById('modalDescricao').textContent = motoSelecionada.descricao;
  document.getElementById('modal').classList.add('ativo');
}

function fecharModal() {
  document.getElementById('modal').classList.remove('ativo');
}

function enviarWhatsApp() {
  const mensagem = `Olá! Vi a moto *${motoSelecionada.nome}* (${motoSelecionada.ano}) no estoque da Mello Motos no valor de ${motoSelecionada.preco}. Gostaria de mais informações e de agendar para ver pessoalmente. Qual o melhor horário?`;
  const urlWhatsApp = `https://wa.me/5554992354040?text=${encodeURIComponent(mensagem)}`;
  window.open(urlWhatsApp, '_blank');
}

// Fechar modal ao clicar fora
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') fecharModal();
  });

  // Renderizar motos ao carregar
  renderizarMotos();
});

// Fechar modal ao pressionar ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') fecharModal();
});
