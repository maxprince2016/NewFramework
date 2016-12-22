/**
 * 
 */
package step_Definitions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/**
 * @author Maxwell
 *
 */

@RunWith(Cucumber.class)
@CucumberOptions(
		
		format = {"pretty", "html:target/html/"},
		features = "src/test/resource",
	    tags = {"@Login"}
		//tags = {"@Register, @Login, @forgotpsw"}
		
		)
public class RunnerTest {	

}
