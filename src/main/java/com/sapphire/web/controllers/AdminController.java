package com.sapphire.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AdminController {
	
	/*@GetMapping("/admin")
	public ModelAndView getPage(@RequestParam(value = "error",required = false) String error, @RequestParam(value = "logout",	required = false) String logout) {
		ModelAndView view = new ModelAndView("admin");
		System.out.println("inside AdminController ");
		if (error != null) {
			view.addObject("error", "Invalid Credentials provided.");
		}

		if (logout != null) {
			view.addObject("message", "Logged out successfully.");
		}

		return view;
	}*/
}
