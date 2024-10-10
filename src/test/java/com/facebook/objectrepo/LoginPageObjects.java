package com.facebook.objectrepo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.facebook.utilities.BaseClass;

public class LoginPageObjects extends BaseClass {
	public LoginPageObjects() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "email")
	private WebElement txtEmail;

	@FindBy(id = "pass")
	private WebElement txtPass;

	@FindBy(name = "login")
	private WebElement btnLogin;

	@FindBy(xpath = "//div[contains(text(),\"you entered isn't connected to an account. \")]")
	//div[contains(text(),\"you entered isn't connected to an account. \")]
	//div[contains(text(),'Invalid username or password')]
	private WebElement txtErrorMessage;
	
	@FindBy(xpath = "//span[text()='Ranjith Kumar']")
	private WebElement txtWelcomeMessage;

	public WebElement getTxtWelcomeMessage() {
		return txtWelcomeMessage;
	}

	public WebElement getTxtEmail() {
		return txtEmail;
	}

	public WebElement getTxtPass() {
		return txtPass;
	}

	public WebElement getBtnLogin() {
		return btnLogin;
	}

	public WebElement getTxtErrorMessage() {
		return txtErrorMessage;
	}

}
