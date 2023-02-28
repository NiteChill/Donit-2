import NavButton from "../NavButton/NavButton";

export default function Navbar() {
  return (
    <nav className='d-flex-column ai-center w-fit-content h-full pt-36 pr-24 pb-36 pl-24 b-surface-1'>
      <NavButton logo='home' title='Donit' />
      <NavButton logo='account_circle' title='My todo' />
      <NavButton logo='alarm' title='Daily' />
    </nav>
  );
}