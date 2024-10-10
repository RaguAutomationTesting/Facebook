package com.facebook.utilities;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang3.math.IEEE754rUtils;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {

	public static WebDriver driver;

	public static String readProperty(String propertyName) throws IOException {
		File file = new File(
				"C:\\Users\\hp\\eclipse-workspace\\FacebookAutomationCucumbr\\src\\test\\resources\\Environment Details\\config.properties");

		FileReader f = new FileReader(file);

		Properties p = new Properties();

		p.load(f);

		String value = p.getProperty(propertyName);

		return value;

	}

	public static void pauseExecution(long milliseconds) {
		try {
			Thread.sleep(milliseconds);
		} catch (InterruptedException e) {

			e.printStackTrace();
		}

	}

	public static void loadBrowser(String browserType) {
		if (browserType.equals("chrome")) {
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();

		} else if (browserType.equals("firefox")) {
			WebDriverManager.chromedriver().setup();
			driver = new FirefoxDriver();

		} else if (browserType.equals("ie")) {
			WebDriverManager.iedriver().setup();
			driver = new InternetExplorerDriver();

		}

	}

	public static void launchUrl(String url) {
		driver.get(url);

	}

	public static void enterText(WebElement element, String text) {
		element.sendKeys(text);

	}

	public static void clickElement(WebElement element) {
		element.click();

	}

	public static void verifyPresenceOfAndElement(WebElement element, String message) {
		Assert.assertTrue(message, element.isDisplayed());

	}

	public static void windowMaximize() {
		driver.manage().window().maximize();

	}

	public static void applyWaitstoAllElements() {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

	}

	public static void closeBrowser() {
		driver.quit();

	}

	public static void verifyFalse(WebElement element, String message) {
		Assert.assertFalse(message, element.isDisplayed());
	}

}
