import { useState } from 'react'
import "./App.css"
import Forms from './Components/Forms'
import Titulo from './Components/Titulo'
import Logo from '../public/Logo'
function App({formDesativo}) {

const [formDesativo, setFormDesativo] = useState([])
  return (
    <>
    <section className='main_app'>
      
      
      
      <Logo/>
      <Titulo/>
      {formDesativo 
      && <Forms formDesativo={formDesativo} setFormDesativo={setFormDesativo} />
      }



    </section>
    </>
  )
}

export default App
