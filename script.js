const app = document.getElementById('app');

function carregarTelaLogin() {
  app.innerHTML = `
    <div class="tela-login">
      <h1>Bem-vindo ao Valadão Rides</h1>
      <p>Solicite corridas de forma fácil e segura</p>
      <input type="tel" placeholder="Digite seu número de telefone" />
      <button onclick="carregarTelaSolicitacao()">Continuar</button>
    </div>
  `;
}

function carregarTelaSolicitacao() {
  app.innerHTML = `
    <div class="tela-solicitacao">
      <h2>Solicitar Corrida</h2>
      <div class="mapa-container">
        <iframe id="mapa" class="mapa" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
          src="https://www.openstreetmap.org/export/embed.html?bbox=-46.6688,-23.5630,-46.6378,-23.5380&amp;layer=mapnik&amp;marker=-23.5505,-46.6333">
        </iframe>
        <div class="mapa-overlay">
          <div class="marcador origem"></div>
          <div class="marcador destino"></div>
          <div class="rota-animada"></div>
        </div>
      </div>
      <div class="info">
        <p>Origem: <strong>Minha localização atual</strong></p>
        <p>Destino: <strong>Avenida Central, 456</strong></p>
        <button onclick="carregarTelaEmAndamento()">Confirmar Corrida</button>
      </div>
    </div>
  `;
}

function carregarTelaEmAndamento() {
  app.innerHTML = `
    <div class="tela-andamento">
      <h2>Corrida em andamento</h2>
      <div class="mapa-container">
        <iframe id="mapa" class="mapa" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
          src="https://www.openstreetmap.org/export/embed.html?bbox=-46.6688,-23.5630,-46.6378,-23.5380&amp;layer=mapnik&amp;marker=-23.5505,-46.6333">
        </iframe>
        <div class="mapa-overlay">
          <div class="marcador origem"></div>
          <div class="marcador destino"></div>
          <div class="rota-animada"></div>
          <div class="carro-marcador">
            <div class="carro"></div>
          </div>
        </div>
      </div>
      <div class="info">
        <p>Motorista: <strong>João Pereira</strong></p>
        <p>Veículo: <strong>Fiat Cronos - ABC1234</strong></p>
        <p>Chegada em: <strong>2 minutos</strong></p>
        <button onclick="carregarTelaFinal()">Cheguei ao destino</button>
      </div>
    </div>
  `;
  animarCarro();
}

function carregarTelaFinal() {
  app.innerHTML = `
    <div class="tela-final">
      <h2>Corrida finalizada</h2>
      <p>Valor total: <strong>R$ 45,00</strong></p>
      <div class="botoes">
        <button onclick="pagar('pix')" class="pix">Pagar com Pix</button>
        <button onclick="pagar('cartao')" class="cartao">Pagar com Cartão</button>
      </div>
      <div id="mensagem" class="mensagem"></div>
      <button onclick="carregarTelaLogin()" style="margin-top: 20px;">Solicitar nova corrida</button>
    </div>
  `;
}

function animarCarro() {
  const carroMarcador = document.querySelector('.carro-marcador');
  if (carroMarcador) {
    let position = 0;
    const animation = setInterval(() => {
      position += 1;
      carroMarcador.style.left = `${position}%`;
      
      if (position < 30) {
        carroMarcador.style.transform = 'translate(-50%, -50%) rotate(10deg)';
      } else if (position < 70) {
        carroMarcador.style.transform = 'translate(-50%, -50%) rotate(-5deg)';
      } else {
        carroMarcador.style.transform = 'translate(-50%, -50%) rotate(15deg)';
      }
      
      if (position >= 100) {
        clearInterval(animation);
      }
    }, 50);
  }
}

function pagar(metodo) {
  const mensagem = document.getElementById("mensagem");

  if (metodo === "pix") {
    mensagem.innerHTML = "✅ Pagamento com Pix realizado com sucesso!";
  } else if (metodo === "cartao") {
    mensagem.innerHTML = "✅ Pagamento com Cartão processado com sucesso!";
  }
}

// Inicializa o app
carregarTelaLogin();
