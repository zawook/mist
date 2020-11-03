package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloSpringBootController {
	@RequestMapping("/")
	public String helloworld() {
		return "Hello Spring Boot";
	}
}
