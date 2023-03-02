import { NavLink } from 'react-router-dom';

import styles from './NavButton.module.scss';

export default function NavButton({ logo, title, link }) {
  return (
    <NavLink to={link} className={`d-flex-column ai-center mb-36 cursor-pointer ${styles.hover}`}>
      <div className='d-flex-row ai-center jc-center bora-20 pr-16 pl-16'>
        <span className='material-symbols-outlined c-on-surface-variant'>
          {logo}
        </span>
      </div>
      <p className='fs-small fw-500 c-on-surface-variant ff-primary-font'>{title}</p>
    </NavLink>
  );
}