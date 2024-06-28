import { useState } from 'react'
import { motion } from 'framer-motion'

export default function App() {

  const searchMovie = (e) => {
    e.preventDefault()
    console.log("La fonction searchMovie a été appelée")
  }

  return (
      <main>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Cinemax</h1>
        </motion.div>
        <motion.div
        
        >
        <h3>Trouvez les infos de films et de séries en 2 clics !</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={searchMovie}>
            <input 
            type="text"
            />
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
            </button>
          </form>
        </motion.div>
      </main>

  )
}

