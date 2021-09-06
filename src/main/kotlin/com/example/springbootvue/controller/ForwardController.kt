package com.example.springbootvue.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class ForwardController {
    @GetMapping("/")
    fun index() = "forward:/index.html"
}
