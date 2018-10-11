package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features = "src/test/java/Features"
,glue= {"StepDefinitions"}
,plugin= {"pretty","html:test-reports", "json:test-reports/json/cucumber.json", "junit:test-reports/xml/cucumber.xml"}
,monochrome = true
,strict = false
,tags ={"@FunctionalTest, ~@SmokeTest"}
)


public class TestRunner {

}
