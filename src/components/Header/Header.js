import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className='Logo'>
        <img src='/puppy.png' alt='dog icon'></img>
      </div>
      <ul>
        <li class='Contact'>
          <a href='https://www.linkedin.com/in/diegosverav/' 
          target='_blank' 
          rel='noreferrer'
          className='enlace'>
            Contact me
          </a>
          </li>
      </ul>
    </div>
  );
}

export default Header;