<template>
    <div class="w-full md:w-3/5">
        <p class="pl-8 text-darkRose font-medium text-4xl tracking-wide" style="font-family: Zeyada;">
            {{ $t("cv_title") }}
        </p>
        <!-- <a class="text-golden text-xs hover:text-darkRose hover:border-b hover:border-darkRose transition-all" href="/images/cv_piaroelj.pdf" target="_blank">
            - Download as PDF
        </a> -->
        <Event :icon="faPlane" class="flex flex-col place-self-start my-8">
            <template #date>
                {{ $t("cv_event_1_date") }}
            </template>
            <template #title>
                {{ $t("cv_event_1_title") }}
            </template>
            <template #description>
                {{ $t("cv_event_1_description") }}
            </template>
            <template #techSkills>
                {{ $t("cv_event_1_techskills") }}
            </template>
            <template #testimony>
                {{ $t("cv_event_1_testimony") }}
            </template>
        </Event>
        <Event :icon="faSprayCan" class="flex flex-col my-8">
            <template #date>
                {{ $t("cv_event_2_date") }}
            </template>
            <template #title>
                {{ $t("cv_event_2_title") }}
            </template>
            <template #description>
                {{ $t("cv_event_2_description") }}
            </template>
            <template #techSkills>
                {{ $t("cv_event_2_techskills") }}
            </template>
            <template #testimony>
                {{ $t("cv_event_2_testimony") }}
            </template>
        </Event>
        <Event :icon="faPlane" class="flex flex-col my-8">
            <template #date>
                {{ $t("cv_event_3_date") }}
            </template>
            <template #title>
                {{ $t("cv_event_3_title") }}
            </template>
            <template #description>
                {{ $t("cv_event_3_description") }}
            </template>
            <template #techSkills>
                {{ $t("cv_event_3_techskills") }}
            </template>
            <template #testimony>
                {{ $t("cv_event_3_testimony") }}
            </template>
        </Event>
        <Event :icon="faChair" class="flex flex-col my-8">
            <template #date>
                {{ $t("cv_event_1_date") }}
            </template>
            <template #title>
                {{ $t("cv_event_4_title") }}
            </template>
            <template #description>
                {{ $t("cv_event_4_description") }}
            </template>
            <template #techSkills>
                {{ $t("cv_event_4_techskills") }}
            </template>
            <template #testimony>
                {{ $t("cv_event_4_testimony") }}
            </template>
        </Event>
        <Event :icon="faTractor" class="flex flex-col my-8">
            <template #date>
                {{ $t("cv_event_5_date") }}
            </template>
            <template #title>
                {{ $t("cv_event_5_title") }}
            </template>
            <template #description>
                {{ $t("cv_event_5_description") }}
            </template>
            <template #techSkills>
                {{ $t("cv_event_5_techskills") }}
            </template>
            <template #testimony>
                {{ $t("cv_event_5_testimony") }}
            </template>
        </Event>
        <Event :icon="faPlane" class="flex flex-col my-8">
            <template #date>
                {{ $t("cv_event_6_date") }}
            </template>
            <template #title>
                {{ $t("cv_event_6_title") }}
            </template>
            <template #description>
                {{ $t("cv_event_6_description") }}
            </template>
            <template #techSkills>
                {{ $t("cv_event_6_techskills") }}
            </template>
            <template #testimony>
                {{ $t("cv_event_6_testimony") }}
            </template>
        </Event>
        <Event :icon="faBuilding" class="flex flex-col my-8">
            <template #date>
                {{ $t("cv_event_7_date") }}
            </template>
            <template #title>
                {{ $t("cv_event_7_title") }}
            </template>
            <template #description>
                {{ $t("cv_event_7_description") }}
            </template>
            <template #techSkills>
                {{ $t("cv_event_7_techskills") }}
            </template>
            <template #testimony>
                {{ $t("cv_event_7_testimony") }}
            </template>
        </Event>
        <Event :icon="faSquareEnvelope" class="flex flex-col my-8">
            <template #date>
                {{ $t("cv_event_8_date") }}
            </template>
            <template #title>
                {{ $t("cv_event_8_title") }}
            </template>
            <template #description>
                {{ $t("cv_event_8_description") }}
            </template>
            <template #techSkills>
                {{ $t("cv_event_8_techskills") }}
            </template>
            <template #testimony>
                {{ $t("cv_event_8_testimony") }}
            </template>
        </Event>
        <Event :icon="faBook" class="flex flex-col my-8">
            <template #date>
                {{ $t("cv_event_9_date") }}
            </template>
            <template #title>
                {{ $t("cv_event_9_title") }}
            </template>
            <template #description>
                {{ $t("cv_event_9_description") }}
            </template>
            <template #techSkills>
                {{ $t("cv_event_9_techskills") }}
            </template>
            <template #testimony>
                {{ $t("cv_event_9_testimony") }}
            </template>
        </Event>
        <Event :icon="faGraduationCap" class="flex flex-col my-8">
            <template #date>
                {{ $t("cv_event_10_date") }}
            </template>
            <template #title>
                {{ $t("cv_event_10_title") }}
            </template>
            <template #description>
                {{ $t("cv_event_10_description") }}
            </template>
        </Event>
        <AsideBar :showAsideBar="true"/>
    </div>
