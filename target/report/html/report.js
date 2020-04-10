$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ProdutoRegistrationCrud.feature");
formatter.feature({
  "name": "Realizar cadastro, alteração e exclusão de um produto",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@MobileChallenge"
    }
  ]
});
formatter.background({
  "name": "Acessar a Aplicação",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "abro o aplicado Product Registration",
  "keyword": "Given "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.ComumSteps.\u003cinit\u003e(ComumSteps.java:16)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Cadastrar um novo produto",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MobileChallenge"
    }
  ]
});
formatter.step({
  "name": "aceito as permissões solicitada pelo aplicativo",
  "keyword": "Given "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.ComumSteps.\u003cinit\u003e(ComumSteps.java:28)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botão NEW",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.HomeSteps.\u003cinit\u003e(HomeSteps.java:13)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o code \"1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.CadastroDeProdutoSteps.\u003cinit\u003e(CadastroDeProdutoSteps.java:14)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a Description \"Suco de Fruta\"",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.CadastroDeProdutoSteps.\u003cinit\u003e(CadastroDeProdutoSteps.java:21)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o Packing \"Caixa\"",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.CadastroDeProdutoSteps.\u003cinit\u003e(CadastroDeProdutoSteps.java:26)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o Amount \"200\"",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.CadastroDeProdutoSteps.\u003cinit\u003e(CadastroDeProdutoSteps.java:31)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o Unit value \"2.00\"",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.CadastroDeProdutoSteps.\u003cinit\u003e(CadastroDeProdutoSteps.java:37)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o Lot \"45\"",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.CadastroDeProdutoSteps.\u003cinit\u003e(CadastroDeProdutoSteps.java:42)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botão salvar",
  "keyword": "Then "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.CadastroDeProdutoSteps.\u003cinit\u003e(CadastroDeProdutoSteps.java:47)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Acessar a Aplicação",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "abro o aplicado Product Registration",
  "keyword": "Given "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.ComumSteps.\u003cinit\u003e(ComumSteps.java:16)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar dados do produto cadastrado",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MobileChallenge"
    }
  ]
});
formatter.step({
  "name": "o quadro do produto estiver sendo exibido",
  "keyword": "When "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.HomeSteps.\u003cinit\u003e(HomeSteps.java:38)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o label Code",
  "keyword": "Then "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.HomeSteps.\u003cinit\u003e(HomeSteps.java:42)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o label Descripton",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.HomeSteps.\u003cinit\u003e(HomeSteps.java:46)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o label Packing",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.HomeSteps.\u003cinit\u003e(HomeSteps.java:50)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valida o lavel Amount",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.HomeSteps.\u003cinit\u003e(HomeSteps.java:54)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o label Unit value",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.HomeSteps.\u003cinit\u003e(HomeSteps.java:58)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o label Lot",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.HomeSteps.\u003cinit\u003e(HomeSteps.java:62)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Acessar a Aplicação",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "abro o aplicado Product Registration",
  "keyword": "Given "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.ComumSteps.\u003cinit\u003e(ComumSteps.java:16)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Alterar o produto cadastrado",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MobileChallenge"
    }
  ]
});
formatter.step({
  "name": "clico no botão EDIT",
  "keyword": "Given "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.HomeSteps.\u003cinit\u003e(HomeSteps.java:18)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o code \"456\"",
  "keyword": "When "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.CadastroDeProdutoSteps.\u003cinit\u003e(CadastroDeProdutoSteps.java:14)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho a Description \"Camisas\"",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.CadastroDeProdutoSteps.\u003cinit\u003e(CadastroDeProdutoSteps.java:21)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o Packing \"Pacote\"",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.CadastroDeProdutoSteps.\u003cinit\u003e(CadastroDeProdutoSteps.java:26)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o Amount \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.CadastroDeProdutoSteps.\u003cinit\u003e(CadastroDeProdutoSteps.java:31)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o Unit value \"25.00\"",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.CadastroDeProdutoSteps.\u003cinit\u003e(CadastroDeProdutoSteps.java:37)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o Lot \"50\"",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.CadastroDeProdutoSteps.\u003cinit\u003e(CadastroDeProdutoSteps.java:42)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botão salvar",
  "keyword": "Then "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.CadastroDeProdutoSteps.\u003cinit\u003e(CadastroDeProdutoSteps.java:47)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o quadro do produto estiver sendo exibido",
  "keyword": "When "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.HomeSteps.\u003cinit\u003e(HomeSteps.java:38)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o label Code",
  "keyword": "Then "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.HomeSteps.\u003cinit\u003e(HomeSteps.java:42)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o label Descripton",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.HomeSteps.\u003cinit\u003e(HomeSteps.java:46)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o label Packing",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.HomeSteps.\u003cinit\u003e(HomeSteps.java:50)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valida o lavel Amount",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.HomeSteps.\u003cinit\u003e(HomeSteps.java:54)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o label Unit value",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.HomeSteps.\u003cinit\u003e(HomeSteps.java:58)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o label Lot",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.HomeSteps.\u003cinit\u003e(HomeSteps.java:62)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Acessar a Aplicação",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "abro o aplicado Product Registration",
  "keyword": "Given "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.ComumSteps.\u003cinit\u003e(ComumSteps.java:16)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Excluir o produto cadastrado",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MobileChallenge"
    }
  ]
});
formatter.step({
  "name": "clico no botão DELETE",
  "keyword": "When "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.HomeSteps.\u003cinit\u003e(HomeSteps.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirmo a exclusão do produto",
  "keyword": "Then "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.HomeSteps.\u003cinit\u003e(HomeSteps.java:28)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a exclusão do produto",
  "keyword": "And "
});
formatter.match({
  "location": "br.com.MobileProductChallenge.steps.HomeSteps.\u003cinit\u003e(HomeSteps.java:33)"
});
formatter.result({
  "status": "passed"
});
});