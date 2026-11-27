import { useState, useEffect } from 'react'
import { SettingsContext } from './SettingsContext.js'
import Notes from './components/Notes.jsx'
import Info from './components/Info.jsx'

function App() {
  const [largeText, setLargeText] = useState(() => {
    return localStorage.getItem('large') === 'true'
  })

  useEffect(() => {
    localStorage.setItem('large', largeText)
  }, [largeText])

  return (
    <SettingsContext value={{ largeText, setLargeText }}>
      <div className="bg-[#f5f5f4] font-light text-[#111]">
        <Notes />
        <Info name="Eleonora Sayson" />
      </div>
    </SettingsContext>
  )
}

export default App