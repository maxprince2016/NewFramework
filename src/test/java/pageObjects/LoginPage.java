package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
	
	@FindBy(how=How.NAME, using="email_address")
	public static WebElement email_addy;
	
	@FindBy(how=How.NAME, using="password")
	public static WebElement passw;
	
	@FindBy(how=How.ID, using="tdb5")
	public static WebElement signin_button;
	
	@FindBy(how=How.CSS, using="h1")
	public static WebElement welcome_message;
	
	@FindBy(how=How.XPATH, using="//*[@id='bodyContent']/table/tbody/tr/td")
	public static WebElement error_message;
	
	public void type_email_address(String email){
		email_addy.sendKeys(email);
	}
	
	public void type_password(String password){
		passw.sendKeys(password);
	}
	
	public void click_sign_in(){
		signin_button.click();
	}
	public void check_error_message(){
		String Message = error_message.getText();
	}
	

}
