package com.example.springbootvue.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.io.Serializable

@RestController
@RequestMapping("api/greet")
class GreetController {

    @GetMapping
    fun get(@RequestParam name: String): GreetResponse {
        val message = "Hi, ${name}!"
        return GreetResponse(message)
    }

    inner class GreetResponse(val message: String): Serializable
}


