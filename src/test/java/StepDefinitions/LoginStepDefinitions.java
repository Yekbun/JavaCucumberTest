package StepDefinitions;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinitions {
	
	WebDriver webDriver;

	@Before
    public void beforeScenario() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");
		webDriver = new ChromeDriver();
	}

    @After
    public void afterScenario() {
    	webDriver.close();
    }

	    
	@Given("^user is on homepage$")
	public void user_is_on_homepage() throws Throwable {
		webDriver.get("https://www.zoho.eu/crm");
	}

	@When("^title of the page is zoho$")
	public void title_of_the_page_is_zoho() throws Throwable {
	   String title = webDriver.getTitle();
	   System.out.println(title);
	   assertEquals("CRM Software | Customer Relationship Management System - Zoho CRM",title);
	}
		
    @When("^user navigates to login page$")
    public void user_navigates_to_login_page() throws Throwable {
                 
	     webDriver.findElement(By.linkText("LOGIN")).click();	                                 
	     String title = webDriver.getTitle();
	     System.out.println(title);
	     assertEquals("Zoho Accounts", title);                      
    }
    
    @Then("^user enters \"(.*)\" and \"(.*)\"$")
	 public void user_enters_username_and_password(String username, String password){
    	webDriver.findElement(By.name("lid")).sendKeys(username);
    	webDriver.findElement(By.name("pwd")).sendKeys(password);
	 }   
	
    @Then("^user click to login button$")
    public void user_click_to_login_button() throws Throwable{
    	WebElement btnLogin = webDriver.findElement(By.id("submit_but"));
    	btnLogin.submit();
    }
    
	@Then("^user at dasborad$")
	public void user_at_dasborad() throws Throwable {
	  String title = webDriver.getTitle();
	  title = "Zoho CRM";
	  assertEquals("Zoho CRM", title);
	}

	
}
