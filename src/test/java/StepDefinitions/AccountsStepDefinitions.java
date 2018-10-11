package StepDefinitions;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AccountsStepDefinitions {

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
    
	@Given("^user is on Homepage$")
	 public void user_is_on_Homepage(){
		System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");
		webDriver = new ChromeDriver();
		webDriver.get("https://www.zoho.eu/crm");
	 }
	 
	@When("^title of the page is Zoho$")
	public void title_of_the_page_is_Zoho() throws Throwable {
	   String title = webDriver.getTitle();
	   assertEquals("CRM Software | Customer Relationship Management System - Zoho CRM",title);
	}
		
    @When("^user navigates to Login page$")
    public void user_navigates_to_Login_page() throws Throwable {
                 
	     webDriver.findElement(By.linkText("LOGIN")).click();	                                 
	     String title = webDriver.getTitle();
	      assertEquals("Zoho Accounts", title);                      
    }
	 
	 @Then("^User enters username and password$")
	 public void User_enters_username_and_password(DataTable credentials){
		List<List<String>> data = credentials.raw();
		webDriver.findElement(By.name("lid")).sendKeys(data.get(0).get(0));
		webDriver.findElement(By.name("pwd")).sendKeys(data.get(0).get(1));
	 }
	 
	  @Then("^user click to Login button$")
	    public void user_click_to_login_button() throws Throwable{
	    	WebElement btnLogin = webDriver.findElement(By.id("submit_but"));
	    	btnLogin.submit();
	    }
	  @Then("^user at Dasborad$")
		public void user_at_Dasborad() throws Throwable {
		  String title = webDriver.getTitle();
		  title = "Zoho CRM";
		  assertEquals("Zoho CRM", title);
		}
	  
	  @Then ("^user go to new Account page$")
	  public void user_go_to_new_Account_page() throws Throwable{
		  
		  webDriver.findElement(By.linkText("Accounts")).click();	                                 
		  String title = webDriver.getTitle();
		  assertEquals("Zoho Accounts", title); 
	  }
	  
	  @Then ("^user click to New button$")
	  public void user_click_to_New_button() throws Throwable{
		  
		WebElement btnNew = webDriver.findElement(By.className("newwhitebtn customPlusBtn"));
		btnNew.submit();				
	  }
	  
      @Then("^user enters page details  \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	  public void user_enters_page_details_and_and(DataTable dealData) throws Throwable {
    	  List<List<String>> pageValues =  dealData.raw();
 		 webDriver.findElement(By.id("Crm_Accounts_ACCOUNTNAME")).sendKeys(pageValues.get(0).get(0));
 		 webDriver.findElement(By.id("Crm_Accounts_RATING")).sendKeys(pageValues.get(0).get(1));
 		 webDriver.findElement(By.id("Crm_Accounts_PHONE")).sendKeys(pageValues.get(0).get(2));
 		 
 	//	 The table columns | accountname | rating | phone |		 
	  }
		
	  @Then("^user click to Save button$")
	  public void user_click_to_Logout_button() throws Throwable {
		  WebElement btnSave = webDriver.findElement(By.className("newwhitebtn customSaveBtn"));
		  btnSave.submit();	
	}


}
