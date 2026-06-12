<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";

    let {
        icon = favicon,
        company,
        children,
    } = $props<{
        icon?: string;
        company: string;
        children: any;
    }>();
</script>

<div class="mb-12">
    <div class="flex items-center gap-4 mb-6">
        <img src={icon} alt="{company} logo" class="w-8 h-8 object-contain" />
        <h2 class="text-xl font-bold">{company}</h2>
    </div>
    <div class="relative ml-4 pl-8">
        {@render children()}
    </div>
</div>
