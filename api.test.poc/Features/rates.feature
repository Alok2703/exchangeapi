Feature: Validate Rates API are fit to use of the exchange rates for the financial reasons

  Scenario: Validate the response is a success for the latest date
    Given For the Rates API with HTTP Method set as GET
    When The request is posted to the API with operation name as "/latest"
    Then API return the status code as "200"

  Scenario: Assert the response for the latest date contains correct Base value and exchange rate
    Given For the Rates API with HTTP Method set as GET
    When The request has parameters
      | paramName | paramValue |
      | base      | USD        |
      | symbols   | GBP        |
    And The request is posted to the API with operation name as "/latest"
    Then API return the status code as "200"
    And The base value should be "USD"
    And The Exchange rate should display for "GBP"

  Scenario: Validate the response when hitting incorrect url for latest date
    Given For the Rates API with HTTP Method set as GET
    When The request has parameters
      | paramName | paramValue |
      | symbols   | XYZ        |
    And The request is posted to the API with operation name as "/latest"
    Then API return the status code as "400"
    And Error message should contain message "Symbols 'XYZ' are invalid"

  Scenario: Validate the response is a success for the past date
    Given For the Rates API with HTTP Method set as GET
    When The request is posted to the API with operation name as "/2012-01-12"
    Then API return the status code as "200"
    And The base value should be "EUR"

  Scenario: Assert the response for the past date rate API
    Given For the Rates API with HTTP Method set as GET
    When The request has parameters
      | paramName | paramValue |
      | base      | USD        |
    And The request is posted to the API with operation name as "/2019-01-12"
    Then API return the status code as "200"
    And The base value should be "USD"
    
    Scenario:  Validate the response when hitting past date url with future date 
		Given For the Rates API with HTTP Method set as GET
		When The request is posted to the API with operation name as "/2029-01-12"
		Then API return the status code as "200"
		And The base value should be "EUR"
		And Date value in response must be current date
