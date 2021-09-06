package com.example.springbootvue.config

import org.springframework.core.io.Resource
import org.springframework.stereotype.Service
import org.springframework.web.servlet.resource.PathResourceResolver

@Service
class SpaPageResourceResolver: PathResourceResolver() {
    override fun getResource(resourcePath: String, location: Resource): Resource? {
        val resource = super.getResource(resourcePath, location)
        return resource ?: super.getResource("index.html", location)
    }
}
