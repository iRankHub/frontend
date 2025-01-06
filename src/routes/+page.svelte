<script lang="ts">
  import { isDesktop } from '$lib/config/environment';

  let message = $state("Hello from " + (isDesktop() ? "Desktop" : "Web") + " App!");
</script>

<div class="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
  <div class="rounded-lg bg-white p-8 shadow-lg">
    <h1 class="text-3xl font-bold text-gray-900">{message}</h1>
    <p class="mt-2 text-gray-600">
      Running in {isDesktop() ? 'desktop' : 'web'} mode
    </p>
  </div>
</div>