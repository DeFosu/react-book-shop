import React from "react";
import { SectionHeader } from "../components/SectionHeader";

const AuthorBook: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1300px] mx-auto px-5 py-20">
        <SectionHeader title="The Author’s Book" />
        <div className="flex items-center gap-14"></div>
      </div>
    </section>
  );
};

export default AuthorBook;
