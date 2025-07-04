<template>
  <div class="md:mt-12 px-4 md:px-12">
    <div class="flex space-x-2 md:space-x-4 text-textSoft opacity-75 text-3xl md:text-6xl tracking-wide">
      my workflow
    </div>
    <p class="text-textSoft font-sans text-lg pb-4 ">
      {{ $t("workflow_subText")}}
    </p>
    <WorkFlowItem :icon="faMagnifyingGlass" > 
      <template #title>
        {{ $t("workflow_research_title") }}
      </template>
      <template #text>
        {{ $t("workflow_research_text") }}
      </template>
      <template #bullets>
        <ul class="list-disc text-softRose ml-4">
        <li>
          <p class="text-sans text-textSoft text-md">
            {{ $t("workflow_research_bullets_1") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-textSoft text-md">
            {{ $t("workflow_research_bullets_2") }}
          </p>
        </li>
      </ul>
      </template>
    </WorkFlowItem>

    <WorkFlowItem :icon="faUserFriends" > 
      <template #title>
        {{ $t("workflow_empathy_title") }}
      </template>
      <template #text>
        {{ $t("workflow_empathy_text") }}
      </template>
      <template #bullets>
        <ul
        class="list-disc text-softRose ml-4"
        >
        <li>
          <p class="text-sans text-textSoft text-md">
            {{ $t("workflow_empathy_bullets_1") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-textSoft text-md">
            {{ $t("workflow_empathy_bullets_2") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-textSoft text-md">
            {{ $t("workflow_empathy_bullets_3") }}
          </p>
        </li>
      </ul>
      </template>
    </WorkFlowItem>

    <WorkFlowItem :icon="faPalette" > 
      <template #title>
        {{ $t("workflow_design_title") }}
      </template>
      <template #text>
        {{ $t("workflow_design_text") }}
      </template>
      <template #bullets>
        <ul
        class="list-disc text-softRose ml-4"
        >
        <li>
          <p class="text-sans text-textSoft text-md">
            {{ $t("workflow_design_bullets_1") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-textSoft text-md">
            {{ $t("workflow_design_bullets_2") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-textSoft text-md">
            {{ $t("workflow_design_bullets_3") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-textSoft text-md">
            {{ $t("workflow_design_bullets_4") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-textSoft text-md">
            {{ $t("workflow_design_bullets_5") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-textSoft text-md">
            {{ $t("workflow_design_bullets_6") }}
          </p>
        </li>
      </ul>
      </template>
    </WorkFlowItem>

    <WorkFlowItem :icon="faTools" > 
      <template #title>
        {{ $t("workflow_craft_title") }}
      </template>
      <template #text>
        {{ $t("workflow_craft_bullets") }}
      </template>
    </WorkFlowItem>

    <WorkFlowItem :icon="faBook" > 
      <template #title>
        {{ $t("workflow_doc_title") }}
      </template>
      <template #text>
        {{ $t("workflow_doc_text") }}
      </template>
      <template #bullets>
        <ul
        class="list-disc text-softRose ml-4"
        >
        <li>
          <p class="text-sans text-textSoft text-md">
            {{ $t("workflow_doc_bullets_1") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-textSoft text-md">
            {{ $t("workflow_doc_bullets_2") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-textSoft text-md">
            {{ $t("workflow_doc_bullets_3") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-textSoft text-md">
            {{ $t("workflow_doc_bullets_4") }}
          </p>
        </li>
      </ul>
      </template>
    </WorkFlowItem>
  </div>
</template>

<script setup lang="ts">
import WorkFlowItem from '~/components/workflow/WorkFlowItem.vue'
import { faMagnifyingGlass, faPalette, faUserFriends, faTools, faBook } from '@fortawesome/free-solid-svg-icons';

definePageMeta({
  layout: "main-layout",
})

useHead({
  title: "My workflow",
})

</script>

