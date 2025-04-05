import React from "react";
import { SectionHeader } from "../components/SectionHeader";
import { Typography } from "../components/Typography";
import { Button } from "../components/Button";
import { Circle } from "../components/Circle";

const AuthorBook: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1300px] mx-auto px-5 pt-32 pb-24">
        <SectionHeader title="The Author’s Book" />
        <div className="flex items-center gap-12  mt-16">
          <div className="flex gap-7 max-w-1/2 ">
            <div className="max-w-[285px] max-h-[382x] w-full">
              <img
                src="/images/authors-book-1.jpg"
                alt="Book"
                className="shadow-md w-full h-full object-cover"
              />
            </div>
            <div>
              <Typography
                variant="h3"
                color="primary"
                font="cardo"
                className="mt-6"
              >
                Atomic One’s
              </Typography>
              <Typography variant="h6" color="accent" className="mt-2">
                $ 13.84 USD
              </Typography>
              <Typography variant="body1" color="tertiary" className="mt-4">
                As the book contains theoretical content as well as solved
                questions.
              </Typography>
              <div className="flex items-center gap-2.5 mt-3.5">
                <Circle />
                <Typography variant="h5" color="primary" font="cardo">
                  Printed Book
                </Typography>
              </div>
              <Button variant="outlined" size="md" className="mt-7">
                Order Now
              </Button>
            </div>
          </div>
          <div className="flex gap-7 max-w-1/2 ">
            <div className="max-w-[285px] max-h-[382x] w-full">
              <img
                src="/images/authors-book-2.jpg"
                alt="Book"
                className="shadow-md w-full h-full object-cover"
              />
            </div>
            <div>
              <Typography
                variant="h3"
                color="primary"
                font="cardo"
                className="mt-6"
              >
                The Dark Light
              </Typography>
              <Typography variant="h6" color="accent" className="mt-2">
                $ 86.11 USD
              </Typography>
              <Typography variant="body1" color="tertiary" className="mt-4">
                As the book contains theoretical content as well as solved
                questions.
              </Typography>
              <div className="flex items-center gap-2.5 mt-3.5">
                <Circle />
                <Typography variant="h5" color="primary" font="cardo">
                  Printed Book
                </Typography>
              </div>
              <Button variant="outlined" size="md" className="mt-7">
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorBook;
