import React, { useState } from 'react'
import preactLogo from '../../src/assets/preact.svg'
import viteLogo from '../../public/vite.svg'
const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className='counter'>
                <div className='header'>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} class="logo" alt="Vite logo" />
                    </a>
                    <a href="https://preactjs.com" target="_blank">
                        <img src={preactLogo} class="logo preact" alt="Preact logo" />
                    </a>
                </div>
                <h1 className='title'>Vite + Preact</h1>
                <div class="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/app.jsx</code> and save to test HMR
                    </p>
                </div>
                <p class="read-the-docs">
                    Click on the Vite and Preact logos to learn more
                </p>
            </div>
        </>
    )
}

export default Counter