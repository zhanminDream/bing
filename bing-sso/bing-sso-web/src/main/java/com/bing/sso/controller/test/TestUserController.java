package com.bing.sso.controller.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bing.sso.service.test.TestUserFindService;
import com.bing.sso.service.test.TestUserService;

@Controller
public class TestUserController {
	
	@Autowired
	private TestUserService testUserService;
	
	@Autowired
	private TestUserFindService testUserFindService;
	
	@RequestMapping("/saveUser")
	public void saveUser(){
		//testUserFindService.findUserById();
		testUserService.saveUser();
	}
	
	@RequestMapping("/")
	public String index() {
		return "/index/index";
	}
	
}
