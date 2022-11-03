# Clean Code e Clean Architecture | Rodrigo Branas - Turma 8
# Aula 01

Nesta aula foram abordados e praticados os seguintes temas:

- Clean code
- Refactoring
- Code smells
- Introdução a design de código com Orientação a Objetos

## Code smells abordados

1 - nome estranho

renomear variável, método, função, classe, arquivo

2 - linhas em branco

apagar linha em branco
extrair método

3 - comentários

introduz variável explicativa
extrair método
apagar comentário

4 - código morto

apagar código

5 - condições confusas e aninhadas

inverter as condições ou introduzir cláusulas guarda
consolidar condições
introduzir ternário
extrair condição

6 - números mágicos

extrair constantes explicativas

7 - tratamento inadequado de exceptions

introduzir tratamento de exceptions

8 - excesso de parâmetros

introduzir instâncias

9 - métodos grandes

extrair método

10 - classes grandes

extrair classe

## Código

Foram criadas 3 versões de um calculador de valor de corridas para entregas, sendo a primeira versão um código a ser refatorado.

A segunda versão é a refatorção do código aplicando boas práticas.

Já na terceira versão foi feita a refatoração do código da versão 2 aplicando orientação a objetos.

Vale ressaltar que em todas as versões foram aplicados testes, chegando a 100% de code coverage.