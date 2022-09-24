import React from "react"
import { GetStaticProps } from "next"
import { Achievement, Experience, PageInfo, Project, Skill, Social } from "../../typings"
import About from "../components/sections/about/About"
import Skills from "../components/sections/skills/Skills"
import Achievements from "../components/sections/achievements/Achievements"
import Projects from "../components/sections/projects/Projects"
import Nav from "../components/header/Nav"
import {
    fetchAchievements,
    fetchExperiences,
    fetchPageInfo,
    fetchProjects,
    fetchSkills,
    fetchSocials,
} from "../lib/sanity"
import ContactMe from "../components/sections/contact/ContactMe"

type ScriptProps = {
    pageInfo: PageInfo
    experiences: Experience[]
    skills: Skill[]
    projects: Project[]
    socials: Social[]
    achievements: Achievement[]
}

export default function Home({
    pageInfo,
    experiences,
    skills,
    projects,
    socials,
    achievements,
}: ScriptProps) {
    // if (typeof window !== "undefined") {
    //     const fadeUpObserver = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 entry.target.classList.toggle("faded", entry.isIntersecting)
    //                 if (entry.isIntersecting) fadeUpObserver.unobserve(entry.target)
    //             })
    //         },
    //         { threshold: 0.4 }
    //     )

    //     document.querySelectorAll(".fade-up").forEach((item) => {
    //         fadeUpObserver.observe(item)
    //     })
    // }

    return (
        <div className="h-screen snap-y overflow-x-hidden overflow-y-scroll scrollbar-hide">
            <Nav socials={socials} />
            <section id="about">
                <About pageInfo={pageInfo} />
            </section>
            <section id="projects">
                <Projects projects={projects} />
            </section>
            <section id="skills">
                <Skills skills={skills} />
            </section>
            <section id="achievements">
                <Achievements achievements={achievements} />
            </section>
            <section id="contact">
                <ContactMe />
            </section>
        </div>
    )
}

export const getStaticProps: GetStaticProps<ScriptProps> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo()
    const experiences: Experience[] = await fetchExperiences()
    const skills: Skill[] = await fetchSkills()
    const projects: Project[] = await fetchProjects()
    const socials: Social[] = await fetchSocials()
    const achievements: Achievement[] = await fetchAchievements()
    return {
        props: {
            pageInfo,
            experiences,
            skills,
            projects,
            socials,
            achievements,
        } as ScriptProps,
        //next.js will attempt to re-generate the page:
        // - when request comes in
        // - At most one every 10 seconds
        revalidate: 10,
    }
}
