package apitests;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import extentions.HTTPExtentions;
import io.restassured.http.Method;
import com.google.gson.Gson;
import contracts.RatesAPIResponse;
import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;

public class RatesStepDef {
	// private String baseURL;
	private Gson gsonUtil;
	private RatesAPIResponse responseObject;
	
	public RatesStepDef() {
		gsonUtil = new Gson();
		HTTPExtentions.setBaseURL("https://api.ratesapi.io/api");
	}

	@Given("^For the Rates API with HTTP Method set as GET$")
	public void for_the_rates_api_with_http_method_set_as_get() throws Throwable {

		HTTPExtentions.setRESTMethod(Method.GET);
	}

	@When("^The request is posted to the API with operation name as \"([^\"]*)\"$")
	public void the_request_is_posted_to_the_api_with_operation_name_as_something(String strArg1) throws Throwable {
		try {
			HTTPExtentions.executeRequest(strArg1);
		} catch (Exception e) {
			Assert.fail(e.toString());
		}
	}

	@When("^The request has parameters$")
	public void the_request_has_parameters(DataTable dt) throws Throwable {
		List<Map<String, String>> params = dt.asMaps(String.class, String.class);
		for (int i = 0; i < params.size(); i++) {
			HTTPExtentions.setParameter(params.get(i).get("paramName"), params.get(i).get("paramValue"));
		}
	}

	@Then("^API return the status code as \"([^\"]*)\"$")
	public void api_return_the_status_code_as_something(String strArg1) throws Throwable {
		System.out.println("Then");

		if (HTTPExtentions.getResponse().statusCode() != Integer.parseInt(strArg1)) {
			Assert.fail("status code is not equal to " + strArg1);
		}
	}

	@And("^The base value should be \"([^\"]*)\"$")
	public void the_base_value_should_be_something(String strArg1) throws Throwable {

		try {
			responseObject = gsonUtil.fromJson(HTTPExtentions.getResponse().getBody().asString(),
					RatesAPIResponse.class);
		} catch (Exception e) {
			Assert.fail(e.getMessage());
		}
		if (!responseObject.getBase().equals(strArg1)) {
			Assert.fail("Value is not " + strArg1);
		}
	}

	@And("^The Exchange rate should display for \"([^\"]*)\"$")
	public void the_exchange_rate_should_display_for_something(String strArg1) throws Throwable {
		if (responseObject.getRates().getGBP() == null) {
			Assert.fail("Value is not in " + strArg1);
		}
	}

	@And("^Error message should contain message \"([^\"]*)\"$")
	public void error_message_should_contain_message_something(String strArg1) throws Throwable {
		if (!HTTPExtentions.getResponse().getBody().asString().contains(strArg1)) {
			Assert.fail("Message does not contain " + strArg1);
		}
	}

	@And("^Date value in response must be current date$")
	public void date_value_in_response_must_be_current_date() throws Throwable {
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		LocalDateTime now = LocalDateTime.now();
		if (!dtf.format(now).equals(responseObject.getDate())) {
			Assert.fail("Message date is not today's date");
		}
	}
	
	@Then("^Error message should display as \"([^\"]*)\"$")
	public void error_message_should_display_as(String arg1) throws Exception {
		if (!HTTPExtentions.getResponse().getBody().asString().contains(arg1)) {
			Assert.fail("Message does not contain " + arg1);
	}
}

}

