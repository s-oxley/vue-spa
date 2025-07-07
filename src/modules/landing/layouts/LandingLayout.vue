<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <div>
        <a class="flex items-center gap-2 font-semibold" href="#">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
        </a>
      </div>
      <nav class="ml-auto space-x-4 flex items-center h-10 sm:space-x-6">
        <RouterLink to="/home" class="text-gray-700 hover:text-gray-900">Home</RouterLink>
        <RouterLink to="/features" class="text-gray-700 hover:text-gray-900">Features</RouterLink>
        <RouterLink to="/pricing" class="text-gray-700 hover:text-gray-900">Pricing</RouterLink>
        <RouterLink to="/contact" class="text-gray-700 hover:text-gray-900">Contact</RouterLink>
        <RouterLink to="/pokemon/2" class="text-gray-700 hover:text-gray-900">Pokemon</RouterLink>
      </nav>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <div class="flex-1 overflow-y-auto">
      <!-- <RouterView /> -->
      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </Transition>
      </router-view>
    </div>
    <!-- Fin Main -->

    <!-- Footer -->
    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center">
        © {{ new Date().getFullYear() }} Acme Corporation. Derechos reservados.
      </p>
    </footer>
    <!-- Fin Footer -->
  </div>
</template>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
