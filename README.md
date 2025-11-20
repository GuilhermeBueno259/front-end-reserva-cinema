# ReservaCinema

## Requisitos para rodar a aplicação
 - A aplicação Back End deve estar rodando
 - Node versão 24.9.0
 - Git versão 2.44.0

## Como rodar a aplicação
 - Abra um novo terminal
 - Rode dentro do novo terminal o comando ``` git clone https://github.com/GuilhermeBueno259/front-end-reserva-cinema.git ```
 - Após isso rode o comando ``` cd front-end-reserva-cinema ``` para entrar no diretório da aplicação
 - Estando dentro do diretório da aplicação rode o comando ``` npm install ```, o qual irá realizar a instalação dos pacotes Node.js requeridos pela aplicação
 - Certifique-se de que a aplicação Back End esteja rodando, pois sem ela a aplicação Front End não funcionará adequadamente, e também verifique se o campo ``` apiUrl ``` dentro do arquivo ``` src/environments/environment.ts ``` contém a mesma URL em que está rodando a aplicação Back End, caso não seja a mesma URL altere para a da aplicação Back End
 - Assim que a instalação dos pacotes Node.js terminar rode o comando ``` npm run start ```, esse comando iniciará um servidor local que estará rodando a aplicação, caso a porta 4200 já esteja sendo utilizada por outra aplicação você terá que encerrar a aplicação que atualmente está utilizando a porta 4200, ou optar por utilizar outra porta
