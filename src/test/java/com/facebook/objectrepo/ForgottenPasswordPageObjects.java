package com.facebook.objectrepo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.facebook.utilities.BaseClass;

public class ForgottenPasswordPageObjects extends BaseClass {
	public ForgottenPasswordPageObjects() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath="//a[text()='Forgotten password?']")
	private WebElement linkForgottenPassword;
	
	@FindBy(id="identify_email")
	private WebElement txtSearch;
	
	@FindBy(id="did_submit")
	private WebElement btnSearch;
	
	@FindBy(xpath="//div[text()='Please identify this account another way']")
	private WebElement msgForInvalidMobileSearch;
	
	@FindBy(xpath="//div[text()='No search results']")
	private WebElement msgForInvalidMailSearch;

	public WebElement getLinkForgottenPassword() {
		return linkForgottenPassword;
	}

	public WebElement getTxtSearch() {
		return txtSearch;
	}

	public WebElement getBtnSearch() {
		return btnSearch;
	}

	public WebElement getMsgForInvalidMobileSearch() {
		return msgForInvalidMobileSearch;
	}

	public WebElement getMsgForInvalidMailSearch() {
		return msgForInvalidMailSearch;
	}
	
}
