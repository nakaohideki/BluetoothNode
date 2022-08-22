# BluetoothNode
Esse projeto é uma iniciativa do uso do Node.js para permitir o usuário localizar e parear equipamentos com interface Bluetooth.

Temos como objetivo utilizar uma biblioteca capaz de interagir com o interface bluetooth do computador onde essa aplicação estiver instalada.

Premissas desse projeto:

- Código escrito em JavaScriptBackend / Servidor deve ser um .exe a ser executado sem a menor necessidade de instalação na máquina do usuário
- Acesso a aplicação é via Web usando o browser de sua preferência usando o endereço https://localhost:1711
- IDE de desenvolvimento VS CodeTodo comentário / documentação em inglêsA aplicação deve usar uma biblioteca de acesso a interface de bluetooth do computador que pode ser listadas aqui:https://openbase.com/categories/js/best-javascript-bluetooth-librarie
- A aplicação deve ser capaz de reconhecer os dispositivos bluetooth que estão nas proximidades, e mostrar na tela de maneira gráfica quais são bicos de bomba de combustível e e quais são estações centrais. As centrais ficam na esquerda e os bicos a direita. Ligar um bico a centrais por meio de um clique no bico e outro na central. Apresentar uma tela de confirmação e a partir daí uma linha é apresentada entre o bico e a central.
- Como se reconhece o que é bico e o que é central, por meio da descrição bluetooth do dispositivo  que cada um emitirá enquanto ligado.
- Uma vez que é configurado, ligado os bicos as centrais, um comando via bluetooth (a ser combinado) pode ser enviado via para a central para configura-la com todo os bicos que a ela pertence. Quando houver uma central já configura e a aplicação for iniciada, essa deve mostrar de que forma está configurada. Um comando é enviado a central que solicitando saber se há ou não bicos configurados e quais são. E o desenho deve ser montado automaticamente.
- Se passar o mouse em cima do bico ou central os dados do mesmo é apresentado como uma caixa de texto flutuante.
- Segue um pequeno exemplo de tela [Diagram](https://github.com/nakaohideki/BluetoothNode.git/docs/UI-diagram-javascript.png)

Obs.: As caixas de texto só aparecem quando se passa o mouse sobre cada figura. Toda essa tela em javascript.
