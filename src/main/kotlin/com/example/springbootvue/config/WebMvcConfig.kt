package com.example.springbootvue.config

import org.springframework.boot.autoconfigure.web.WebProperties
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer


@Configuration
class WebMvcConfig(
    private val resources: WebProperties.Resources,
    private val spaPageResourceResolver: SpaPageResourceResolver,
) : WebMvcConfigurer {

    override fun addResourceHandlers(registry: ResourceHandlerRegistry) {
        registry.addResourceHandler("/**")
            .addResourceLocations(*resources.staticLocations)
            .resourceChain(resources.chain.isCache)
            .addResolver(spaPageResourceResolver)
    }
}
