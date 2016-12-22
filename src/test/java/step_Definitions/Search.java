package step_Definitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import modules.TestBase;
import pageObjects.LandingPage;

public class Search extends TestBase{
	WebDriver driver = getDriver();
	
	@Given("^I am on the Homepage$")
	public void i_am_on_the_Homepage() throws Throwable {
		driver.navigate().to("http://www.carguruji.com/shop/");		  
	}

	@Given("^I click on My Account Link$")
	public void i_click_on_My_Account_Link() throws Throwable {
		
		LandingPage landingpage = PageFactory.initElements(driver, LandingPage.class);
		landingpage.click_my_account();
	
	}

	@Given("^I see a welcome message$")
	public void i_see_a_welcome_message() throws Throwable {
	    String ExpectedMessage = "Welcome, Please Sign In";
	    String ActualMessage  = driver.findElement(By.xpath("//*[@id='bodyContent']/h1")).getText();
	    System.out.println(ActualMessage);
	    Assert.assertEquals(ExpectedMessage, ActualMessage);
		}
	

@Given("^I type \"([^\"]*)\" in the search widget$")
public void i_type_in_the_search_widget(String product) throws Throwable {
	LandingPage landingpage = PageFactory.initElements(driver, LandingPage.class);
	landingpage.type_into_quickSearch(product);

}

@Given("^I click the search icon$")
public void i_click_the_search_icon() throws Throwable {
	LandingPage landingpage = PageFactory.initElements(driver, LandingPage.class);
	landingpage.click_searchIcon();
 
}

  @Then("^I see Product name displayed$")
  public void i_see_Product_name_displayed() throws Throwable {
	  driver.findElement(By.linkText("Product Name+")).isDisplayed();
    
  }

}
