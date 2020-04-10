package br.com.MobileProductChallenge.steps;

import br.com.MobileProductChallenge.mobileInteractions.MobileInteractions;
import br.com.MobileProductChallenge.page.CadastroDeProdutoPage;
import br.com.MobileProductChallenge.tdm.Produto;
import br.com.MobileProductChallenge.util.DriverContext;
import io.cucumber.java8.En;

public class CadastroDeProdutoSteps implements En{
	
	public CadastroDeProdutoSteps() {
		MobileInteractions m = new MobileInteractions();
		
		When("preencho o code {string}",(String code)->{
			m.esperarElementoEstarVisivel(CadastroDeProdutoPage.TXT_CODE, 10);
			DriverContext.getDriver().hideKeyboard();
			m.escrever(CadastroDeProdutoPage.TXT_CODE, code);
			Produto.setCode(code);
		});
		
		When("preencho a Description {string}",(String desc)->{
			m.escrever(CadastroDeProdutoPage.TXT_DESCRIPTION, desc);
			Produto.setDescription(desc);
		});
		
		When("preencho o Packing {string}",(String pack)->{
			m.escrever(CadastroDeProdutoPage.TXT_PACKING, pack);
			Produto.setPacking(pack);
		});
		
		When("preencho o Amount {string}",(String amount)->
		{
			m.escrever(CadastroDeProdutoPage.TXT_AMOUNT, amount);
			Produto.setAmount(amount);
		});
		
		When("preencho o Unit value {string}",(String value)->{
			m.escrever(CadastroDeProdutoPage.TXT_UNIT_VALUE, value);
			Produto.setUnitValue(value.replace(".", ","));
		});
		
		When("preencho o Lot {string}",(String lot)->{
			m.escrever(CadastroDeProdutoPage.TXT_LOT, lot);
			Produto.setLot(lot);
		});
		
		Then("clico no botão salvar",()->{
			m.clicar(CadastroDeProdutoPage.BTN_SALVAR);
		});
		
		}
	}
