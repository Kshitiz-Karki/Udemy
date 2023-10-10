import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

const Landing = () => {
  return <main>
    <nav>
        <img src={logo} alt="jobify" className='logo' />
    </nav>
    <div className='container page'>
        <div className='info'>
            <h1>
                job <span>tracking</span> app
            </h1>
            <p>
                I'm baby selfies fanny pack pug, vexillologist sriracha tousled bodega boys. Put a bird on it vibecession synth ethical. Post-ironic helvetica hell of cray chambray, hoodie selfies.
            </p>
            <button className='btn btn-hero'>
                Login/Register
            </button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
    </div>
  </main>
  
}

export default Landing