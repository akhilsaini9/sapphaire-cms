package com.sapphire.web.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
@ComponentScan({"com.sapphire.web.controllers","com.sapphire.web.config.security"})
public class SapphireCMSWebInitializer {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SpringApplication.run(SapphireCMSWebInitializer.class, args);
	}

}
