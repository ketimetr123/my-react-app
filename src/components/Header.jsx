const Header = () => {
  return (
    <header className="bg-gray-300 flex justify-between items-center p-2">
      <a href="http:/main">
        <img
          className="w-[50px]"
          src={`${process.env.PUBLIC_URL}/enterprise.png`}
          alt="Description"
        />
      </a>

      <nav className="space-x-2">
        <a href="http:/mission">Mission</a>
        <a href="http:/about">About</a>
        <a href="http:/contact">Contact</a>
      </nav>
    </header>
  );
};
export default Header;
