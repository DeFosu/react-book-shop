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
            <Button variant="filled" size="md">
              Order Today
            </Button>
          </div>
        </header>
        <main className="max-w-[1300px] mx-auto px-5 py-20 flex items-center gap-16">
          <div className="w-1/2">
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-0.5 bg-accent inline-block" />
              <h1 className="text-white text-2xl font-cardo tracking-wider leading-9">
                Welcome to Pages!!!
              </h1>
            </div>
            <h2 className="mt-3.5 text-white text-6xl font-cardo tracking-wider leading-20">
              Your Books From <br /> The Best Writer.
            </h2>
            <p className="mt-6 text-lg text-secondary font-inter leading-7">
              We believe that reading books are essential to a healthy culture.
              <br />
              They’re where authors can connect with readers.
            </p>
            <div className="mt-10 flex">
              <Button variant="filled" size="md">
                Order Today
              </Button>
              <Button variant="text" size="md">
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
