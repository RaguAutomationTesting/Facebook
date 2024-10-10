$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFile/ForgotPassword.feature");
formatter.feature({
  "name": "To validate the forgot password functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ForgotPassword"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To validate searching forgotten account using mobile number",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter serach mobile number \"\u003cmobile\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click search button",
  "keyword": "And "
});
formatter.step({
  "name": "user sees the search results based on mobile",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "mobile"
      ]
    },
    {
      "cells": [
        "123"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: session not created: Chrome failed to start: exited normally.\n  (chrome not reachable)\n  (The process started from chrome location C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe is no longer running, so ChromeDriver is assuming that Chrome has crashed.) \nHost info: host: \u0027VIJAY\u0027, ip: formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate searching forgotten account using mobile number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ForgotPassword"
    }
  ]
});
formatter.step({
  "name": "user enter serach mobile number \"123\"",
  "keyword": "When "
});
formatter.match({
  "location": "ForgottenPasswordSteps.user_enter_serach_mobile_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click search button",
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenPasswordSteps.user_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the search results based on mobile",
  "keyword": "Then "
});
formatter.match({
  "location": "ForgottenPasswordSteps.user_sees_the_search_results_based_on_mobile()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate searching forgotten accout using mail id",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter search mail id \"\u003cmailid\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click search button",
  "keyword": "And "
});
formatter.step({
  "name": "user sees the search results based on mailid",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "mailid"
      ]
    },
    {
      "cells": [
        "axjb"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the facebook application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_launch_the_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click forgotten password link",
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenPasswordSteps.user_click_forgotten_password_link()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d122.0.6261.95)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d1a35f1ca7db82a83bef9911a2057909, findElement {using\u003dxpath, value\u003d//a[text()\u003d\u0027Forgotten password?\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.95, chrome: {chromedriverVersion: 122.0.6261.94 (880dbf29479c..., userDataDir: C:\\Users\\hp\\AppData\\Local\\T...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50049}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50049/devtoo..., se:cdpVersion: 122.0.6261.95, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d1a35f1ca7db82a83bef9911a2057909\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.facebook.utilities.BaseClass.clickElement(BaseClass.java:79)\r\n\tat com.facebook.stepdefinition.ForgottenPasswordSteps.user_click_forgotten_password_link(ForgottenPasswordSteps.java:18)\r\n\tat ✽.user click forgotten password link(file:src/test/resources/FeatureFile/ForgotPassword.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "To validate searching forgotten accout using mail id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ForgotPassword"
    }
  ]
});
formatter.step({
  "name": "user enter search mail id \"axjb\"",
  "keyword": "When "
});
formatter.match({
  "location": "ForgottenPasswordSteps.user_enter_search_mail_id(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click search button",
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenPasswordSteps.user_click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user sees the search results based on mailid",
  "keyword": "Then "
});
formatter.match({
  "location": "ForgottenPasswordSteps.user_sees_the_search_results_based_on_mailid()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d122.0.6261.95)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d1a35f1ca7db82a83bef9911a2057909, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.95, chrome: {chromedriverVersion: 122.0.6261.94 (880dbf29479c..., userDataDir: C:\\Users\\hp\\AppData\\Local\\T...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50049}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50049/devtoo..., se:cdpVersion: 122.0.6261.95, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d1a35f1ca7db82a83bef9911a2057909\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:598)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:318)\r\n\tat com.facebook.stepdefinition.Hooks.afterScenario(Hooks.java:26)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/FeatureFile/Login.feature");
formatter.feature({
  "name": "To validate the login functionlity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To validate login using different credential sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user sees the results based on \"\u003ccredentialType\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "credentialType"
      ]
    },
    {
      "cells": [
        "ijk",
        "ijk@123",
        "negative"
      ]
    },
    {
      "cells": [
        "mno",
        "mngt@123",
        "negative"
      ]
    },
    {
      "cells": [
        "r15ranjith@gmail.com",
        "Ram9992@",
        "positive"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the facebook application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_launch_the_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login using different credential sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enter \"ijk\" and \"ijk@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enter_username_and_password(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d122.0.6261.95)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [3f30e582f1bf62b94725e5ae43eb1944, findElement {using\u003did, value\u003demail}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.95, chrome: {chromedriverVersion: 122.0.6261.94 (880dbf29479c..., userDataDir: C:\\Users\\hp\\AppData\\Local\\T...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50110}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50110/devtoo..., se:cdpVersion: 122.0.6261.95, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 3f30e582f1bf62b94725e5ae43eb1944\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\r\n\tat com.facebook.utilities.BaseClass.enterText(BaseClass.java:74)\r\n\tat com.facebook.stepdefinition.LoginSteps.user_enter_username_and_password(LoginSteps.java:33)\r\n\tat ✽.user enter \"ijk\" and \"ijk@123\"(file:src/test/resources/FeatureFile/Login.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user sees the results based on \"negative\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_sees_the_results_based_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d122.0.6261.95)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [3f30e582f1bf62b94725e5ae43eb1944, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.95, chrome: {chromedriverVersion: 122.0.6261.94 (880dbf29479c..., userDataDir: C:\\Users\\hp\\AppData\\Local\\T...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50110}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50110/devtoo..., se:cdpVersion: 122.0.6261.95, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 3f30e582f1bf62b94725e5ae43eb1944\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:598)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:318)\r\n\tat com.facebook.stepdefinition.Hooks.afterScenario(Hooks.java:26)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the facebook application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_launch_the_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login using different credential sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enter \"mno\" and \"mngt@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enter_username_and_password(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d122.0.6261.95)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [235fd0419865c4d632d3236bf6cfb689, findElement {using\u003did, value\u003demail}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.95, chrome: {chromedriverVersion: 122.0.6261.94 (880dbf29479c..., userDataDir: C:\\Users\\hp\\AppData\\Local\\T...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50200}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50200/devtoo..., se:cdpVersion: 122.0.6261.95, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 235fd0419865c4d632d3236bf6cfb689\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\r\n\tat com.facebook.utilities.BaseClass.enterText(BaseClass.java:74)\r\n\tat com.facebook.stepdefinition.LoginSteps.user_enter_username_and_password(LoginSteps.java:33)\r\n\tat ✽.user enter \"mno\" and \"mngt@123\"(file:src/test/resources/FeatureFile/Login.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user sees the results based on \"negative\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_sees_the_results_based_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d122.0.6261.95)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [235fd0419865c4d632d3236bf6cfb689, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.95, chrome: {chromedriverVersion: 122.0.6261.94 (880dbf29479c..., userDataDir: C:\\Users\\hp\\AppData\\Local\\T...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50200}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50200/devtoo..., se:cdpVersion: 122.0.6261.95, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 235fd0419865c4d632d3236bf6cfb689\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:598)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:318)\r\n\tat com.facebook.stepdefinition.Hooks.afterScenario(Hooks.java:26)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the facebook application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_launch_the_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login using different credential sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enter \"r15ranjith@gmail.com\" and \"Ram9992@\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the results based on \"positive\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_sees_the_results_based_on(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.xpath: //span[text()\u003d\u0027Ranjith Kumar\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.facebook.utilities.BaseClass.verifyPresenceOfAndElement(BaseClass.java:84)\r\n\tat com.facebook.stepdefinition.LoginSteps.user_sees_the_results_based_on(LoginSteps.java:56)\r\n\tat ✽.user sees the results based on \"positive\"(file:src/test/resources/FeatureFile/Login.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d122.0.6261.95)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ba77b7875f13b3043b922474397b2bdc, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.95, chrome: {chromedriverVersion: 122.0.6261.94 (880dbf29479c..., userDataDir: C:\\Users\\hp\\AppData\\Local\\T...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50229}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50229/devtoo..., se:cdpVersion: 122.0.6261.95, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: ba77b7875f13b3043b922474397b2bdc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:598)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:318)\r\n\tat com.facebook.stepdefinition.Hooks.afterScenario(Hooks.java:26)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the facebook application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_launch_the_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login using different credential sets",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user enter username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "mno",
        "mngt@123"
      ]
    },
    {
      "cells": [
        "ijk",
        "ijk@123"
      ]
    },
    {
      "cells": [
        "lmn",
        "ijk@12"
      ]
    },
    {
      "cells": [
        "r15ranjith@gmail.com",
        "Ram9992@"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enter_username_and_password(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d122.0.6261.95)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [14448680df60fc60391dd5fb1852eacf, findElement {using\u003did, value\u003demail}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.95, chrome: {chromedriverVersion: 122.0.6261.94 (880dbf29479c..., userDataDir: C:\\Users\\hp\\AppData\\Local\\T...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50271}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50271/devtoo..., se:cdpVersion: 122.0.6261.95, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 14448680df60fc60391dd5fb1852eacf\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\r\n\tat com.facebook.utilities.BaseClass.enterText(BaseClass.java:74)\r\n\tat com.facebook.stepdefinition.LoginSteps.user_enter_username_and_password(LoginSteps.java:72)\r\n\tat ✽.user enter username and password(file:src/test/resources/FeatureFile/Login.feature:21)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user sees the error message for invalid login attempt",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_sees_the_error_message_for_invalid_login_attempt()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d122.0.6261.95)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [14448680df60fc60391dd5fb1852eacf, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.95, chrome: {chromedriverVersion: 122.0.6261.94 (880dbf29479c..., userDataDir: C:\\Users\\hp\\AppData\\Local\\T...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50271}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50271/devtoo..., se:cdpVersion: 122.0.6261.95, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 14448680df60fc60391dd5fb1852eacf\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:598)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:318)\r\n\tat com.facebook.stepdefinition.Hooks.afterScenario(Hooks.java:26)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
});g.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\nCaused by: java.io.UncheckedIOException: java.io.IOException: An existing connection was forcibly closed by the remote host\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.makeCall(NettyHttpHandler.java:73)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.execute(NettyHttpHandler.java:49)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyClient.execute(NettyClient.java:99)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:190)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\t... 43 more\r\nCaused by: java.io.IOException: An existing connection was forcibly closed by the remote host\r\n\tat sun.nio.ch.SocketDispatcher.read0(Native Method)\r\n\tat sun.nio.ch.SocketDispatcher.read(Unknown Source)\r\n\tat sun.nio.ch.IOUtil.readIntoNativeBuffer(Unknown Source)\r\n\tat sun.nio.ch.IOUtil.read(Unknown Source)\r\n\tat sun.nio.ch.SocketChannelImpl.read(Unknown Source)\r\n\tat io.netty.buffer.PooledByteBuf.setBytes(PooledByteBuf.java:256)\r\n\tat io.netty.buffer.AbstractByteBuf.writeBytes(AbstractByteBuf.java:1132)\r\n\tat io.netty.channel.socket.nio.NioSocketChannel.doReadBytes(NioSocketChannel.java:357)\r\n\tat io.netty.channel.nio.AbstractNioByteChannel$NioByteUnsafe.read(AbstractNioByteChannel.java:151)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:788)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:724)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:650)\r\n\tat io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:562)\r\n\tat io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:997)\r\n\tat io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)\r\n\tat io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user launch the facebook application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_launch_the_facebook_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To validate login using different credential sets",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user enter username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "mno",
        "mngt@123"
      ]
    },
    {
      "cells": [
        "ijk",
        "ijk@123"
      ]
    },
    {
      "cells": [
        "lmn",
        "ijk@12"
      ]
    },
    {
      "cells": [
        "r15ranjith@gmail.com",
        "Ram9992@"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enter_username_and_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user sees the error message for invalid login attempt",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_sees_the_error_message_for_invalid_login_attempt()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6c342b337780e97c30d803c34d2cc69c, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.95, chrome: {chromedriverVersion: 122.0.6261.94 (880dbf29479c..., userDataDir: C:\\Users\\hp\\AppData\\Local\\T...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50188}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50188/devtoo..., se:cdpVersion: 122.0.6261.95, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 6c342b337780e97c30d803c34d2cc69c\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:598)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:318)\r\n\tat com.facebook.stepdefinition.Hooks.afterScenario(Hooks.java:26)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\nCaused by: java.io.UncheckedIOException: java.net.ConnectException: Connection refused: no further information: localhost/0:0:0:0:0:0:0:1:7087\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.makeCall(NettyHttpHandler.java:73)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.execute(NettyHttpHandler.java:49)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:56)\r\n\tat org.openqa.selenium.remote.http.netty.NettyClient.execute(NettyClient.java:99)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:190)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\t... 42 more\r\nCaused by: java.net.ConnectException: Connection refused: no further information: localhost/0:0:0:0:0:0:0:1:7087\r\n\tat org.asynchttpclient.netty.channel.NettyConnectListener.onFailure(NettyConnectListener.java:179)\r\n\tat org.asynchttpclient.netty.channel.NettyChannelConnector$1.onFailure(NettyChannelConnector.java:108)\r\n\tat org.asynchttpclient.netty.SimpleChannelFutureListener.operationComplete(SimpleChannelFutureListener.java:28)\r\n\tat org.asynchttpclient.netty.SimpleChannelFutureListener.operationComplete(SimpleChannelFutureListener.java:20)\r\n\tat io.netty.util.concurrent.DefaultPromise.notifyListener0(DefaultPromise.java:590)\r\n\tat io.netty.util.concurrent.DefaultPromise.notifyListeners0(DefaultPromise.java:583)\r\n\tat io.netty.util.concurrent.DefaultPromise.notifyListenersNow(DefaultPromise.java:559)\r\n\tat io.netty.util.concurrent.DefaultPromise.notifyListeners(DefaultPromise.java:492)\r\n\tat io.netty.util.concurrent.DefaultPromise.setValue0(DefaultPromise.java:636)\r\n\tat io.netty.util.concurrent.DefaultPromise.setFailure0(DefaultPromise.java:629)\r\n\tat io.netty.util.concurrent.DefaultPromise.tryFailure(DefaultPromise.java:118)\r\n\tat io.netty.channel.nio.AbstractNioChannel$AbstractNioUnsafe.fulfillConnectPromise(AbstractNioChannel.java:321)\r\n\tat io.netty.channel.nio.AbstractNioChannel$AbstractNioUnsafe.finishConnect(AbstractNioChannel.java:337)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:776)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:724)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:650)\r\n\tat io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:562)\r\n\tat io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:997)\r\n\tat io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)\r\n\tat io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)\r\n\tat java.lang.Thread.run(Unknown Source)\r\nCaused by: io.netty.channel.AbstractChannel$AnnotatedConnectException: Connection refused: no further information: localhost/0:0:0:0:0:0:0:1:7087\r\nCaused by: java.net.ConnectException: Connection refused: no further information\r\n\tat sun.nio.ch.SocketChannelImpl.checkConnect(Native Method)\r\n\tat sun.nio.ch.SocketChannelImpl.finishConnect(Unknown Source)\r\n\tat io.netty.channel.socket.nio.NioSocketChannel.doFinishConnect(NioSocketChannel.java:337)\r\n\tat io.netty.channel.nio.AbstractNioChannel$AbstractNioUnsafe.finishConnect(AbstractNioChannel.java:334)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:776)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:724)\r\n\tat io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:650)\r\n\tat io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:562)\r\n\tat io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:997)\r\n\tat io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)\r\n\tat io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
});