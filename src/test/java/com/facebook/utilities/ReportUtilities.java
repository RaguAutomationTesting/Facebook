package com.facebook.utilities;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class ReportUtilities extends BaseClass{
	public static void generateJvmReport(String jpath) throws IOException {
		
		// 1. Mention the Report directory where you want to generate Jvm Report 
		File f = new File(System.getProperty("user.dir") + "\\src\\test\\resources\\Reports\\Jvm Reports");

		//2. Add Details to Report
		Configuration c = new Configuration(f, "Web App Automation");
		
		c.addClassifications("Browser name", readProperty("browser"));
		
		c.addClassifications("Build url", readProperty("sit-url"));
		
		c.addClassifications("Platform Name", "Windows");
		
		c.addClassifications("Sprint", "1");
		
		//3. Create a List and Add json file Path
		List<String> li = new ArrayList<String>();
		
		li.add(jpath);
		
		//4.Report Builder Class generate Report
		ReportBuilder r = new ReportBuilder(li, c);
		
		r.generateReports();

	}

}
