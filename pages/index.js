import Layout from "../components/layout";
import CircleCard from "../components/circleCard";
import { Fragment } from "react";

export default function Home() {
  const services = [
    {
      src: "/javascript.png",
      srcset: "/javascript.png",
      title: "JavaScript",
      link: "https://www.javascript.com/",
    },
    {
      src: "/react.png",
      srcset: "/react.png",
      title: "ReactJs",
      link: "https://reactjs.org/",
    },
    {
      src: "/angular.png",
      srcset: "/angular.png",
      title: "Angular",
      link: "https://angular.io/",
    },
    {
      src: "/docker.png",
      srcset: "/docker.png",
      title: "Docker",
      link: "https://www.docker.com/",
    },
    {
      src: "/graphql.png",
      srcset: "/graphql.png",
      title: "GraphQl",
      link: "https://graphql.org/",
    },
    {
      src: "/node.png",
      srcset: "/node.png",
      title: "Node",
      link: "https://nodejs.org/en/",
    },
    {
      src: "/nextjs-lg.png",
      srcset: "/nextjs-lg.png",
      title: "NextJs",
      link: "https://nextjs.org/",
    },
  ];

  const projects = [
    {
      src: "/project-reachlive.png",
      title: "ReachLive",
      link: "http://reachlive.com/",
    },
    {
      src: "/project-reachlive.png",
      title: "ReachLive Admin",
      link: "http://admin.reachlive.com/",
    },
    {
      src: "/project-vndr.png",
      title: "Vndr",
      link: "https://findavndr.com/",
    },
    {
      src: "/project-asparia.png",
      title: "Asparia Text Chat",
      link: "https://textingchat-test.simplify.health/",
    },
    {
      src: "/project-irusa.png",
      title: "Irusa",
      link: "http://irusa.app/",
      cls: "circle-card-item",
    },
    {
      src: "/project-pipetrak.png",
      title: "Pipetrak IT App",
      link:
        "https://play.google.com/store/apps/details?id=com.petroit.material&hl=en_IN",
    },
    {
      src: "/project-procure.png",
      title: "Procure Network",
      link: "https://core.procure.co/",
    },
  ];

  return (
    <Layout>
      <main>
        <section>
          <div className="intro">
            <div className="intro-image">
              <img src="/profile.png" alt="pavittar singh | profile image" />
            </div>
            <span className="intro-desc">
              Hello, my name is Pavittar Singh and I'm a front end developer in
              India. My portfolio is a representation of all that I've learned
              and accomplished as a FrontEnd Developer. I am seeking a position
              in which I can increase my knowledge, skill set and inter-personal
              skills, while fully utilizing my experience and abilities working
              with team members who support and teach each other to achieve
              goals above and beyond expectations.
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
          <div className="card-list mt-3">
            {projects.map((x, i) => (
              <Fragment key={i}>
                <CircleCard {...x} parentCls="pt-30" />
              </Fragment>
            ))}
          </div>
        </section>
        <section className="mb-20">
          <div className="card">
            <div className="card-body">
              Download My{" "}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Resume
              </a>
            </div>
          </div>
        </section>
        <br />
        <section className="mb-50" id="contact-us">
          <h4 className="section-title">Connect with Me</h4>
          <ul className="connect-with-me">
            <li>
              <a
                href="http://instagram.com/pavittar95"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/instagram.png" />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/pavi_1995"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/twitter.png" />
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:singh.pavittar95@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/mail.png" />
                <span>Email</span>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <span>
          Developed by Me. Developed in
          <img src="/nextjs-sm.png" alt="nextjs" />
        </span>
      </footer>
    </Layout>
  );
}
