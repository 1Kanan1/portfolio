<script lang="ts">
	let { title, children } = $props<{ title: string; children: any }>();
</script>

<section class="mb-12">
	<h2 class="text-xs font-bold tracking-widest uppercase text-slate-400 mb-6">{title}</h2>
	<div class="prose prose-slate">
		{@render children()}
	</div>
</section>
