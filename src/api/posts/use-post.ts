import useSWR from "swr";
import { fetcher } from "../fetcher";
import { mutate, Methods } from "../mutate";

type Post = {
  id?: string;
  title: string;
  content: string;
  lat: string;
  long: string;
  image_url: string;
};

export const usePost = () => {
  const { data } = useSWR(`http://localhost:3000/api/v1/posts`, fetcher);

  return {
    posts: data ? data : [],
    create: async ({ title, content, lat, long, image_url }: Post) =>
      await mutate(
        `http://localhost:3000/api/v1/posts`,
        {
          title,
          content,
          lat,
          long,
          image_url,
        },
        {},
        Methods.POST
      ),
    update: async ({ id, title, content, lat, long, image_url }: Post) =>
      await mutate(
        `http://localhost:3000/api/v1/posts/${id}`,
        {
          title,
          content,
          lat,
          long,
          image_url,
        },
        {},
        Methods.PUT
      ),
    remove: async (id: string) =>
      await mutate(
        `http://localhost:3000/api/v1/posts/${id}`,
        {},
        {},
        Methods.DELETE
      ),
  };
};
