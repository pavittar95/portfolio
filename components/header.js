import Head from "next/head";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Head>
        <title>Pavittar Singh | Front end developer | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="brand open-sans-font"> Pavittar Singh </h1>
      <ul className="links">
        <li>
          <Link href="/">
            <a className="prata-font">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/#services">
            <a className="prata-font">Services</a>
          </Link>
        </li>
        <li>
          <Link href="/#projects">
            <a className="prata-font">Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/#contact-us">
            <a className="prata-font">Contact Us</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
