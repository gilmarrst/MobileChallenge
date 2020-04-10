#Author: gilmarrodriguesst@gmail.com
@MobileChallenge
Feature: Realizar cadastro, alteração e exclusão de um produto

  Background: Acessar a Aplicação
    Given abro o aplicado Product Registration

  Scenario: Cadastrar um novo produto
    Given aceito as permissões solicitada pelo aplicativo
    And clico no botão NEW
    When preencho o code "1234"
    And preencho a Description "Suco de Fruta"
    And preencho o Packing "Caixa"
    And preencho o Amount "200"
    And preencho o Unit value "2.00"
    And preencho o Lot "45"
    Then clico no botão salvar

  Scenario: Validar dados do produto cadastrado
    When o quadro do produto estiver sendo exibido
    Then valido o label Code
    And valido o label Descripton
    And valido o label Packing
    And valida o lavel Amount
    And valido o label Unit value
    And valido o label Lot

  Scenario: Alterar o produto cadastrado
    Given clico no botão EDIT
    When preencho o code "456"
    And preencho a Description "Camisas"
    And preencho o Packing "Pacote"
    And preencho o Amount "50"
    And preencho o Unit value "25.00"
    And preencho o Lot "50"
    Then clico no botão salvar
    When o quadro do produto estiver sendo exibido
    Then valido o label Code
    And valido o label Descripton
    And valido o label Packing
    And valida o lavel Amount
    And valido o label Unit value
    And valido o label Lot

  Scenario: Excluir o produto cadastrado
    When clico no botão DELETE
    Then confirmo a exclusão do produto
    And valido a exclusão do produto
