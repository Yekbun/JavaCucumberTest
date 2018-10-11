$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Accounts.feature");
formatter.feature({
  "line": 2,
  "name": "Create Acounts",
  "description": "",
  "id": "create-acounts",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Create a new contact scenario",
  "description": "",
  "id": "create-acounts;create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of the page is Zoho",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user navigates to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters username and password",
  "rows": [
    {
      "cells": [
        "olcayyf@hotmail.com",
        "Yekbun01!"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user click to Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user at Dasborad",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user go to new Account page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user click to New button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user enters page details  \"\u003caccountname\u003e\" and \"\u003cratinge\u003e\" and \"\u003cphone\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user click to Save button",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "create-acounts;create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "accountname",
        "rating",
        "phone"
      ],
      "line": 21,
      "id": "create-acounts;create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "Account1",
        "1",
        "0745125896"
      ],
      "line": 22,
      "id": "create-acounts;create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "Account2",
        "2",
        "0745125123"
      ],
      "line": 23,
      "id": "create-acounts;create-a-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Create a new contact scenario",
  "description": "",
  "id": "create-acounts;create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of the page is Zoho",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user navigates to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters username and password",
  "rows": [
    {
      "cells": [
        "olcayyf@hotmail.com",
        "Yekbun01!"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user click to Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user at Dasborad",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user go to new Account page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user click to New button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user enters page details  \"Account1\" and \"\u003cratinge\u003e\" and \"0745125896\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user click to Save button",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountsStepDefinitions.user_is_on_Homepage()"
});
formatter.result({
  "duration": 18529357553,
  "status": "passed"
});
formatter.match({
  "location": "AccountsStepDefinitions.title_of_the_page_is_Zoho()"
});
formatter.result({
  "duration": 21982467,
  "status": "passed"
});
formatter.match({
  "location": "AccountsStepDefinitions.user_navigates_to_Login_page()"
});
formatter.result({
  "duration": 1050699449,
  "status": "passed"
});
formatter.match({
  "location": "AccountsStepDefinitions.User_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 453591116,
  "status": "passed"
});
formatter.match({
  "location": "AccountsStepDefinitions.user_click_to_login_button()"
});
formatter.result({
  "duration": 49227163,
  "status": "passed"
});
formatter.match({
  "location": "AccountsStepDefinitions.user_at_Dasborad()"
});
formatter.result({
  "duration": 7805166,
  "status": "passed"
});
formatter.match({
  "location": "AccountsStepDefinitions.user_go_to_new_Account_page()"
});
formatter.result({
  "duration": 41306512,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Accounts\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.42.591088 (7b2b2dca23cca0862f674758c9a3933e685c27d5),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027DESKTOP-AFMS98U\u0027, ip: \u0027192.168.192.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:55371}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.42.591088 (7b2b2dca23cca0862f674758c9a3933e685c27d5), userDataDir\u003dC:\\Users\\Feryat\\AppData\\Local\\Temp\\scoped_dir3188_28046}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: a3f15e9bd60597cea07ae6a33a3f6eeb\n*** Element info: {Using\u003dlink text, value\u003dAccounts}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:465)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat StepDefinitions.AccountsStepDefinitions.user_go_to_new_Account_page(AccountsStepDefinitions.java:76)\r\n\tat ✽.Then user go to new Account page(Accounts.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AccountsStepDefinitions.user_click_to_New_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Account1",
      "offset": 27
    },
    {
      "val": "\u003cratinge\u003e",
      "offset": 42
    },
    {
      "val": "0745125896",
      "offset": 58
    }
  ],
  "location": "AccountsStepDefinitions.user_enters_page_details_and_and(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountsStepDefinitions.user_click_to_Logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "Create a new contact scenario",
  "description": "",
  "id": "create-acounts;create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of the page is Zoho",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user navigates to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters username and password",
  "rows": [
    {
      "cells": [
        "olcayyf@hotmail.com",
        "Yekbun01!"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user click to Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user at Dasborad",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user go to new Account page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user click to New button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user enters page details  \"Account2\" and \"\u003cratinge\u003e\" and \"0745125123\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user click to Save button",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountsStepDefinitions.user_is_on_Homepage()"
});
formatter.result({
  "duration": 2885569544,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.42.591088 (7b2b2dca23cca0862f674758c9a3933e685c27d5),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027DESKTOP-AFMS98U\u0027, ip: \u0027192.168.192.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:55440}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.42.591088 (7b2b2dca23cca0862f674758c9a3933e685c27d5), userDataDir\u003dC:\\Users\\Feryat\\AppData\\Local\\Temp\\scoped_dir12324_25905}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003d, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 3160453aa034abf1771d7cbdf5a9f7c1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:368)\r\n\tat StepDefinitions.AccountsStepDefinitions.user_is_on_Homepage(AccountsStepDefinitions.java:37)\r\n\tat ✽.Given user is on Homepage(Accounts.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AccountsStepDefinitions.title_of_the_page_is_Zoho()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountsStepDefinitions.user_navigates_to_Login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountsStepDefinitions.User_enters_username_and_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountsStepDefinitions.user_click_to_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountsStepDefinitions.user_at_Dasborad()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountsStepDefinitions.user_go_to_new_Account_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountsStepDefinitions.user_click_to_New_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Account2",
      "offset": 27
    },
    {
      "val": "\u003cratinge\u003e",
      "offset": 42
    },
    {
      "val": "0745125123",
      "offset": 58
    }
  ],
  "location": "AccountsStepDefinitions.user_enters_page_details_and_and(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountsStepDefinitions.user_click_to_Logout_button()"
});
formatter.result({
  "status": "skipped"
});
});