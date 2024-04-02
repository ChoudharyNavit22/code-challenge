import { Link, useLocation } from "wouter";

const Header = () => {
  const [, setLocation] = useLocation();
  const browseCompanies = () => {
    setLocation('/companies');
  }
  return (
    <header>
      <div> 
        <nav>
          <Link className="brand" href="/">
            <img src="/brand.svg" alt="birchal" />
          </Link>
          <Link href="/raise">Raise Capital</Link>
          <Link href="/investors">Investors</Link>
          <Link href="/newsfeed">Newsfeed</Link>
          <Link href="/legal">Legal Centre</Link>
          <Link href="/contact">Contact</Link>
          <button className="outline" type="button" onClick={browseCompanies}>
            Browse Companies
          </button>
          <button className="primary" type="button">
            Sign In
          </button>
        </nav>
      </div>
      
    </header>
  );
};

export default Header;
