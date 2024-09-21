const textoEntrada = document.getElementById('textoEntrada');
const morseEntrada = document.getElementById('morseEntrada');
const saidaDiv = document.getElementById('saida');
const btnSalvar = document.getElementById('btnSalvar');
const senhaOpcoes = document.getElementById('senhaOpcoes');

const codigoMorseDicionario = {
  'A': '.-',
  'B': '-...',
  'C': '-.-.',
  'D': '-..',
  'E': '.',
  'F': '..-.',
  'G': '--.',
  'H': '....',
  'I': '..',
  'J': '.---',
  'K': '-.-',
  'L': '.-..',
  'M': '--',
  'N': '-.',
  'O': '---',
  'P': '.--.',
  'Q': '--.-',
  'R': '.-.',
  'S': '...',
  'T': '-',
  'U': '..-',
  'V': '...-',
  'W': '.--',
  'X': '-..-',
  'Y': '-.--',
  'Z': '--..',
  '0': '-----',
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  '.': '.-.-.-',
  ',': '--..--',
  '?': '..--..',
  '\'': '.----.',
  '!': '-.-.--',
  '/': '-..-.',
  '(': '-.--.',
  ')': '-.--.-)',
  '&': '.-...',
  ':': '---...',
  ';': '-.-.-.',
  '=': '-...-',
  '+': '.-.-.',
  '-': '-....-',
  '_': '..--.-',
  '"': '.-..-.',
  '$': '...-..-',
  '@': '.--.-.',
  ' ': ' '
};

function traduzirParaMorse() {
  const texto = textoEntrada.value.toUpperCase();
  let codigoMorse = '';

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] != ' ') {
      codigoMorse += codigoMorseDicionario[texto[i]] + ' ';
    } else {
      codigoMorse += ' / '; 
    }
  }
  saidaDiv.innerText = codigoMorse;
  exibirOpcoesSaida();
}

function traduzirParaTexto() {
  const codigoMorse = morseEntrada.value.trim();
  let texto = '';
  const palavrasMorse = codigoMorse.split(' / ');

  for (let i = 0; i < palavrasMorse.length; i++) {
    const letrasMorse = palavrasMorse[i].split(' ');
    for (let j = 0; j < letrasMorse.length; j++) {
      for (const chave in codigoMorseDicionario) {
        if (codigoMorseDicionario[chave] === letrasMorse[j]) {
          texto += chave;
        }
      }
    }
    texto += ' ';
  }
  saidaDiv.innerText = texto;

  textoEntrada.addEventListener('input', () => {
    const texto = textoEntrada.value;
    const numPalavras = texto.trim() === '' ? 0 : texto.trim().split(/\s+/).length;
    document.getElementById('textoStats').textContent = `${numPalavras} palavras`;
  });
  
  morseEntrada.addEventListener('input', () => {
    const codigoMorse = morseEntrada.value;
    const numCaracteres = codigoMorse.length;
    document.getElementById('morseStats').textContent = `${numCaracteres} caracteres`;
  });
  exibirOpcoesSaida();
}

function handleKeyDown(event, tipo) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Impede quebra de linha indesejada no textarea
    if (tipo === 'texto') {
      traduzirParaMorse(); 
    } else if (tipo === 'morse') {
      traduzirParaTexto();
    }
  }
}

function exibirOpcoesSaida() {
  btnSalvar.style.display = 'block';
  senhaOpcoes.style.display = 'block';
}

function salvarCodigoMorse() {
  const codigoMorse = saidaDiv.innerText;
  const senha = document.getElementById('senha').value;

  let codigoParaSalvar = codigoMorse;

  if (senha) {
    codigoParaSalvar = btoa(codigoMorse + senha); 
  }


  const elementoLink = document.createElement('a');
  const blob = new Blob([codigoParaSalvar], { type: 'text/plain' });
  elementoLink.href = URL.createObjectURL(blob);
  elementoLink.download = 'codigo_morse.txt';
  elementoLink.click();
}

textoEntrada.addEventListener('input', () => {
  if (textoEntrada.value === '') {
    saidaDiv.innerText = '';
    btnSalvar.style.display = 'none';
    senhaOpcoes.style.display = 'none';
  }
  const texto = textoEntrada.value;
  const numPalavras = texto.trim() === '' ? 0 : texto.trim().split(/\s+/).length;
  document.getElementById('textoStats').textContent = `${numPalavras} palavras`;
});

morseEntrada.addEventListener('input', () => {
  if (morseEntrada.value === '') {
    saidaDiv.innerText = '';
    btnSalvar.style.display = 'none';
    senhaOpcoes.style.display = 'none';
  }
  const codigoMorse = morseEntrada.value;
  const numCaracteres = codigoMorse.length;
  document.getElementById('morseStats').textContent = `${numCaracteres} caracteres`;
});