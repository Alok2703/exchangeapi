package apitests;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith; 



@RunWith(Cucumber.class) 
@CucumberOptions(features=".//Features",
				 monochrome=true,
				 plugin = {"pretty", "html:target/cucumber"}) 

public class RunTest { }