import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active text-light">Beranda</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/informasi">
                  <a className="nav-link text-light">Informasi</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/profil">
                  <a className="nav-link text-light">Profil</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar bg-success navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand">
            <Image src="/logotasik.png" width="35px" height="35px" className="d-inline-block align-text-top" alt="" />
            <span className="text-white h3 ms-3">Dinas Ketahanan Pangan Kota Tasikmalaya</span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
