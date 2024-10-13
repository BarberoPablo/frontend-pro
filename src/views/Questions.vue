<template>
  <div class="flex flex-col h-full max-h-[80%] items-center px-auto py-4 space-y-4">
    <h2 class="text-4xl font-semibold font-virgil">{{ questions[questionIndex].question }}</h2>

    <div class="flex flex-row justify-center gap-4">
      <button
        v-for="(question, index) in questions"
        :key="question.question"
        :class="[
          'rounded-[50%] w-14 h-6 border-2 border-foreground',
          index === questionIndex ? 'bg-myDarkBlue border-myLightBlue' : 'bg-transparent',
        ]"
        @click="changeQuestion(index)"
      ></button>
    </div>

    <div v-if="revealAnswer" class="border-4 border-foreground rounded-sm w-full h-full">
      <component :is="answer" />
    </div>
    <button class="w-full h-full" v-else @click="revealAnswer = true">Reveal asnwer</button>
  </div>

  <div class="flex w-full justify-center gap-10">
    <button
      @click="handleAnswer('wrong')"
      class="p-2 rounded-sm border-2 border-myLightRed text-myLightRed bg-myDarkRed w-[100px] h-[56px]"
    >
      X
    </button>
    <button
      @click="handleAnswer('skipped')"
      class="p-2 rounded-sm border-2 border-myLightBlue text-myLightBlue bg-myDarkBlue w-[100px] h-[56px]"
    >
      skip
    </button>
    <button
      @click="handleAnswer('right')"
      class="p-2 rounded-sm border-2 border-myLightGreen text-myLightGreen bg-myDarkGreen w-[100px] h-[56px]"
    >
      ✓
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { topics } from "../data/topics";
import { useAnswersStore } from "../store/store";
import { Answer, Topic } from "../types/topics";

const route = useRoute();
const router = useRouter();

const topic = route.params.topic as Topic;
const questionIndex = ref(Number(route.query.q) || 0);
const questions = topics[topic]?.questions;
const answer = computed(() => questions[questionIndex.value].answer);
const revealAnswer = ref(false);
const store = useAnswersStore();

watch(questionIndex, (newIndex) => {
  revealAnswer.value = false;
  router.push({ params: { topic }, query: { q: newIndex } });
});

const changeQuestion = (newQuestionIndex: number) => {
  questionIndex.value = newQuestionIndex;
};

const handleAnswer = (answer: Answer) => {
  console.log("Handling answer:", answer);
  store.addAnswer(topic, questionIndex.value, answer);
  console.log("Current store state:", store.$state); // Ver el estado actual
  questionIndex.value++;
};
</script>

<style scoped></style>
