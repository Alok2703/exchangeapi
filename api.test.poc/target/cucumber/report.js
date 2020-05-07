$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/rates.feature");
formatter.feature({
  "name": "Validate Rates API are fit to use of the exchange rates for the financial reasons",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate the response is a success for the latest date",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "For the Rates API with HTTP Method set as GET",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesStepDef.for_the_rates_api_with_http_method_set_as_get()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The request is posted to the API with operation name as \"/latest\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesStepDef.the_request_is_posted_to_the_api_with_operation_name_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API return the status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesStepDef.api_return_the_status_code_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Assert the response for the latest date contains correct Base value and exchange rate",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "For the Rates API with HTTP Method set as GET",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesStepDef.for_the_rates_api_with_http_method_set_as_get()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The request has parameters",
  "rows": [
    {
      "cells": [
        "paramName",
        "paramValue"
      ]
    },
    {
      "cells": [
        "base",
        "USD"
      ]
    },
    {
      "cells": [
        "symbols",
        "GBP"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "RatesStepDef.the_request_has_parameters(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The request is posted to the API with operation name as \"/latest\"",
  "keyword": "And "
});
formatter.match({
  "location": "RatesStepDef.the_request_is_posted_to_the_api_with_operation_name_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API return the status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesStepDef.api_return_the_status_code_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The base value should be \"USD\"",
  "keyword": "And "
});
formatter.match({
  "location": "RatesStepDef.the_base_value_should_be_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Exchange rate should display for \"GBP\"",
  "keyword": "And "
});
formatter.match({
  "location": "RatesStepDef.the_exchange_rate_should_display_for_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the response when hitting incorrect url for latest date",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "For the Rates API with HTTP Method set as GET",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesStepDef.for_the_rates_api_with_http_method_set_as_get()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The request has parameters",
  "rows": [
    {
      "cells": [
        "paramName",
        "paramValue"
      ]
    },
    {
      "cells": [
        "symbols",
        "XYZ"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "RatesStepDef.the_request_has_parameters(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The request is posted to the API with operation name as \"/latest\"",
  "keyword": "And "
});
formatter.match({
  "location": "RatesStepDef.the_request_is_posted_to_the_api_with_operation_name_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API return the status code as \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesStepDef.api_return_the_status_code_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should contain message \"Symbols \u0027XYZ\u0027 are invalid\"",
  "keyword": "And "
});
formatter.match({
  "location": "RatesStepDef.error_message_should_contain_message_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the response is a success for the past date",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "For the Rates API with HTTP Method set as GET",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesStepDef.for_the_rates_api_with_http_method_set_as_get()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The request is posted to the API with operation name as \"/2012-01-12\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesStepDef.the_request_is_posted_to_the_api_with_operation_name_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API return the status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesStepDef.api_return_the_status_code_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The base value should be \"EUR\"",
  "keyword": "And "
});
formatter.match({
  "location": "RatesStepDef.the_base_value_should_be_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Assert the response for the past date rate API",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "For the Rates API with HTTP Method set as GET",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesStepDef.for_the_rates_api_with_http_method_set_as_get()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The request has parameters",
  "rows": [
    {
      "cells": [
        "paramName",
        "paramValue"
      ]
    },
    {
      "cells": [
        "base",
        "USD"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "RatesStepDef.the_request_has_parameters(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The request is posted to the API with operation name as \"/2019-01-12\"",
  "keyword": "And "
});
formatter.match({
  "location": "RatesStepDef.the_request_is_posted_to_the_api_with_operation_name_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API return the status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesStepDef.api_return_the_status_code_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The base value should be \"USD\"",
  "keyword": "And "
});
formatter.match({
  "location": "RatesStepDef.the_base_value_should_be_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the response when hitting past date url with future date",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "For the Rates API with HTTP Method set as GET",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesStepDef.for_the_rates_api_with_http_method_set_as_get()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The request is posted to the API with operation name as \"/2029-01-12\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesStepDef.the_request_is_posted_to_the_api_with_operation_name_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API return the status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesStepDef.api_return_the_status_code_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The base value should be \"EUR\"",
  "keyword": "And "
});
formatter.match({
  "location": "RatesStepDef.the_base_value_should_be_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Date value in response must be current date",
  "keyword": "And "
});
formatter.match({
  "location": "RatesStepDef.date_value_in_response_must_be_current_date()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("./Features/regression.feature");
formatter.feature({
  "name": "Validate overall API functionality to fit to use of the exchange rate for financial reasons",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate the response\u0027s success status for the latest date",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "For the Rates API with HTTP Method set as GET",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesStepDef.for_the_rates_api_with_http_method_set_as_get()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The request is posted to the API with operation name as \"/latest\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesStepDef.the_request_is_posted_to_the_api_with_operation_name_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API return the status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesStepDef.api_return_the_status_code_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Assert the response for the latest date contains Incorrect Base value and exchange rate",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "For the Rates API with HTTP Method set as GET",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesStepDef.for_the_rates_api_with_http_method_set_as_get()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The request has parameters",
  "rows": [
    {
      "cells": [
        "paramName",
        "paramValue"
      ]
    },
    {
      "cells": [
        "base",
        "US"
      ]
    },
    {
      "cells": [
        "symbols",
        "GBP"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "RatesStepDef.the_request_has_parameters(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The request is posted to the API with operation name as \"/latest\"",
  "keyword": "And "
});
formatter.match({
  "location": "RatesStepDef.the_request_is_posted_to_the_api_with_operation_name_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API return the status code as \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesStepDef.api_return_the_status_code_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should contain message \"Base \u0027US\u0027 is not supported.\"",
  "keyword": "And "
});
formatter.match({
  "location": "RatesStepDef.error_message_should_contain_message_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Assert the response for the latest date contains correct Base value and exchange rate",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "For the Rates API with HTTP Method set as GET",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesStepDef.for_the_rates_api_with_http_method_set_as_get()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The request has parameters",
  "rows": [
    {
      "cells": [
        "paramName",
        "paramValue"
      ]
    },
    {
      "cells": [
        "base",
        "USD"
      ]
    },
    {
      "cells": [
        "symbols",
        "CAD"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "RatesStepDef.the_request_has_parameters(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The request is posted to the API with operation name as \"/latest\"",
  "keyword": "And "
});
formatter.match({
  "location": "RatesStepDef.the_request_is_posted_to_the_api_with_operation_name_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API return the status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesStepDef.api_return_the_status_code_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The base value should be \"USD\"",
  "keyword": "And "
});
formatter.match({
  "location": "RatesStepDef.the_base_value_should_be_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the response is a success for the past date",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "For the Rates API with HTTP Method set as GET",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesStepDef.for_the_rates_api_with_http_method_set_as_get()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The request is posted to the API with operation name as \"/2012-01-12\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesStepDef.the_request_is_posted_to_the_api_with_operation_name_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API return the status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesStepDef.api_return_the_status_code_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The base value should be \"EUR\"",
  "keyword": "And "
});
formatter.match({
  "location": "RatesStepDef.the_base_value_should_be_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Assert the response for the past date rate API",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "For the Rates API with HTTP Method set as GET",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesStepDef.for_the_rates_api_with_http_method_set_as_get()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The request has parameters",
  "rows": [
    {
      "cells": [
        "paramName",
        "paramValue"
      ]
    },
    {
      "cells": [
        "base",
        "USD"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "RatesStepDef.the_request_has_parameters(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The request is posted to the API with operation name as \"/2019-01-12\"",
  "keyword": "And "
});
formatter.match({
  "location": "RatesStepDef.the_request_is_posted_to_the_api_with_operation_name_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API return the status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesStepDef.api_return_the_status_code_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The base value should be \"USD\"",
  "keyword": "And "
});
formatter.match({
  "location": "RatesStepDef.the_base_value_should_be_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the response when hitting past date url with future date",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "For the Rates API with HTTP Method set as GET",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesStepDef.for_the_rates_api_with_http_method_set_as_get()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The request is posted to the API with operation name as \"/2029-01-12\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesStepDef.the_request_is_posted_to_the_api_with_operation_name_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API return the status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesStepDef.api_return_the_status_code_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The base value should be \"EUR\"",
  "keyword": "And "
});
formatter.match({
  "location": "RatesStepDef.the_base_value_should_be_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Date value in response must be current date",
  "keyword": "And "
});
formatter.match({
  "location": "RatesStepDef.date_value_in_response_must_be_current_date()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the response is a success for the past date (Leap year)",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "For the Rates API with HTTP Method set as GET",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesStepDef.for_the_rates_api_with_http_method_set_as_get()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The request is posted to the API with operation name as \"/2000-02-29/\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesStepDef.the_request_is_posted_to_the_api_with_operation_name_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API return the status code as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesStepDef.api_return_the_status_code_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The base value should be \"EUR\"",
  "keyword": "And "
});
formatter.match({
  "location": "RatesStepDef.the_base_value_should_be_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Assert the invalid day of month error message for the past date",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "For the Rates API with HTTP Method set as GET",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesStepDef.for_the_rates_api_with_http_method_set_as_get()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The request is posted to the API with operation name as \"/2000-02-30/\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesStepDef.the_request_is_posted_to_the_api_with_operation_name_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API return the status code as \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesStepDef.api_return_the_status_code_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should display as \"day is out of range for month\"",
  "keyword": "And "
});
formatter.match({
  "location": "RatesStepDef.error_message_should_display_as(String)"
});
formatter.result({
  "status": "passed"
});
});