</template>

<script setup lang="ts">
import AsideBar from '~/components/des/layout/AsideBar.vue'
import Event from '@/components/generic/cv/Event.vue'
import { faBook, faBuilding, faChair, faGraduationCap, faPlane, faSprayCan, faSquareEnvelope, faTractor } from '@fortawesome/free-solid-svg-icons';

definePageMeta({
  layout: "des-layout",
})

useHead({
  title: "Portfolio",
})

// const events = ref([
//     { 
//         id: 1, date: 'MAR 21 - JUN 24',
//         title: 'Digital Designer & Frontend Developer at Makin3D/Kinematic', icon: 'fa-solid fa-code',
//         description: 'UI/UX designer and Frontend developer at Kinematic, software development of machine control systems.',
//         techSkills: ' Vue 3, NUXT, Piñia, TailwindCSS, CSS, Adobe, Jira',
//         testimony: 'Pia juggles many different types of tasks and is very popular as a collegue'
//     },
//     { 
//         id: 2, date: 'FEB 20 - MAR 21',
//         title: 'CORONA JOB HUNT', icon: 'fa-solid fa-mask-face',
//         description: 'A combination of job hunting, home schooling with daughters, while keeping up coding skills', 
//         techSkills: 'Vue 2, VUEX, Angular 9, SCSS, JS, Adobe',
//         testimony: 'Mommy is the best!' 
//     },
//     { 
//         id: 3, date: '2018 - JAN 20', 
//         title: 'Pba in Web Development at UCL in Odense w/ internship at BeautyCos webshop', icon: 'fa-solid fa-spray-can', 
//         description: 'Finishing with a grade of 12 in BA group project ShortFlix, a members only site for film makers.', 
//         techSkills: 'Vue 2, VUEX, C#, Xamarin apps, HTML/ SCSS/JS, & e-commerce',
//         testimony: 'If there is anything Pia doesn´t know how to do, she will figure it out anyway' 
//     },
//     { 
//         id: 4, date: '2016 - 18', 
//         title: 'Study Multimediadesign at UCL w/Internship at Farstrup Furniture.', icon: 'fa-solid fa-chair', 
//         description: 'Web-optimization, copywriting, & graphic design', 
//         techSkills: 'HTML, CSS, JS, Wordpress, Adobe',
//         testimony: 'When it comes to working efficiently and responsibly Pia has done a terrific job. Her creativity shines through in several, professionel-looking, marketing material, and our website´s ”stickyness” has improved a lot'
//     },
//     { 
//         id: 5, date: '2013 - 16', 
//         title: 'Technical designer at Kverneland Group, Kerteminde', icon: 'fa-solid fa-tractor', 
//         description: '2D drafting and BOM-lists for mechanical devices, 3D modelling and assembly, documentation, CAD-supporter.', 
//         techSkills: 'SAP, Siemens NX, Teamcenter, CAD',
//         testimony: 'Pia has managed to stand out from the traditional role as a technical designer, and has done so much more than what can normally be expected'
//     },
//     { 
//         id: 6, date: '2007 - 13', 
//         title: 'Graphic- & Technical designer at Naviair', icon: 'fa-solid fa-plane', 
//         description: '3D modelling for tower simulator, 2D airspace planning maps, documentation', 
//         techSkills: 'AutoCAD, Microstation, Adobe',
//         testimony: 'The independent work from Pia has always resulted in products of highest quality'
//     },
//     { 
//         id: 7, date: '2002 - 07', 
//         title: 'In this period of time I study to become a technical designer and end up where I had my internship, Damgaard Rådgivende Ing.', icon: 'fa-solid fa-building', 
//         description: '2D drafting, CAD-adm., & marketing support', 
//         techSkills: 'AutoCAD, Adobe',
//         testimony: 'It has always been a pleasure having Pia onboard the team, since an independent effort could then be expected. We have had the pleasure of Pia´s creativity and she is very popular as a collegue'
//     },
//     { 
//         id: 8, date: '1996 - 02', 
//         title: 'In this period of time I work with customer service and marketing in three different companies', icon: 'fa-solid fa-envelopes-bulk', 
//         description: 'Customer support, order expeditions, accounting, IT support for end users', 
//         techSkills: 'Navision, Avery Label program',
//         testimony: 'Pia has a talent for talking to customers, she is well-spoken, and she is good at getting a start on assignments'
//     },
//     { 
//         id: 9, date: '1994 - 96', 
//         title: 'Frederiksberg Studenterkursus', icon: 'fa-solid fa-book', 
//         description: 'Single Course Student education in math/english/ spanish', 
//         techSkills: '',
//         testimony: ''
//     },
//     { 
//         id: 10, date: '1993 - 94', 
//         title: 'A year abroud in the US', icon: 'fa-solid fa-graduation-cap', 
//         description: 'High School exchange student at Cleveland Heights High in Ohio', 
//         techSkills: '',
//         testimony: ''
//     }
// ])
</script>