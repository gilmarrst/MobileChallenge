package br.com.MobileProductChallenge.util;

import java.net.URL;

import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.MobileDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class DriverContext {

	private static MobileDriver<MobileElement> driver = null;

	public static MobileDriver<MobileElement> getDriver() {
		return driver;
	}

	public static void setDriver(URL url,DesiredCapabilities desiredCapabilities) {
		if(driver == null)
		{
			driver = new AndroidDriver<MobileElement>(url,desiredCapabilities);
		}
		else
		{
			System.out.println("Driver já inicializado");
		}
	}
}
