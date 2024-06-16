import "isomorphic-fetch";
import React from "react";
import Link from "next/link";

const Home = ({ repositories }) => (
  <div>
    <Link href="/blog">
      <h1>Blog</h1>
    </Link>
    {repositories.map((repo) => (
      <h1 key={repo.id}>{repo.name}</h1>
    ))}
  </div>
);

Home.getInitialProps = async () => {
  const response = await fetch("https://api.github.com/users/marcelldac/repos");
  const repositories = await response.json();
  return { repositories };
};

export default Home;
