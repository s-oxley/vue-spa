<template>
  <div>
    <main class="flex-1 flex items-center justify-center py-6">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl mt-12">
          Bienvenido a nuestro sitio web
        </h1>
        <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl">
          Aplicaciones de una sola página (SPA) con Vue 3 y Vite.
        </p>
        <p class="mx-auto max-w-[600px] text-gray-800 md:text-xl mt-8">Counter: {{ counter }}</p>
        <button
          class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          @click="counter++"
        >
          Incrementar contador
        </button>
      </div>
    </main>
  </div>
</template>

<script lang="ts" src="./HomePage.ts"></script>
