# SMART EYE - API Backend + MongoDB

*API hospedada no heroku desenvolvida em nodeJS e mongoDB*


                                        
<br>


## 📑 Índice

- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Porque houve a necessidade de criar uma api?](#-porque-houve-a-necessidade-de-criar-uma-api)
- [Porque a necessidade de usar um banco de dados NoSQL junto ao heroku?](#-porque-a-necessidade-de-usar-um-banco-de-dados-NoSQL-junto-ao-heroku)
- [Como executar esse projeto em seu computador](#-como-executar-esse-projeto-em-seu-computador)
- [Como fazer deploy no heroku?](#-como-fazer-deploy-no-heroku)
- [Referências](#-referências)
- [Autor](#-autor)


<br><br>


## 🚀 Tecnologias utilizadas

- Javascript
- MongoDB

<br><br>

## 💡 Sobre o Projeto

<br>

**SMART EYE  _making your life easier._**

<br>

> É um projeto para monitoramento prático de ambientes com temperatura controlada.<br>

> Este repositório não tem fins lucrativos , apenas refere-se a parte back-end da api do heroku , com propósito apenas de armazenar a url atual gerada pelo ngrok

<br><br>


## 📥 Por que houve a necessidade de criar uma api?

*Porque o projeto Smart-eye precisa se conectar com o Raspberry Pi 3,que por sua vez esta em um modem 4g (usb), logo o ngrok sempre irá gerar um dns diferente.
Então com essa api , o Projeto Mobile aponta este endereço hospedado no heroku (que nunca muda),que por sua vez possui a url atual gerada pelo ngrok, assim o projeto mobile sempre conseguirá apontar para o raspberry , por mais que ele troque sua url , o banco de dados sempre conterá a url atual*


<br><br>


## 📥 Por que a necessidade de usar um banco de dados NoSQL junto ao heroku?

<table>
  <tr>
    <td><img src="/image/stonks-meme.jpeg"/></td>
    
<td>Porque o heroku quando não está ativo , em seu plano FREE , ele adormece , perdendo os valores 
  das variáveis dessa forma eu armazeno ele em um banco de dados , contornando essa situação 😎️.</td> 
  </tr>
</table>

<br><br>

## 📥 Como executar esse projeto em seu computador

- Clonar repositório `git clone https://github.com/wagnersk/smart-eye-api-heroku`

- Instalar dependências: `yarn`

- Rodar Aplicação: `yarn start`

<br><br>


## 📥 Como fazer deploy no heroku?


*Este projeto foi 100% baseado na técnica ensinada pela **rocketseat** *

<br>

[![Watch the video](https://github.com/wagnersk/smart-eye-api-heroku/blob/master/image/youtubeloading.jpeg)](https://www.youtube.com/watch?v=-j7vLmBMsEU)

<br>
*Você irá aprender como criar um banco de dados na núvem gratis e fazer deploy do seu back-end em um servidor também grátis*

<br><br>


## 📕 Referências


Video explicativo da rocketseat para fazer deploy com heroku e anexar um banco de dados 

[https://www.youtube.com/watch?v=-j7vLmBMsEU&t=1157s](https://www.youtube.com/watch?v=-j7vLmBMsEU&t=1157s)


Curso starter da Rocketseat se deu como base de conhecimentos para a construção da api em nodeJS:

[https://app.rocketseat.com.br/starter](https://app.rocketseat.com.br/starter)

<br>

## 😎️ Autor

[Wagner Sobreira](https://www.linkedin.com/in/wagner-sobreira-395b66167/)
