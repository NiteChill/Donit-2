import NavButton from "../NavButton/NavButton";

export default function Navbar() {
  return (
    <nav className='d-flex-column ai-center w-fit-content h-full pt-36 pr-24 pb-36 pl-24 b-surface-1'>
      <NavButton logo='home' title='Donit' link='/' />
      <NavButton logo='account_circle' title='Account' link='account' />
      <NavButton logo='apps' title='My todos' link='my-todo' />
      <NavButton logo='alarm' title='Daily' link='daily' />
    </nav>
  );
}