export default function Card({ img, title, text }) {
  return (
    <div className='d-flex-column b-surface-2 bora-36 mt-8'>
      <div className='d-flex-row h-170 overflow-hidden bora-36 ai-center jc-center'>
        <img
          src={img}
          alt='geometric design'
          className='w-full'
        />
      </div>
      <div className='d-flex-column p-24'>
        <p className='fs-normal ff-primary-font c-on-surface'>{title}</p>
        <p className='fs-small ff-primary-font c-on-surface-variant'>{text}</p>
      </div>
    </div>
  );
}