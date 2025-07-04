<template>
  <main class="flex-1 flex items-center justify-center py-6">
    <div class="text-center">
      <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">
        Bienvenido a nuestro sitio web
      </h1>
      <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl">
        Aplicaciones de una sola página (SPA) con Vue 3 y Vite.
      </p>
      <p class="mx-auto max-w-[600px] text-gray-800 md:text-xl mt-8">Counter: {{ counter }}</p>
    </div>
  </main>
</template>

<script lang="ts" src="./HomePage.ts"></script>
