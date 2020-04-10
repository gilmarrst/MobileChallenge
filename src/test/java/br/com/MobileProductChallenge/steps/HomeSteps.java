package br.com.MobileProductChallenge.steps;

import br.com.MobileProductChallenge.mobileInteractions.MobileInteractions;
import br.com.MobileProductChallenge.page.HomePage;
import br.com.MobileProductChallenge.tdm.Produto;
import io.cucumber.java8.En;

public class HomeSteps implements En {

	public HomeSteps() {
		MobileInteractions m = new MobileInteractions();

		Given("clico no botão NEW", () -> {
			m.esperarElementoEstarVisivel(HomePage.BTN_NEW, 10);
			m.clicar(HomePage.BTN_NEW);
		});

		Given("clico no botão EDIT", () -> {
			m.esperarElementoEstarVisivel(HomePage.BTN_EDIT, 10);
			m.clicar(HomePage.BTN_EDIT);
		});
		
		When("clico no botão DELETE",()->{
			m.esperarElementoEstarVisivel(HomePage.BTN_DELETE, 10);
			m.clicar(HomePage.BTN_DELETE);
		});
		
		Then("confirmo a exclusão do produto",()->{
			m.esperarElementoEstarVisivel(HomePage.BTN_DELETE_YES, 10);
			m.clicar(HomePage.BTN_DELETE_YES);
		});
		
		Then("valido a exclusão do produto",()->{
			m.esperarElementoEstarVisivel(HomePage.BTN_NEW, 10);
			m.validarElementoNaoExiste(HomePage.BOX_PRODUTO);
		});

		When("o quadro do produto estiver sendo exibido", () -> {
			m.esperarElementoEstarVisivel(HomePage.BOX_PRODUTO, 10);
		});

		Then("valido o label Code", () -> {
			m.validarTexto(HomePage.LBL_CODE, Produto.getCode());
		});

		Then("valido o label Descripton", () -> {
			m.validarTexto(HomePage.LBL_DESCRIPTION, Produto.getDescription());
		});

		Then("valido o label Packing", () -> {
			m.validarTexto(HomePage.LBL_PACKING, Produto.getPacking());
		});

		Then("valida o lavel Amount", () -> {
			m.validarTexto(HomePage.LBL_AMOUNT, Produto.getAmount());
		});

		Then("valido o label Unit value", () -> {
			m.validarTexto(HomePage.LBL_UNIT_VALUE, Produto.getUnitValue());
		});

		Then("valido o label Lot", () -> {
			m.validarTexto(HomePage.LBL_LOT, Produto.getLot());
		});
	}

}
