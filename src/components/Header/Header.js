import header from '../../assets/img/header.png'
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div alt='header' src={header} className={`d-flex-row w-full h-350 jc-space-between ai-flex-end p-24 bora-36 ${styles.header}`}>
      <div>
        <p>Donit</p>
        <p>Your wonderful to-do list</p>
      </div>
      <div>
        <p>Get started</p>
      </div>
    </div>
  )
}