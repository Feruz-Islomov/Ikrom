// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

function Home({ posts }) {
  const [value, setValue] = useState("");

  // console.log(posts);
  return (
    <div className="container py-2">
      <div>
        <button
          id="b"
          className="btn btn-danger"
          onClick={() => {
            document.getElementById("b").classList.add("d-none");
            document.getElementById("c").classList.add("d-none");
            window.print();
            document.getElementById("b").classList.remove("d-none");
            document.getElementById("c").classList.remove("d-none");
          }}
        >
          print
        </button>

        <div id="c" className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="enter..."
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        {posts
          .filter(
            (post) => post.title.toLowerCase().includes(value)
            // ||  post.body.toLowerCase().includes(value)
          )
          .map((post, i) => {
            return (
              <div key={post.id}>
                <div>
                  {i + 1} {post.title}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Home;

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  // console.log(posts);

  return {
    props: {
      posts: posts,
    },
  };
}
