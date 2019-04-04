package com.sapphire.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class BaseController {

	@GetMapping("/index")
	public String hello() {
		
		return "index";
	}
	
	@GetMapping("/admin")
	public String admin() {
		
		return "admin";
	}
}
