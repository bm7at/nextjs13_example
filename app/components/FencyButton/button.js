import styles from './button.module.css'

function FencyButton() {
  return (
    <div className={styles.buttonContainer}>
      <a href='/test.txt' download='test' className={styles.downloadButton}>
        Download File
      </a>
    </div>
  )
}

export default FencyButton
