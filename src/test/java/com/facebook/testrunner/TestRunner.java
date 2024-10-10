package com.facebook.testrunner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.facebook.utilities.ReportUtilities;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources", glue = "com.facebook.stepdefinition", 
dryRun = false, monochrome = true, strict = true, snippets = SnippetType.UNDERSCORE, plugin = {
		"rerun:src\\test\\resources\\Failed Scenario\\Failedtestcases.txt",
		"pretty", "html:src\\test\\resources\\Reports\\abc.html", 
		"json:src\\test\\resources\\Reports\\output.json",
		"junit:src\\test\\resources\\Reports\\fb.xml" })

public class TestRunner {
	@AfterClass
	public static void reportGeneration() throws IOException {
		ReportUtilities
				.generateJvmReport(System.getProperty("user.dir") + 
						"\\src\\test\\resources\\Reports\\output.json");

	}

}
