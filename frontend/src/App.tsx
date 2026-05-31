import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const projectStatus = [
  {
    title: 'Frontend',
    description: 'React + Vite workspace ready for UI development.',
    state: 'ready',
  },
  {
    title: 'Backend',
    description: 'Python service scaffold prepared for API work.',
    state: 'ready',
  },
  {
    title: 'Workflow',
    description: 'Issue labels and project statuses documented.',
    state: 'documented',
  },
]

function App() {
  const [count, setCount] = useState(0)
  const [plantPhoto, setPlantPhoto] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState('')
  const [uploadMessage, setUploadMessage] = useState('')

  const handlePlantPhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    if (!file.type.startsWith('image/')) {
      setUploadMessage('Only plant image files are supported.')
      return
    }

    setPlantPhoto(file)
    setPreviewUrl(URL.createObjectURL(file))
    setUploadMessage('')
  }

  const handleMockUpload = () => {
    if (!plantPhoto) {
      setUploadMessage('Choose a plant photo first.')
      return
    }

    setUploadMessage('Upload complete. Identification queued.')
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Plant AJ setup</h1>
          <p>
            Initial frontend and backend workspaces are separated and ready for
            feature development.
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="project-status" aria-label="Project setup status">
        {projectStatus.map((item) => (
          <article className="status-card" key={item.title}>
            <span>{item.state}</span>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <div className="ticks"></div>

      <section id="plant-upload" aria-label="Plant photo upload">
        <h2>Plant photo upload</h2>
        <input type="file" accept="image/*" onChange={handlePlantPhotoChange} />
        <button type="button" onClick={handleMockUpload}>
          Upload photo
        </button>
        {previewUrl && <img src={previewUrl} alt="Selected plant preview" />}
        {uploadMessage && <p>{uploadMessage}</p>}
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Frontend</h2>
          <p>React app structure and Vite tooling.</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank" rel="noreferrer">
                <img className="logo" src={viteLogo} alt="" />
                Vite docs
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <img className="button-icon" src={reactLogo} alt="" />
                React docs
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank" rel="noreferrer">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank" rel="noreferrer">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a
                href="https://bsky.app/profile/vite.dev"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
