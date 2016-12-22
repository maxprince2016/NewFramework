package step_Definitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import modules.TestBase;
import pageObjects.HomePage;
import pageObjects.LoginPage;

public class Login extends TestBase{
	
	WebDriver driver = getDriver();
	
	@When("^I enter email \"([^\"]*)\" details$")
	public void i_enter_email_details(String email) throws Throwable {
		LoginPage loginpage = PageFactory.initElements(driver, LoginPage.class);
		loginpage.type_email_address(email);
		}

	@When("^I enter password \"([^\"]*)\" details$")
	public void i_enter_password_details(String password) throws Throwable {
		LoginPage loginpage = PageFactory.initElements(driver, LoginPage.class);
		loginpage.type_password(password);
	
	}

	@When("^I click signin button$")
	public void i_click_signin_button() throws Throwable {
		LoginPage loginpage = PageFactory.initElements(driver, LoginPage.class);
		loginpage.click_sign_in();  
	}

	@Then("^I verify that I am logged in$")
	public void i_verify_that_I_am_logged_in() throws Throwable {
		HomePage homepage = PageFactory.initElements(driver, HomePage.class);
		homepage.check_logout_visible();
	  
	}

	@Then("^I log out$")
	public void i_log_out() throws Throwable {
		HomePage homepage = PageFactory.initElements(driver, HomePage.class);
		homepage.click_logout();
	  
	}

	@Then("^I close the browser$")
	public void i_close_the_browser() throws Throwable {
		driver.close();
	
	}
	
	@Then("^I see an error message$")
	public void i_see_an_error_message() throws Throwable {
		LoginPage loginpage = PageFactory.initElements(driver, LoginPage.class);
		loginpage.check_error_message();
	}
	    


}
