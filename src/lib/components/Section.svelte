<script lang="ts">
    let { id, title, children } = $props<{ id?: string; title?: string; children: any }>();
</script>

<section {id} class="mb-12 scroll-mt-24">
    <h2 class="text-xs font-bold tracking-widest uppercase text-slate-400 mb-6">
        {title}
    </h2>
    <div class="prose prose-slate">
        {@render children()}
    </div>
</section>
