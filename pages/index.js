import Layout from "../components/layout";
import CircleCard from "../components/circleCard";
import { Fragment } from "react";

export default function Home() {
  const services = [
    {
      src:
        "//upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png",
      srcset:
        "//upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/375px-Angular_full_color_logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/500px-Angular_full_color_logo.svg.png 2x",
      title: "ReactJs",
      description:
        "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications",
    },
    {
      src:
        "//upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png",
      srcset:
        "//upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/375px-Angular_full_color_logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/500px-Angular_full_color_logo.svg.png 2x",
      title: "Angular",
      description:
        "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.",
    },
    {
      src:
        "//upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png",
      srcset:
        "//upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/375px-Angular_full_color_logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/500px-Angular_full_color_logo.svg.png 2x",
      title: "Node",
      description:
        "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.",
    },
  ];

  const projects = [
    {
      src:
        "//upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png",
      srcset:
        "//upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/375px-Angular_full_color_logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/500px-Angular_full_color_logo.svg.png 2x",
      title: "ReachLive",
    },
    {
      src:
        "//upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png",
      srcset:
        "//upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/375px-Angular_full_color_logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/500px-Angular_full_color_logo.svg.png 2x",
      title: "ReachLive Admin",
    },
  ];

  return (
    <Layout>
      <main>
        <section>
          <div className="intro">
            <div className="intro-image">
              <img src="https://lh3.googleusercontent.com/a-/AOh14GgwWWgwfOGiblrZS2K5f8Vb6Jz2oERTGbuiGp5FsQ=s96-c-rg-br100" />
            </div>
            <span className="intro-desc">
              Hello, my name is Pavittar Singh and I'm a front end developer in
              punjab. My portfolio is a representation of all that I've learned
              and accomplished as a FrontEnd Developer.
            </span>
          </div>
        </section>
        <section id="services" className="mb-50">
          <span className="section-question">What do you need help With?</span>
          <h4 className="section-title">Services</h4>
          <div className="card-list">
            {services.map((x, i) => (
              <Fragment key={i}>
                <CircleCard {...x} />
              </Fragment>
            ))}
          </div>
        </section>
        <section id="projects" className="mb-50">
          <h4 className="section-title">Projects</h4>
          <div className="card-list">
            {projects.map((x, i) => (
              <Fragment key={i}>
                <CircleCard {...x} />
              </Fragment>
            ))}
          </div>
        </section>
        <section className="mb-50">
          <h4 className="section-title">Connect with Me</h4>
          <ul className="connect-with-me">
            <li>
              <img src="/instagram.png" />
              <span>Instagram</span>
            </li>
            <li>
              <img src="/twitter.png" />
              <span>Twitter</span>
            </li>
            <li>
              <img src="/mail.png" />
              <span>Email</span>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </Layout>
  );
}
