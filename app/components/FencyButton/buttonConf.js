'use client'

import React, { useState, useEffect } from 'react'
import ReactConfetti from 'react-confetti'
import styles from './button.module.css'

function ButtonConf() {
  const [width, setWidth] = useState(null)
  const [height, setHeight] = useState(null)
  const [celebrate, setCelebrate] = useState(false)

  useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }, [])

  const handleClick = () => {
    setCelebrate(true)
    // Reset celebration state after 5 seconds
    setTimeout(() => {
      setCelebrate(false)
    }, 5000)
  }

  return (
    <div>
      {celebrate && <ReactConfetti width={width} height={height} />}
      <div className={styles.buttonContainer}>
        <a
          href='/test.txt'
          download='test'
          className={styles.downloadButton}
          onClick={handleClick}
        >
          Download File
        </a>
      </div>
    </div>
  )
}

export default ButtonConf
