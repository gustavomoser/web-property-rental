# web-property-rental ![GitHub](https://img.shields.io/github/license/gustavomoser/web-property-rental)
Trabalho desenvolvido para a disciplina INE5646 - Programação para Web - UFSC

## Definição
Neste trabalho, o grupo deverá implementar uma aplicação Web utilizando os principais conceitos e técnicas trabalhadas na disciplina. A aplicação deve ser apresentada para os pontos de vista do usuário e do desenvolvedor. A aplicação deverá estar disponível em um servidor.

## Aplicação a ser desenvolvida
Desenvolver uma aplicação web para uma imobiliária fictícia que administra imóveis para aluguel. Deve permitir o uso dos seguintes tipos de usuário:
* Corretor da imobiliária;
* Possível inquilino (pessoa que pretende alugar um imóvel);

## Corretor
O corretor deve ser capaz de:
1. Fazer seu primeiro acesso ao sistema e trocar a senha inicial por uma criada por ele mesmo.
2. Alterar a sua senha sempre que desejar.
3. Cadastrar um imóvel. Para cada imóvel deverão ser cadastrados:
    * Número de inscrição na prefeitura (fictício);
    * Imagem do imóvel;
    * Endereço;
    * Tipo (casa ou apartamento);
    * Número de dormitórios;
    * Número de banheiros;
    * Número de vagas na garagem;
    * Valor do aluguel;
4. Alterar a situação de um imóvel para:
    * Disponível;
    * Reservado (quando um corretor vai apresentar o imóvel para um possível inquilino;
    * Alugado;
    * Indisponível;
5. Atender os interesses de um possível inquilino.

## Possível inquilino
Um possível inquilono deve ser capaz de:
1. Pesquisar, utilizando critários diversos, por imóveis disponíveis (que estejam livres ou reservados).
2. Manifestar interesse em até 3 imóveis. A pessoa informa, além dos imóveis, nome e número de celular.

## Requisitos não funcionais
A aplicação deve atender os seguintes requisitos:
1. Corretores só acessam a aplicação mediante login (autenticação).
2. Todos os dados devem ser armazenados em banco de dados.
