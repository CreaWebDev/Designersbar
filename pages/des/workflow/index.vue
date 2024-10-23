<template>
  <section class="flex flex-col w-full pl-8">
    <p class="text-darkRose text-4xl tracking-wide" style="font-family: Zeyada;">
      {{ $t("workflow.headline")}}
    </p>
    <p class="text-golden font-sans text-sm pb-4 ">
      {{ $t("workflow.subText")}}
    </p>
    <WorkFlowItem :icon="faMagnifyingGlass" > 
      <template #title>
        {{ $t("workflow.research_title") }}
      </template>
      <template #text>
        {{ $t("workflow.research_text") }}
      </template>
      <template #bullets>
        <ul
        class="list-disc text-rose ml-4"
        >
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow.research_bullets_1") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow.research_bullets_2") }}
          </p>
        </li>
      </ul>
      </template>
    </WorkFlowItem>

    <WorkFlowItem :icon="faUserFriends" > 
      <template #title>
        {{ $t("workflow.empathy_title") }}
      </template>
      <template #text>
        {{ $t("workflow.empathy_text") }}
      </template>
      <template #bullets>
        <ul
        class="list-disc text-rose ml-4"
        >
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow.empathy_bullets_1") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow.empathy_bullets_2") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow.empathy_bullets_3") }}
          </p>
        </li>
      </ul>
      </template>
    </WorkFlowItem>

    <WorkFlowItem :icon="faPalette" > 
      <template #title>
        {{ $t("workflow.design_title") }}
      </template>
      <template #text>
        {{ $t("workflow.design_text") }}
      </template>
      <template #bullets>
        <ul
        class="list-disc text-rose ml-4"
        >
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow.design_bullets_1") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow.design_bullets_2") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow.design_bullets_3") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow.design_bullets_4") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow.design_bullets_5") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow.design_bullets_6") }}
          </p>
        </li>
      </ul>
      </template>
    </WorkFlowItem>

    <WorkFlowItem :icon="faTools" > 
      <template #title>
        {{ $t("workflow.craft_title") }}
      </template>
      <template #text>
        {{ $t("workflow.craft_bullets") }}
      </template>
    </WorkFlowItem>

    <WorkFlowItem :icon="faBook" > 
      <template #title>
        {{ $t("workflow.doc_title") }}
      </template>
      <template #text>
        {{ $t("workflow.doc_text") }}
      </template>
      <template #bullets>
        <ul
        class="list-disc text-rose ml-4"
        >
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow.doc_bullets_1") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow.doc_bullets_2") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow.doc_bullets_3") }}
          </p>
        </li>
        <li>
          <p class="text-sans text-golden text-sm">
            {{ $t("workflow.doc_bullets_4") }}
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

