# smart-eye-api-heroku


                                        
<br>


## 📑 Índice

- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Executar esse projeto no seu computador raspberry Pi 3](#-como-executar-esse-projeto-no-seu-raspberry-pi-3)
- [Como incluir o ngrok em seu projeto para gerar um dns fixo](#-como-incluir-o-ngrok-em-seu-projeto-para-gerar-um-dns-fixo)
- [Configurações automáticas](#-configurações-automáticas)
- [Sequência de execução dos scripts](#-sequência-de-execução-dos-scripts)
- [Referências](#-referências)
- [Autor](#-autor)


<br><br>


## 🚀 Tecnologias utilizadas

- Javascript
- MongoDB

<br><br>


## 📥 Porque houve a necessidade de criar uma api?

*Porque o projeto Smart-eye precisa se conectar com o Raspberry Pi 3, e ele está em um modem 4g , logo o ngrok sempre gera um dns diferente*

<br>

*Então com essa api , o Projeto Mobile aponta para o endereço da API , que por sua vez possui a url atual gerada pelo ngrok , assim o projeto mobile sempre conseguirá apontar para o raspberry , por mais que ele troque sua url , o banco de dados sempre conterá a url atual*



## 💡 Sobre o Projeto

<br>

**SMART EYE  _making your life easier._**

<br>

> É um projeto para monitoramento prático de ambientes com temperatura controlada.<br>

Este repositório não tem fins lucrativos , apenas refere-se a parte back-end da api do heroku , com propósito apenas de armazenar a url atual gerada pelo ngrok

<br><br>


## 📥 Como executar esse projeto em seu computador

- Clonar repositório `git clone https://github.com/wagnersk/smart-eye-api-heroku`

- Instalar dependências: `yarn`

- Rodar Aplicação: `yarn start`


## 📥 Porque a necessidade de usar um banco de dados NoSQL junto ao heroku?

- Porque o heroku quando não está ativo , em seu plano FREE , ele adormece , perdendo suas variáveis ativas , logo eu armazeno ele em um banco de dados , contornando essa situação 😎️.



## 📥 Como fazer deploy no heroku?


*Este projeto foi 100% baseado na técnica ensinada pela **rocketseat** *

<br>

<iframe width="560" height="315" src="https://www.youtube.com/embed/-j7vLmBMsEU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

<br>
*Você irá aprender como criar um banco de dados na núvem gratis e fazer deploy do seu back-end em um servidor também grátis*


## 📕 Referências


Video explicativo da rocketseat para fazer deploy com heroku e anexar um banco de dados 

[https://www.youtube.com/watch?v=-j7vLmBMsEU&t=1157s](https://www.youtube.com/watch?v=-j7vLmBMsEU&t=1157s)


Curso starter da Rocketseat se deu como base de conhecimentos para a construção da api em nodeJS:

[https://app.rocketseat.com.br/starter](https://app.rocketseat.com.br/starter)

<br>

## 😎️ Autor

[Wagner Sobreira](https://www.linkedin.com/in/wagner-sobreira-395b66167/)
