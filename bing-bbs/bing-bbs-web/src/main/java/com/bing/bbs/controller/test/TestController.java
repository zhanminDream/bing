package com.bing.bbs.controller.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bing.bbs.pojo.test.Test;
import com.bing.bbs.service.test.TestService;

@RequestMapping("/test")
@Controller
public class TestController {
	
	@Autowired
	private TestService testService;
	
	@RequestMapping("/save")
	@ResponseBody
	public String save() throws Exception {
		return testService.saveTest(new Test()) + "";
	}

}
