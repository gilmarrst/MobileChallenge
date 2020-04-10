package br.com.MobileProductChallenge.mobileInteractions;

import org.openqa.selenium.By;

import br.com.MobileProductChallenge.util.DriverContext;

public interface Clique {

	default void clicar(By elemento)
	{
		DriverContext.getDriver().findElement(elemento).click();
	}
}
