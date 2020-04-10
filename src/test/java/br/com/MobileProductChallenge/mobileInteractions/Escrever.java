package br.com.MobileProductChallenge.mobileInteractions;

import org.openqa.selenium.By;

import br.com.MobileProductChallenge.util.DriverContext;

public interface Escrever {
	
	default void escrever(By elemento,String texto)
	{
		DriverContext.getDriver().findElement(elemento).clear();
		DriverContext.getDriver().findElement(elemento).sendKeys(texto);
	}

}
