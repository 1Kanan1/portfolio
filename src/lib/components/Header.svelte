<script lang="ts">
	import DarkModeToggle from './DarkModeToggle.svelte';
</script>

<header class="mb-12 flex justify-between items-start">
	<div>
		<h1 class="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-2">John Doe</h1>
		<p class="text-xl text-slate-600 dark:text-slate-400 mb-6">Software Engineer</p>
		<div class="flex gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
			<a href="/" class="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Home</a>
			<a href="/projects" class="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Projects</a>
			<span class="text-slate-300 dark:text-slate-700">|</span>
			<a href="#" class="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">GitHub</a>
		</div>
	</div>
	<DarkModeToggle />
</header>
