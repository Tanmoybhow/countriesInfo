import useThemeContext from "../hooks/useThemeContext";

const Header = () => {
  const [isDark,setIsDark]=useThemeContext();
  return (
    <>
      <header className={`${isDark?"darkMood":""}`}>
        <div className="container">
          <nav>
            <div className="logo">
              <a href="/">Where in the world?</a>
            </div>
            <div className="dark-mood" id="dark-mood" onClick={()=>{
              setIsDark(!isDark);
              localStorage.setItem('isDark',!isDark);
            }}>
              <i className={`fa-solid ${isDark? "fa-sun":"fa-moon"}`} />
              <span>{`${isDark? "Light":"Dark"}`} Mood</span>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
