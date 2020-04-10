package br.com.MobileProductChallenge.runner;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import br.com.MobileProductChallenge.util.DriverContext;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty","html:target/report/html"},monochrome = true,glue = ""
					,features = "src/test/resources/features"
					,tags = {"@MobileChallenge"})
public class RunnerTest {
	
	@AfterClass
	public static void afterclass() {
		DriverContext.getDriver().quit();
	}
}
