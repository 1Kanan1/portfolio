<script lang="ts">
    import Section from "$lib/components/Section.svelte";
    import CompanyGroup from "$lib/components/CompanyGroup.svelte";
    import ExperienceItem from "$lib/components/ExperienceItem.svelte";
    import ProjectItem from "$lib/components/ProjectItem.svelte";
    import StackItem from "$lib/components/StackItem.svelte";
    import * as Accordion from "$lib/components/ui/accordion/index.js";
</script>

<Section id="about" title="About">
    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
        Software Engineer focused on minimal, efficient, and beautiful web
        experiences.
    </p>
</Section>

<Section id="stack" title="Stack">
    <div class="border-y border-dashed border-border/60 mt-4">
        <StackItem
            number="01"
            category="Languages"
            items={["TypeScript", "JavaScript", "Python", "HTML5"]}
        />
        <StackItem
            number="02"
            category="Frontend"
            items={["React", "Next.js", "Tailwind CSS", "Svelte"]}
        />
        <StackItem
            number="03"
            category="Backend & Database"
            items={["Node.js", "Bun", "PostgreSQL", "MongoDB"]}
        />
        <StackItem
            number="04"
            category="Dev Tools"
            items={["Git", "GitHub", "Docker", "Figma"]}
        />
    </div>
</Section>

<Section id="experience" title="Experience">
    <Accordion.Root type="multiple" class="w-full">
        <CompanyGroup company="Andersen Lab">
            <ExperienceItem
                value="exp-1"
                role="Middle Frontend Developer"
                dates="08.2025 - present"
                description={[
                    "Develop AI Chat and AI Assistant features.",
                    "Develop Whiteboards with real-time collaboration.",
                ]}
                stack={["typescript", "react", "tailwindcss"]}
            />
            <ExperienceItem
                value="exp-2"
                role="Junior Frontend Developer"
                dates="01.2024 - 08.2025"
                description={[
                    "Develop interactive chart and analytics widgets for the Dashboard.",
                    "Implement robust frontend solutions for web and mobile platforms.",
                ]}
                stack={["typescript", "react", "redux"]}
                isLast={true}
            />
        </CompanyGroup>
    </Accordion.Root>
</Section>

<Section id="projects" title="Projects">
    <div class="flex flex-col gap-4">
        <ProjectItem
            title="Nexus"
            description="A high-performance real-time task manager with collaborative workspaces. Features optimistic UI updates and conflict resolution."
            link="https://github.com"
            stack={["Svelte 5", "TypeScript", "WebSocket"]}
        />
        <ProjectItem
            title="Aura UI"
            description="Accessible, headless component library focusing on keyboard navigation and strict ARIA patterns for modern frameworks."
            link="https://github.com"
            stack={["React", "TailwindCSS", "Radix"]}
        />
        <ProjectItem
            title="DevSpace"
            description="Minimalist writing platform for developers. Includes built-in syntax highlighting, markdown support, and seamless GitHub gist integration."
            link="https://github.com"
            stack={["Next.js", "PostgreSQL", "Prisma"]}
        />
    </div>
</Section>
