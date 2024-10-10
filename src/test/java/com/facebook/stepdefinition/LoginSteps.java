package com.facebook.stepdefinition;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.junit.Assert;

import com.facebook.objectrepo.HomePageObjects;
import com.facebook.objectrepo.LoginPageObjects;
import com.facebook.utilities.BaseClass;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps extends BaseClass {
	public LoginPageObjects l;
	public HomePageObjects h;

	@Given("user launch the facebook application")
	public void user_launch_the_facebook_application() throws IOException {
		launchUrl(readProperty("sit-url"));

	}

	@When("user enter {string} and {string}")
	public void user_enter_username_and_password(String user, String pass) {

		l = new LoginPageObjects();

		enterText(l.getTxtEmail(), user);
		enterText(l.getTxtPass(), pass);
	}

	@When("user click login button")
	public void user_click_login_button() {
		clickElement(l.getBtnLogin());
		pauseExecution(3000);
	}

	@Then("user sees the results based on {string}")
	public void user_sees_the_results_based_on(String type) {

		pauseExecution(3000);

		l = new LoginPageObjects();

		if (type.equals("negative")) {
			verifyPresenceOfAndElement(l.getTxtErrorMessage(), "Error message not displayed for invalid login");

		} else {
			h = new HomePageObjects();

			verifyPresenceOfAndElement(h.getTxtHomePage(), "Expected home page is not displayed");

		}
	}

	@When("user enter username and password")
	public void user_enter_username_and_password(DataTable d) {

		List<Map<String, String>> list = d.asMaps();

		Map<String, String> map2 = list.get(1);

		String user = map2.get("username");

		l = new LoginPageObjects();

		enterText(l.getTxtEmail(), user);
		enterText(l.getTxtPass(), map2.get("password"));

	}

	@Then("user sees the error message for invalid login attempt")
	public void user_sees_the_error_message_for_invalid_login_attempt() {

		verifyPresenceOfAndElement(l.getTxtErrorMessage(), "Error message not displayed for invalid login");
	}

}
