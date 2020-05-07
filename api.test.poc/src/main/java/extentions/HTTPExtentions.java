package extentions;

import java.util.HashMap;
import java.util.Map;

import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class HTTPExtentions {
	
	private static Method RESTMethod = null;
	private static String baseURL = null;
	private static Response response;
	private static Map<String, String> parameters = new HashMap<String, String>();
	
	public static void setParameter(String key, String value) {
		parameters.put(key, value);
	}
	public static void clearParameters() {
		parameters.clear();
	}
	
	public static String getBaseURL() {
		return baseURL;
	}
	public static void setBaseURL(String baseURL) {
		HTTPExtentions.baseURL = baseURL;
	}
	public static Method getRESTMethod() {
		return RESTMethod;
	}
	public static void setRESTMethod(Method rESTMethod) {
		RESTMethod = rESTMethod;
	}
	
	
	public static Response getResponse() {
		return response;
	}
	public static void setResponse(Response res) {
		response = res;
	}
	
	
	public static void executeRequest(String OperationName) throws Exception {
		
		try {
			if(baseURL!=null) {
				RestAssured.baseURI = getBaseURL();
			}
			else {
				throw new Exception("Base URL is not set");
			}
			RequestSpecification httpRequest = RestAssured.given();
			if(RESTMethod!=null) {
				if(!parameters.isEmpty()) {
					httpRequest.params(parameters);
				}
				response = httpRequest.request(RESTMethod, OperationName);
			}
			else {
				throw new Exception("Operation Name is not set");
			}	
		}
		catch(Exception e) {
			throw e;
		}
	}
	
}

/*
Map<String, String> parameters = new HashMap<String, String>();
parameters.put("username", "John");
parameters.put("token", "1234");
*/
