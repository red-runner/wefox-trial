import React, { useState } from "react";
import {
  Heading,
  Post,
  StylesPage,
  Select,
  Button,
  Header,
} from "./components";
import { usePost } from "./api";
import { Post as PostType } from "./api/types";
import {
  POST_BACKLOG,
  POST_TITLES,
  MAIN_HEADING,
  SECTION_BACKLOG_HEADING,
  SECTION_BACKLOG_BUTTON,
  SECTION_BACKLOG_PLACEHOLDER,
  SECTION_UPDATE_BUTTON,
  SELECT_PUBLISHED_PLACEHOLDER,
  SELECT_TITLE_PLACEHOLDER,
  PUBLISHED_POSTS_HEADING,
} from "./constants";

export const App = () => {
  type Options = { value: string; label?: string }[];

  const { posts, create, remove, revalidate, update } = usePost();

  const [backlogPost, setBacklogPost] = useState<PostType>({});
  const [publishedPost, setPublishedPost] = useState<PostType>({});
  const [selectedTitle, setSelectedTitle] = useState<string | undefined>();

  const getSelectOptions = (options: { title: string }[]) =>
    options?.map(({ title }: { title: string }) => ({
      value: title,
      label: title,
    })) as Options;

  const getPost = (item: string, _post: { title: string }[]) =>
    _post.filter(({ title }: { title: string }) => title === item)[0];

  const handleBacklogSelection = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const entry = getPost(event.target.value, POST_BACKLOG);

    entry && setBacklogPost(entry);
  };

  const handlePublishedPostSelection = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const entry = getPost(event.target.value, posts);

    entry && setPublishedPost(entry);
  };

  const handleSelectedTitle = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const entry = event.target.value;

    entry && setSelectedTitle(entry);
  };

  return (
    <StylesPage className="app">
      <Header title="wefox-group" />
      <main className="main-content">
        <Heading alignment={Heading.Alignment.Left} level={Heading.Levels.H1}>
          {MAIN_HEADING}
        </Heading>

        <div className="section-wrapper">
          <section className="post-selection">
            <Heading
              alignment={Heading.Alignment.Left}
              level={Heading.Levels.H3}
            >
              {SECTION_BACKLOG_HEADING}
            </Heading>
            <Select
              placeholder={SECTION_BACKLOG_PLACEHOLDER}
              value={backlogPost?.title ? backlogPost?.title : ""}
              onChange={handleBacklogSelection}
              options={getSelectOptions(POST_BACKLOG)}
            />
            <Button
              disabled={Object.keys(backlogPost).length === 0}
              onClick={() => {
                try {
                  create(backlogPost).then((response) => console.log(response));
                } catch (error) {
                  new Error(error.message);
                }
              }}
            >
              {SECTION_BACKLOG_BUTTON}
            </Button>
          </section>

          <section className="post-update">
            <Heading
              alignment={Heading.Alignment.Left}
              level={Heading.Levels.H3}
            >
              {PUBLISHED_POSTS_HEADING}
            </Heading>
            <Select
              className="published-posts"
              placeholder={SELECT_PUBLISHED_PLACEHOLDER}
              value={publishedPost?.title ? publishedPost?.title : ""}
              onChange={handlePublishedPostSelection}
              options={getSelectOptions(posts)}
            />
            <Select
              className="titles"
              placeholder={SELECT_TITLE_PLACEHOLDER}
              value={selectedTitle ? selectedTitle : ""}
              onChange={handleSelectedTitle}
              options={POST_TITLES}
            />
            <Button
              disabled={
                Object.keys(publishedPost).length === 0 || !selectedTitle
              }
              onClick={() => {
                const updatedPost = publishedPost;
                updatedPost.title = selectedTitle;

                try {
                  update(updatedPost).then(() => {
                    revalidate();
                  });
                } catch (error) {
                  new Error(error.message);
                }
              }}
            >
              {SECTION_UPDATE_BUTTON}
            </Button>
          </section>
        </div>
        <ul className="post-list">
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
                <li key={index}>
                  <Post
                    title={title}
                    content={content}
                    src={image_url}
                    date={`Last updated: ${new Date(
                      updated_at
                    ).toLocaleDateString("en-US")}`}
                    onDelete={() => {
                      try {
                        remove(id).then(() => {
                          revalidate();
                        });
                      } catch (error) {
                        new Error(error.message);
                      }
                    }}
                  />
                </li>
              )
            )}
        </ul>
      </main>
    </StylesPage>
  );
};
