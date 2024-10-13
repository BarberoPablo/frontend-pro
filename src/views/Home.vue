<template>
  <div class="flex flex-col text-center w-full">
    <h1 className="text-4xl font-bold text-center mb-12">Web Development Topics</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <router-link v-for="[topicKey, topicValue] in Object.entries(topics)" :key="topicKey" :to="`/${topicKey}?q=0`" class="m-2">
        <div className="bg-foreground rounded-lg shadow-md p-5 cursor-pointer hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold text-center text-background">{{ topicValue.name }}</h2>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { topics } from "../data/topics";
</script>

<style scoped></style>
