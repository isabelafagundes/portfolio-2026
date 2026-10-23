import { LiquidBackground } from './components/LiquidBackground'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Stack } from './components/Stack'
import { Contact } from './components/Contact'
import { ProjectPage } from './components/ProjectPage'
import { projectBySlug } from './i18n/projects'
import { useReveal } from './hooks/useReveal'
import { useRouter } from './router'

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Stack />
      <Contact />
    </main>
  )
}

export default function App() {
  useReveal()
  const { path } = useRouter()
  const slug = path.match(/^\/projetos\/([\w-]+)\/?$/)?.[1]
  const project = slug ? projectBySlug(slug) : undefined

  return (
    <>
      <LiquidBackground />
      <Nav />
      {project ? <ProjectPage key={project.slug} project={project} /> : <Home />}
    </>
  )
}
