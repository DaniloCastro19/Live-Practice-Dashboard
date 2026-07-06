import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/');

import './App.css'
import SlCard from '@shoelace-style/shoelace/dist/react/card';

function App() {

  return (
    <>
      <h1>Welcome to your Live Practice Dashboard</h1>
      <SlCard>
        <h2>Practice Session</h2>
        <p>Start your live practice session here.</p>
      </SlCard>
    </>
  )
}

export default App
