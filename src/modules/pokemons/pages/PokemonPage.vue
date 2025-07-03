<template>
  <section class="flex flex-col">
    <h1 class="text-3xl font-semibold">
      Pokemón<small class="text-blue-600"> # {{ id }}</small>
    </h1>
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
      alt="Pokémon 100"
      class="w-[200px] h-[200px] mt-5"
    />
    <RouterLink
      :to="{ name: 'pokemon', params: { id: id + 1 } }"
      class="text-white text-center bg-blue-500 hover:bg-blue-700 p-2 mt-5 rounded w-[150px]"
    >
      Next Pokémon
    </RouterLink>
  </section>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';

interface Properties {
  id: number;
}
const { id } = defineProps<Properties>();
</script>
