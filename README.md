# Projeto de CRUD de Tarefas em Spring Boot

Este é um projeto de exemplo que implementa um CRUD (Create, Read, Update, Delete) de tarefas usando o framework Spring Boot. Ele permite que você gerencie uma lista de tarefas, incluindo informações como título, descrição, estado, data de criação, responsável e prioridade.

## Tecnologias utilizadas

- Java
- Spring Boot
- Thymeleaf
- Bootstrap
- MySQL

## Pré-requisitos

- Java 8 ou superior instalado
- MySQL instalado e configurado

## Instalação e configuração

1. Clone este repositório em sua máquina local:

   ```shell
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Importe o projeto em sua IDE preferida (por exemplo, IntelliJ IDEA, Eclipse).

3. Crie um banco de dados MySQL com o nome `crud_tasks` (ou outro nome de sua preferência).

4. Abra o arquivo `src/main/resources/application.properties` e atualize as configurações do banco de dados de acordo com sua instalação:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/crud_tasks?useSSL=false&serverTimezone=UTC
   spring.datasource.username=seu-usuario
   spring.datasource.password=sua-senha
   ```

   Certifique-se de substituir `seu-usuario` e `sua-senha` pelos seus dados de acesso ao MySQL.

5. Execute a aplicação. Isso irá inicializar o servidor embutido do Spring Boot.

6. Abra o navegador e acesse `http://localhost:8080` para visualizar a aplicação.

## Utilização

A aplicação exibe uma lista de tarefas na página inicial, onde você pode visualizar, adicionar, atualizar e excluir tarefas.

- Para adicionar uma nova tarefa, clique no botão "Nova Tarefa" e preencha os campos no formulário.

- Para atualizar uma tarefa existente, clique no botão "Editar" na linha correspondente à tarefa desejada e faça as alterações desejadas no formulário.

- Para excluir uma tarefa, clique no botão "Excluir" na linha correspondente à tarefa desejada.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema, bug ou tiver alguma melhoria para sugerir, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
