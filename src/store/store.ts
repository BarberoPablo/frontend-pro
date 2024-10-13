// stores/counter.js
import { defineStore } from "pinia";
import { Answer, Topic } from "../types/topics";
import { ref } from "vue";

type Answers = {
  [key in Topic]?: { [key: number]: Answer };
};

export const useAnswersStore = defineStore(
  "answers",
  () => {
    const answers = ref<Answers>({});

    function addAnswer(topic: Topic, index: number, answer: Answer) {
      if (!answers.value[topic]) {
        answers.value[topic] = {};
      }
      answers.value[topic][index] = answer;
    }

    return { answers, addAnswer };
  },
  { persist: true }
);
