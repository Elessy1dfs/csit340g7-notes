import { useState } from 'react'
import { SettingsContext } from './SettingsContext.js'
import Notes from './components/Notes.jsx'
import Info from './components/Info.jsx'
 
function App() {
  const [large, setLarge] = useState(() => {
  return localStorage.getItem('large') === 'true'

})

useEffect(() => {
  localStorage.setItem('large', large)
}, [large])

  return (

    <SettingsContext value={{ largeText, setLargeText }}>
      <div className="bg-[#f5f5f4] font-light text-[#111]">
        <Notes />
        <Info name="Juan Dela Cruz" />
      </div>
    </SettingsContext>
  )
}
 
export default App