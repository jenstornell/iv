<script setup>
import GalleryPaneButton from "./GalleryPaneButton.vue";
</script>
<template>
  <div class="flex items-center justify-between">
    <div class="flex gap-2 py-2 text-15">
      <GalleryPaneButton>
        <svg
          class="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 19h18v2H3v-2zm10-9v8h-2v-8H4l8-8 8 8h-7z" />
        </svg>
        Publicera
      </GalleryPaneButton>
      <GalleryPaneButton>
        <svg
          class="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 19h18v2H3v-2zM13 9h7l-8 8-8-8h7V1h2v8z" />
        </svg>
        Ladda ner
      </GalleryPaneButton>
      <GalleryPaneButton>
        <svg
          class="w-6 h-6 fill-current"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M572.330667 597.333333H298.666667v-85.333333h273.664l-77.994667-77.994667L554.666667 373.632 735.701333 554.666667l-60.373333 60.330666L554.666667 735.701333l-60.330667-60.373333L572.330667 597.333333zM533.333333 263.509333H853.333333a85.333333 85.333333 0 0 1 85.333334 85.333334V810.666667a85.333333 85.333333 0 0 1-85.333334 85.333333H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333333V213.333333a85.333333 85.333333 0 0 1 85.333334-85.333333h241.493333a85.333333 85.333333 0 0 1 76.117333 46.72L533.333333 263.509333z m0 85.333334a85.333333 85.333333 0 0 1-76.117333-46.72L412.202667 213.333333H170.666667v597.333334h682.666666V348.842667h-320z"
          />
        </svg>
        Flytta
      </GalleryPaneButton>
      <GalleryPaneButton>
        <svg
          class="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M13.576 17.271l-5.11-2.787a3.5 3.5 0 1 1 0-4.968l5.11-2.787a3.5 3.5 0 1 1 .958 1.755l-5.11 2.787a3.514 3.514 0 0 1 0 1.458l5.11 2.787a3.5 3.5 0 1 1-.958 1.755z"
          />
        </svg>
        Dela
      </GalleryPaneButton>
      <GalleryPaneButton>
        <svg
          class="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          />
        </svg>
        Mer
      </GalleryPaneButton>
    </div>
    <div>
      <div>1 av 20 filer valda</div>
    </div>
  </div>
</template>
