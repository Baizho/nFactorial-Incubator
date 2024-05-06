import Link from "next/link";
import Search from "./Search";

export default function Header() {
  const submitResults = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Favourite">
                Your Favourite
              </Link>
            </li>
          </ul>
          <Search></Search>
        </div>
      </nav>
    </>
  );
}
