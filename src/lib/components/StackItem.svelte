<script lang="ts">
    import { Badge } from "$lib/components/ui/badge/index.js";
    import { getTechIcon } from "$lib/data/tech";

    let { number, category, items } = $props<{
        number: string;
        category: string;
        items: string[];
    }>();
</script>

<div
    class="grid grid-cols-1 sm:grid-cols-[200px_1fr] border-b border-border/60 last:border-0 group"
>
    <div
        class="py-4 sm:py-6 sm:pr-6 sm:border-r border-dashed border-border/60 flex items-center"
    >
        <span class="text-muted-foreground/40 font-mono text-sm mr-4"
            >{number}</span
        >
        <span class="text-foreground/80 font-medium">{category}</span>
    </div>
    <div class="pb-4 sm:py-6 sm:pl-6 flex flex-wrap gap-2 items-center">
        {#each items as item}
            {@const icon = getTechIcon(item)}
            <Badge
                variant="outline"
                class="font-normal bg-background/50 flex items-center gap-1.5 shadow-sm py-1 px-3"
            >
                {#if icon}
                    <i class="{icon} text-sm"></i>
                {/if}
                {item}
            </Badge>
        {/each}
    </div>
</div>
