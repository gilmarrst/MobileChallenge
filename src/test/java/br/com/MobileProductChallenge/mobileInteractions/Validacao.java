package br.com.MobileProductChallenge.mobileInteractions;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;

import br.com.MobileProductChallenge.util.DriverContext;

public interface Validacao {
	
	default void validarTexto(By elemento,String texto)
	{
		String valor = DriverContext.getDriver().findElement(elemento).getText();
		assertTrue(valor.equals(texto));
		
	}
	
	default void validarElementoNaoExiste(By elemento)
	{
		try {
			DriverContext.getDriver().findElement(elemento);
			fail("O elemento: "+elemento+ " encontrado na tela.");
		} catch (NoSuchElementException e) {
			
		}
	}

}
