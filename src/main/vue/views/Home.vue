<script setup lang="ts">
import {ref} from "vue"
import axios from "axios"

interface GreetResponse {
    message: string
}

const name = ref("")
const message = ref("")

const send = async () => {
    message.value = ""

    if (!name.value) return

    const params = {name: name.value}
    const response = await axios.get<GreetResponse>("/api/greet", {params})

    if (response) {
        message.value = response.data.message
    }
}

</script>
<template>
    <h1>This is a home page</h1>
    <div>Please enter your name.</div>
    <div><input v-model="name" /><button @click="send">greet</button></div>
    <div>{{message}}</div>
</template>
