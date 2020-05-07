package apitests;


import cucumber.api.java.*;
import extentions.HTTPExtentions;

public class ScenarioHooks {
	@Before
    public void beforeScenario(){
		HTTPExtentions.clearParameters();
    } 
 
	/*
	@After
    public void afterScenario(){
		// to be implemented later
    }
    */
}
