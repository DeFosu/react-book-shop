import React from "react";
import { Button } from "../components/Button";
import { Logo, Facebook, Twitter, LinkedIn } from "../components/Icons";
import { IconLink, NavigationLink } from "../components/Links";
import { Typography } from "../components/Typography";
import { Divider } from "../components/Devider";

const Home: React.FC = () => {
  return (
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
            <Divider />
            <Typography variant="h5" color="white">
              Welcome to Pages!!!
            </Typography>
          </div>
          <Typography variant="h1" color="white" className="mt-3.5">
            Your Books From <br /> The Best Writer.
          </Typography>
          <Typography variant="body1" color="secondary" className="mt-6">
            We believe that reading books are essential to a healthy culture.
            <br />
            They're where authors can connect with readers.
          </Typography>
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
  );
};

export default Home;
