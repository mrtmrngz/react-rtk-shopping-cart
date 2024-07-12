import MenuIcon from '@mui/icons-material/Menu';

const NavbarMobile = ({onOpen}) => {
  return (
    <div className="header-mobile">
      <button className="header-mobile-open-button" onClick={onOpen}>
        <MenuIcon className='header-mobile-open-icon' />
      </button>
    </div>
  );
};

export default NavbarMobile;
