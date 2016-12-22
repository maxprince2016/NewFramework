package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class HomePage {
	
	@FindBy(how=How.LINK_TEXT, using="Log Off")
	public static WebElement log_off;
	
	
	public void check_logout_visible(){
		log_off.isDisplayed();
	}
	
	public void click_logout(){
		log_off.click();
	}
	

}
