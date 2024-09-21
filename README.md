Briefing: Tradutor de Código Morse com Funcionalidades Adicionais
1. Introdução:
Este documento apresenta um Tradutor de Código Morse desenvolvido com HTML, CSS e JavaScript. O programa não apenas traduz texto para código Morse e vice-versa, mas também inclui funcionalidades extras, como tradução via tecla "Enter", salvamento de código Morse (com opção de criptografia básica) e interface amigável.
2. Estrutura do Programa:
O projeto é dividido em três arquivos principais:
index.html (HTML): Define a estrutura da página, incluindo os campos de entrada para texto e código Morse, botões de tradução, área de saída, elementos para salvamento e senha, e a importação dos arquivos CSS e JavaScript.
style.css (CSS): Define toda a aparência visual da página, incluindo cores, fontes, espaçamentos, estilos de botões e muito mais, seguindo um design moderno e profissional.
script.js (JavaScript): Contém toda a lógica do programa, como:
Dicionário de Código Morse: Um objeto que mapeia caracteres alfanuméricos e símbolos para seus equivalentes em código Morse.
Funções de Tradução: traduzirParaMorse() e traduzirParaTexto() convertem o texto de entrada em código Morse e vice-versa, manipulando strings e utilizando o dicionário.
Funcionalidade da Tecla "Enter": handleKeyDown(event, tipo) permite que o usuário pressione "Enter" nos campos de entrada para acionar a tradução.
Atualização de Estatísticas: Exibe o número de palavras e caracteres digitados nos campos de entrada em tempo real.
Limpeza da Saída: Limpa a área de saída quando os campos de entrada são apagados.
Funcionalidade de Salvar:
exibirOpcoesSaida(): Exibe os botões "Salvar" e o campo de senha após a tradução.
salvarCodigoMorse():
Obtém o código Morse traduzido.
Se uma senha for fornecida, realiza uma criptografia básica usando btoa() (Nota: Deve ser substituída por um método de criptografia mais robusto em cenários reais).
Cria um link de download temporário e simula um clique para baixar o código Morse como um arquivo .txt.
3. Funcionamento Detalhado:
3.1. Tradução:
O usuário digita o texto ou o código Morse no campo apropriado.
Ao clicar no botão de tradução correspondente ou pressionar "Enter", a função JavaScript apropriada é chamada:
traduzirParaMorse(): Percorre o texto de entrada caractere por caractere, consulta o dicionário e concatena o código Morse equivalente na variável de saída. Espaços entre palavras são tratados especialmente.
traduzirParaTexto(): Divide o código Morse de entrada em palavras e letras (usando espaços e /), consulta o dicionário para encontrar a correspondência de cada letra em código Morse e concatena as letras para formar a saída.
A tradução resultante é exibida na área de saída (<p id="saida">).
3.2. Funcionalidades Adicionais:
Tecla "Enter": A função handleKeyDown() escuta o evento keydown nos campos de entrada. Se a tecla pressionada for "Enter", ela chama a função de tradução apropriada, evitando a quebra de linha padrão do textarea.
Limpar Saída: Eventos de input nos campos de entrada verificam se o conteúdo está vazio. Se estiver, a saída e as opções de salvamento são limpas.
Salvar Código Morse:
Após a tradução, o botão "Salvar" e o campo de senha são exibidos.
O usuário pode inserir uma senha (opcional) para criptografar o código.
Ao clicar em "Salvar", o código Morse (criptografado, se uma senha for fornecida) é preparado para download como um arquivo .txt.
4. Design e Usabilidade:
A interface segue um design moderno e profissional, utilizando uma paleta de cores escuras, a fonte Roboto e ícones do Font Awesome.
A página é responsiva, adaptando-se a diferentes tamanhos de tela.
A inclusão de contadores de palavras/caracteres e a limpeza automática da saída melhoram a experiência do usuário.
5. Melhorias Futuras:
Criptografia Robusta: Substituir btoa() por uma biblioteca de criptografia mais forte para proteger senhas em cenários do mundo real.
Validação de Entrada: Implementar validação para garantir que o usuário insira apenas caracteres válidos nos campos de entrada.
Opções de Compartilhamento: Adicionar funcionalidades para compartilhar o código Morse traduzido (por exemplo, copiar para a área de transferência, compartilhar em redes sociais).
Funcionalidades de Áudio: Implementar a reprodução sonora do código Morse traduzido.
6. Conclusão:
Este Tradutor de Código Morse oferece uma solução completa e fácil de usar para traduzir texto para código Morse e vice-versa, além de fornecer funcionalidades extras valiosas, como salvamento com senha e uma interface amigável. Com as melhorias futuras sugeridas, este programa pode se tornar uma ferramenta ainda mais poderosa e versátil.
**Obs: Este foi feito por um estudante de Engenharia de Software - Foi utilizado o Google AI Studio para melhor desenvolvimento, capacitação e conclusão do projeto**
