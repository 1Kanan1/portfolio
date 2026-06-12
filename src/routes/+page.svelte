<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Section from "$lib/components/Section.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import CompanyGroup from "$lib/components/CompanyGroup.svelte";
    import ExperienceItem from "$lib/components/ExperienceItem.svelte";
    import * as Accordion from "$lib/components/ui/accordion/index.js";
</script>

<Header />
<Section id="about" title="About">
    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
        Software Engineer focused on minimal, efficient, and beautiful web
        experiences.
    </p>
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
    <p class="text-slate-500 italic">Projects coming soon.</p>
</Section>
<Footer />
