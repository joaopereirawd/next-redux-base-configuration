import styles from '../scss/headings.module.scss'

export default function Title({ text }) {
  return (
    <h1 className={styles.h1}>
      {text} yes
    </h1>
  )
}