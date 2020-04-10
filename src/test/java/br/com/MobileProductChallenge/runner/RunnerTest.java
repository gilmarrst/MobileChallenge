package br.com.MobileProductChallenge.runner;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty","html:target/report/html"},monochrome = true,glue = ""
					,features = "src/test/resources/features"
					,tags = {"@MobileChallenge"})
public class RunnerTest {
}
