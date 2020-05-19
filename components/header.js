import Head from "next/head";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Head>
        <title>Pavittar Singh | Front end developer | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Hello, my name is Pavittar Singh and I'm a front end developer in
          India. My portfolio is a representation of all that I've learned
          and accomplished as a FrontEnd Developer."
        />
        <meta
          name="og:title"
          content="Pavittar Singh | Front end developer | Portfolio"
        />
        <meta
          name="og:description"
          content="Hello, my name is Pavittar Singh and I'm a front end developer in
          India. My portfolio is a representation of all that I've learned
          and accomplished as a FrontEnd Developer."
        />
        <meta name="og:image" content="/logo.png" />
        <meta
          name="keywords"
          content="Frontend developer, Portfolio, Developer, web developer, web design, web design solutions, react developer, angular developer, JS developer, Javascript developer, Designer, mern stack developer, mean stack developer, bootstrap, html, css"
        />
        <meta
          name="subject"
          content="Pavittar Singh | Front end developer | Portfolio"
        />
        <meta name="copyright" content="Pavittar Singh" />
        <meta name="language" content="ES" />
        <meta name="hostname" content="portfolio-coral-one.now.sh/" />
        <meta name="expected-hostname" content="portfolio-coral-one.now.sh/" />
        <meta name="revisit-after" content="7 days" />
        <meta http-equiv="Expires" content="0" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Cache-Control" content="no-cache" />
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
