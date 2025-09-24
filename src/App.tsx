
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </Layout>
  );
}

export default App;
