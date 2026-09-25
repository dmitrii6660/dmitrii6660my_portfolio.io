import './App.css'
import { useState } from 'react'
import userImg from './assets/images/newUser.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const proj1Images = [heroImg, reactLogo]
  const proj2Images = [viteLogo, heroImg]
  const [proj1Index, setProj1Index] = useState(0)
  const [proj2Index, setProj2Index] = useState(0)
  const [proj1Open, setProj1Open] = useState(false)
  const [proj2Open, setProj2Open] = useState(false)

  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          <div className="brand">My Portfolio</div>
          <nav className="nav-links">
            <a href="#about-me">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <div className="main">
        <section className="profile">
          <div className="profile-image">
            <img src={userImg} alt="Profile" />
          </div>
          <div className="profile-text">
            <h2>Developer</h2>
            <p className="profile-desc">test description.</p>
          </div>
        </section>

        <section id="about-me" className='about-me'>
          <h2>About Me</h2>
          <div className="about-me-content">
            <p>I am a developer who loves building things. I enjoy learning new technologies and creating clean, user-friendly interfaces.</p>
          </div>
        </section>

        <section id="skills" className="skills">
          <h2>My skills</h2>
          <table className="skills-table">
            <tbody>
              <tr>
                <td className="skill-img"><img src={reactLogo} alt="React" /></td>
                <td className="skill-desc"><strong>React</strong><p>Experienced building component-based UIs and hooks-driven logic.</p></td>
              </tr>
              <tr>
                <td className="skill-img"><img src={viteLogo} alt="Vite" /></td>
                <td className="skill-desc"><strong>Vite</strong><p>Fast development builds and modern frontend tooling.</p></td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="projects" id='projects'>
          <h2>My projects</h2>

          <div className="project-list">
            {/* Project 1 with carousel */}
            <div className="project-item">
              <h3>Project 1</h3>
              <p>A web application built with React and Vite.</p>
              <div className="project-carousel">
                <button
                  className="arrow left"
                  onClick={() => setProj1Index((i) => (i - 1 + proj1Images.length) % proj1Images.length)}
                  aria-label="Previous"
                >
                  ‹
                </button>
                <img key={proj1Index} className="carousel-img fade-in" src={proj1Images[proj1Index]} alt={`Project 1 image ${proj1Index + 1}`} />
                <button
                  className="arrow right"
                  onClick={() => setProj1Index((i) => (i + 1) % proj1Images.length)}
                  aria-label="Next"
                >
                  ›
                </button>
              </div>
              <div className="project-controls">
                <button className="link-like" onClick={() => setProj1Open((v) => !v)}>{proj1Open ? 'Hide details' : 'Show details'}</button>
              </div>
              <div className={`project-details ${proj1Open ? 'open' : ''}`} aria-hidden={!proj1Open}>
                <p><strong>Overview:</strong> This project demonstrates a small React app using Vite as the build tool. It includes a carousel and responsive layout.</p>
                <p><strong>Tech:</strong> React, Vite, CSS</p>
              </div>
            </div>

            {/* Project 2 with carousel */}
            <div className="project-item">
              <h3>Project 2</h3>
              <p>A different project showcasing tooling.</p>
              <div className="project-carousel">
                <button
                  className="arrow left"
                  onClick={() => setProj2Index((i) => (i - 1 + proj2Images.length) % proj2Images.length)}
                  aria-label="Previous"
                >
                  ‹
                </button>
                <img key={proj2Index} className="carousel-img fade-in" src={proj2Images[proj2Index]} alt={`Project 2 image ${proj2Index + 1}`} />
                <button
                  className="arrow right"
                  onClick={() => setProj2Index((i) => (i + 1) % proj2Images.length)}
                  aria-label="Next"
                >
                  ›
                </button>
              </div>
              <div className="project-controls">
                <button className="link-like" onClick={() => setProj2Open((v) => !v)}>{proj2Open ? 'Hide details' : 'Show details'}</button>
              </div>
              <div className={`project-details ${proj2Open ? 'open' : ''}`} aria-hidden={!proj2Open}>
                <p><strong>Overview:</strong> Tooling showcase with Vite and quick build scripts. Demonstrates image handling and performance.</p>
                <p><strong>Tech:</strong> Vite, JS, CSS</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Contact me</h2>
          <p>If you'd like to get in touch, please reach out via email or connect on LinkedIn.</p>
          <p>email: <a href="https://github.com/your-username" target="_blank">my email</a></p>
          <p>Other links.</p>
          <p>GitHub: <a href="https://github.com/your-username" target="_blank">github.com/your-username</a></p>
        </section>
      </div>
      <section>
        <footer className="footer">©Copyright 2026</footer>
      </section>
    </>
  )
}

export default App
