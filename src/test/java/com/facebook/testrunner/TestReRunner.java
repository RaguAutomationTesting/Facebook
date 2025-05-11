package com.facebook.testrunner;

import org.junit.runner.RunWith;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features = "@src\\test\\resources\\Failed Scenario\\Failedtestcases.txt", 
glue = "com.facebook.stepdefinition", 
dryRun = true, monochrome = true, snippets = SnippetType.UNDERSCORE,plugin = {
		"rerun:src\\test\\resources\\Failed Scenario\\Failedtestcases.txt",
		"pretty", "html:src\\test\\resources\\Reports\\abc.html", 
		"json:src\\test\\resources\\Reports\\output.json",
		"junit:src\\test\\resources\\Reports\\fb.xml" })
public class TestReRunner {

}
