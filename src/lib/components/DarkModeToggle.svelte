<script lang="ts">
    import Sun from "@lucide/svelte/icons/sun";
    import Moon from "@lucide/svelte/icons/moon";
    import { toggleMode, mode } from "mode-watcher";
    import { Button } from "$lib/components/ui/button/index.js";
    import { fly } from "svelte/transition";
    import { backOut } from "svelte/easing";

    function handleToggle() {
        if (!document.startViewTransition) {
            toggleMode();
            return;
        }
        document.startViewTransition(() => {
            toggleMode();
        });
    }
</script>

<Button
    onclick={handleToggle}
    variant="outline"
    size="icon"
    class="relative overflow-hidden"
>
    {#if mode.current === "dark"}
        <div
            in:fly={{ y: 20, duration: 400, easing: backOut }}
            out:fly={{ y: -20, duration: 200 }}
            class="absolute flex items-center justify-center"
        >
            <Moon class="h-[1.2rem] w-[1.2rem]" />
        </div>
    {:else}
        <div
            in:fly={{ y: 20, duration: 400, easing: backOut }}
            out:fly={{ y: -20, duration: 200 }}
            class="absolute flex items-center justify-center"
        >
            <Sun class="h-[1.2rem] w-[1.2rem]" />
        </div>
    {/if}
    <span class="sr-only">Toggle theme</span>
</Button>
