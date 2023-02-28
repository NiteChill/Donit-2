import styles from './NavButton.module.scss';

export default function NavButton({ logo, title }) {
  return (
    <div className={`d-flex-column ai-center mb-36 cursor-pointer ${styles.hover}`}>
      <div className='d-flex-row ai-center jc-center bora-20 pr-16 pl-16'>
        <span class='material-symbols-outlined c-on-surface-variant'>
          {logo}
        </span>
      </div>
      <p className='fs-small fw-500 c-on-surface-variant ff-primary-font'>{title}</p>
    </div>
  );
}