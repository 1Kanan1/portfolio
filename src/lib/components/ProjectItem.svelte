<script lang="ts">
    import { Badge } from "$lib/components/ui/badge/index.js";
    import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";

    let {
        title,
        description,
        link,
        stack = [],
    } = $props<{
        title: string;
        description: string;
        link?: string;
        stack?: string[];
    }>();
</script>

<div
    class="group relative flex flex-col gap-2 rounded-xl transition-all hover:bg-muted/50 p-4 -mx-4"
>
    <div class="flex items-center justify-between">
        <h3
            class="font-bold text-lg text-foreground group-hover:text-primary transition-colors flex items-center gap-1"
        >
            {#if link}
                <a
                    href={link}
                    target="_blank"
                    class="after:absolute after:inset-0"
                >
                    {title}
                </a>
                <ArrowUpRight
                    class="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                />
            {:else}
                {title}
            {/if}
        </h3>
    </div>
    <p class="text-sm text-muted-foreground leading-relaxed">
        {description}
    </p>
    {#if stack.length > 0}
        <div class="flex flex-wrap gap-2 mt-2">
            {#each stack as tech}
                <Badge
                    variant="secondary"
                    class="font-normal font-mono text-xs"
                >
                    <i class="devicon-{tech.replace(/[.-]/g, '')}-plain colored"
                    ></i>
                    {tech}</Badge
                >
            {/each}
        </div>
    {/if}
</div>
