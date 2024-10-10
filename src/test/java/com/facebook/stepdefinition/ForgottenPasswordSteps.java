package com.facebook.stepdefinition;

import com.facebook.objectrepo.ForgottenPasswordPageObjects;
import com.facebook.utilities.BaseClass;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ForgottenPasswordSteps extends BaseClass {
	public ForgottenPasswordPageObjects f;

	@Given("user click forgotten password link")
	public void user_click_forgotten_password_link() {

		f = new ForgottenPasswordPageObjects();

		clickElement(f.getLinkForgottenPassword());
		pauseExecution(3000);
	}

	@When("user enter serach mobile number {string}")
	public void user_enter_serach_mobile_number(String mobile) {
		f = new ForgottenPasswordPageObjects();

		enterText(f.getTxtSearch(), mobile);

	}

	@When("user click search button")
	public void user_click_search_button() {
		clickElement(f.getBtnSearch());
		pauseExecution(3000);
	}

	@Then("user sees the search results based on mobile")
	public void user_sees_the_search_results_based_on_mobile() {
		f = new ForgottenPasswordPageObjects();

		verifyPresenceOfAndElement(f.getMsgForInvalidMobileSearch(),
				"expected error message not displayed for invalid mobile search");
	}

	@When("user enter search mail id {string}")
	public void user_enter_search_mail_id(String mail) {
		f = new ForgottenPasswordPageObjects();

		enterText(f.getTxtSearch(), mail);
	}

	@Then("user sees the search results based on mailid")
	public void user_sees_the_search_results_based_on_mailid() {
		f = new ForgottenPasswordPageObjects();

//		verifyPresenceOfAndElement(f.getMsgForInvalidMailSearch(),
//				"Expected error message is not displayed for invalid mail search ");
		
		verifyFalse(f.getMsgForInvalidMailSearch(), "Expected error msg is Displayed");
	}

}
