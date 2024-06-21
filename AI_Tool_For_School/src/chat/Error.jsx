import { useGlobal } from './context'
import styles from './style/style.module.less'

export default function Error() {
  const { currentChat, chat } = useGlobal()
  const chatError = chat[currentChat]?.error || {}
  return (
    <div className={styles.error}>
      {chatError.code}<br />
      {chatError.message}<br />
      {chatError.type}<br />
      {chatError.param}<br />
    </div>
  )
}
