import { NavLink } from 'react-router-dom';

import header from '../../assets/img/header.png'
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div
      alt='header'
      src={header}
      className={`d-flex-row w-full h-350 jc-space-between ai-flex-end p-24 bora-36 ${styles.header}`}
    >
      <div>
        <p className='c-on-surface fs-large fw-500 ff-primary-font'>Donit</p>
        <p className='c-on-surface fs-medium fw-500 ff-primary-font'>
          Your wonderful to-do list
        </p>
      </div>
      <NavLink to='/my-todo' className={`d-flex-row ai-center jc-center pt-24 pr-36 pb-24 pl-36 bora-100 b-primary ${styles.hover}`}>
        <p className='c-on-primary fs-normal-plus fw-500 ff-primary-font'>
          Get started
        </p>
      </NavLink>
    </div>
  );
}