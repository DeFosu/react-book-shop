import React from "react";
import { Logo, Facebook, Twitter, LinkedIn } from "./components/Icons";
import { IconLink, NavigationLink } from "./components/Links";
import { Button } from "./components/Button";
const App: React.FC = () => {
  return (
    <div>
      <section className="bg-primary">
        <header className="max-w-[1300px] mx-auto h-28 flex items-center justify-between">
          <div className="flex items-center gap-9">
            <a href="/" className="block w-fit">
              <Logo />
            </a>
            <ul className="flex gap-2.5 items-center">
              <IconLink href="/">
                <Facebook />
              </IconLink>
              <IconLink href="/">
                <Twitter />
              </IconLink>
              <IconLink href="/">
                <LinkedIn />
              </IconLink>
            </ul>
          </div>
          <div className="flex gap-20 items-center">
            <nav className="flex gap-9.5 items-center">
              <NavigationLink href="/">Home</NavigationLink>
              <NavigationLink href="/">About</NavigationLink>
              <NavigationLink href="/">Pages</NavigationLink>
              <NavigationLink href="/">Contact Us</NavigationLink>
            </nav>
            <Button variant="filled" size="lg">
              Order Today
            </Button>
          </div>
        </header>
        <main className="max-w-[1300px] mx-auto px-5 py-24 flex items-center gap-16">
          <div className="w-1/2">
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-0.5 bg-accent inline-block" />
              <h1 className="text-white text-xl">Welcome to Pages!!!</h1>
            </div>

            <h2 className="text-white text-6xl">
              Your Books From <br /> The Best Writer.
            </h2>
            <p className="text-lg text-secondary">
              We believe that reading books are essential to a healthy culture.
              <br />
              They’re where authors can connect with readers.
            </p>
            <div>
              <Button variant="filled" size="lg">
                Order Today
              </Button>
              <Button variant="text" size="lg">
                Read Free Demo
              </Button>
            </div>
          </div>
          <div className="w-1/2">
            <img src="/images/home.jpg" alt="The dark light" />
          </div>
        </main>
      </section>
    </div>
  );
};

export default App;
