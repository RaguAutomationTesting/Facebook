package com.facebook.stepdefinition;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.facebook.utilities.BaseClass;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks extends BaseClass {

	@Before
	public void beforeScenario() {
		System.out.println("Hooks Scenario Starts");
		loadBrowser("chrome");
		applyWaitstoAllElements();
		windowMaximize();

	}

	@After
	public void afterScenario(Scenario scenario) {
		TakesScreenshot ts = (TakesScreenshot) driver;
		byte[] screenshotAs = ts.getScreenshotAs(OutputType.BYTES);
		scenario.embed(screenshotAs, "image/png");

		System.out.println("Hooks Scenario Ends");

	}

}
