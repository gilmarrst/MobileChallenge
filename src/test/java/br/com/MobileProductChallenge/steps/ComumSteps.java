package br.com.MobileProductChallenge.steps;

import java.net.URL;

import org.openqa.selenium.remote.DesiredCapabilities;

import br.com.MobileProductChallenge.mobileInteractions.MobileInteractions;
import br.com.MobileProductChallenge.page.PermissionPage;
import br.com.MobileProductChallenge.util.DriverContext;
import io.cucumber.java8.En;

public class ComumSteps implements En{
	public ComumSteps() {
		MobileInteractions m = new MobileInteractions();
		
		Given("abro o aplicado Product Registration",()->{
			DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
		    desiredCapabilities.setCapability("platformName", "Android");
		    desiredCapabilities.setCapability("deviceName", "emulator-5554");
		    desiredCapabilities.setCapability("automationName", "uiautomator2");
		    desiredCapabilities.setCapability("appPackage", "br.com.pztec.estoque");
		    desiredCapabilities.setCapability("appActivity", "br.com.pztec.estoque.Inicio");
		    URL remoteUrl = new URL("http://localhost:4723/wd/hub");
		    DriverContext.setDriver(remoteUrl, desiredCapabilities);
		   });
		
		
		Then("aceito as permissões solicitada pelo aplicativo",()->{
			m.esperarElementoEstarVisivel(PermissionPage.BTN_ALLOW, 10);
			m.clicar(PermissionPage.BTN_ALLOW);
			m.esperarElementoEstarVisivel(PermissionPage.BTN_ALLOW, 10);
			m.clicar(PermissionPage.BTN_ALLOW);
		});
	}

}
