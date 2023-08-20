import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [checked, setChecked] = useState(false);
  return (
    <header className='header'>
      <div className='navigation'>
        <div
          className={`navigation__background ${
            checked ? 'navigation__background_active' : ''
          }`}
        ></div>
        <nav
          className={`navigation__links ${
            checked ? 'navigation__links_active' : ''
          }`}
        >
          <a className='navigation__ref' href='#'>
            БИЛЕТЫ И АБОНЕМЕНТЫ
          </a>
          <a className='navigation__ref' href='#'>
            Как купить?
          </a>
          <a className='navigation__ref' href='#'>
            Правила
          </a>
          <a className='navigation__ref' href='#'>
            Возврат билетов
          </a>
          <a className='navigation__ref navigation__ref_type_sign-in' href='#'>
            Войти
          </a>
        </nav>
        <button
          onClick={() => setChecked(cur => !cur)}
          className='navigation__button'
          href='#'
        ></button>
      </div>
    </header>
  );
};

export default Header;
