import React from "react";
import logo from "./logo.svg";
import { Text, Heading, Post } from "./components";
import { usePost } from "./api";

export const App = () => {
  const { posts, create, remove } = usePost();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Heading level={Heading.Levels.H4}>Heading H4</Heading>
        <Text>Learn React</Text>
        <button
          onClick={async () => {
            await create({
              title: "Divine London",
              content: "hi ha una mica de pols a la pastera",
              image_url:
                "https://images.unsplash.com/photo-1609678379165-9fb914c132c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1245&q=80",
              lat: "40.41678",
              long: "-3.70379",
            });
          }}
        >
          I CREATE POST
        </button>
        {posts instanceof Object &&
          posts instanceof Array &&
          posts.map(
            (
              {
                id,
                content,
                image_url,
                title,
                updated_at,
              }: {
                id: string;
                content: string;
                image_url: string;
                title: string;
                updated_at: string;
              },
              index: number
            ) => (
              <Post
                key={index}
                title={title}
                content={content}
                src={image_url}
                date={updated_at}
                onDelete={() => remove(id)}
              />
            )
          )}
      </header>
    </div>
  );
};
