<template>
  <section class="flex flex-col w-4/5 md:w-2/5 pl-8">
    <p class="text-darkRose text-4xl tracking-wide" style="font-family: Zeyada;">
      {{ $t("workflow_headline")}}
    </p>
    <p class="text-golden font-sans text-sm pb-4 ">
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
        <ul
        class="list-disc text-rose ml-4"
        >
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow_research_bullets_1") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
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
        class="list-disc text-rose ml-4"
        >
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow_empathy_bullets_1") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow_empathy_bullets_2") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
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
        class="list-disc text-rose ml-4"
        >
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow_design_bullets_1") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow_design_bullets_2") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow_design_bullets_3") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow_design_bullets_4") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow_design_bullets_5") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
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
        class="list-disc text-rose ml-4"
        >
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow_doc_bullets_1") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow_doc_bullets_2") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow_doc_bullets_3") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow_doc_bullets_4") }}
          </p>
        </li>
      </ul>
      </template>
    </WorkFlowItem>
    <AsideBar :showAsideBar="true"/>
  </section>
</template>

<script setup lang="ts">
import AsideBar from '~/components/des/layout/AsideBar.vue'
import WorkFlowItem from '~/pages/des/workflow/WorkFlowItem.vue'
import { faMagnifyingGlass, faPalette, faUserFriends, faTools, faBook } from '@fortawesome/free-solid-svg-icons';

definePageMeta({
  layout: "des-layout",
})

useHead({
  title: "My workflow",
})

</script>

