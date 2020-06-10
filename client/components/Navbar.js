import Link from 'next/link';

//Navbar for all the website
const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4" id="empatica_design">
    <div className="container">
      <a className="navbar-brand" href="#">Empatica Dashboard</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/"><a className="nav-link">About</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;