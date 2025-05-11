package com.facebook.objectrepo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.facebook.utilities.BaseClass;

public class HomePageObjects extends BaseClass{
	public HomePageObjects() {
		PageFactory.initElements(driver, this);
	}
	
	//submaster1 la 1st changes
	
	@FindBy(xpath = "//span[text()='Ranjith Kumar']")
	private WebElement txtHomePage;

	public WebElement getTxtHomePage() {
		return txtHomePage;
	}

}
