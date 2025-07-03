<template>
  <section>
    <h1 class="text-2xl font-semibold mb-4">Registro</h1>
    <form action="#" method="POST">
      <!-- Username Input -->
      <div class="mb-4">
        <label for="name" class="block text-gray-600">Nombre completo</label>
        <input
          type="text"
          id="name"
          name="name"
          class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          autocomplete="off"
        />
      </div>
      <!-- Username Input -->
      <div class="mb-4">
        <label for="username" class="block text-gray-600">Usuario</label>
        <input
          type="text"
          id="username"
          name="username"
          class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          autocomplete="off"
        />
      </div>
      <!-- Password Input -->
      <div class="mb-4">
        <label for="password" class="block text-gray-600">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          autocomplete="off"
        />
      </div>
      <!-- Repeat Password Input -->
      <div class="mb-4">
        <label for="repeatPassword" class="block text-gray-600">Repetir contraseña</label>
        <input
          type="password"
          id="repeatPassword"
          name="repeatPassword"
          class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          autocomplete="off"
        />
      </div>
      <!-- Login Button -->
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full mt-8"
      >
        Crear cuenta
      </button>
    </form>
    <!-- Sign up  Link -->
    <div class="mt-6 text-blue-500 text-center">
      <RouterLink :to="{ name: 'login' }" class="hover:underline"> Ya tengo una cuenta </RouterLink>
    </div>
  </section>
</template>
