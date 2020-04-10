package br.com.MobileProductChallenge.mobileInteractions;

import static org.junit.Assert.fail;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;

import br.com.MobileProductChallenge.util.DriverContext;

public interface Espera {

	default void esperarElementoEstarVisivel(By elemento, int timeout) {
		try {
			while (timeout >= 0) {
				Thread.sleep(1000);
				if (DriverContext.getDriver().findElement(elemento).isDisplayed()) {
					break;
				} else {
					--timeout;
				}
			}
			if (timeout < 0) {
				fail("Não foi possivel validar se o elemento: " + elemento + "esta visivel. Time out!");
			}
		} catch (InterruptedException e) {
			e.printStackTrace();
		} catch (NoSuchElementException e) {
			esperarElementoEstarVisivel(elemento, --timeout);
		}
	}

}
