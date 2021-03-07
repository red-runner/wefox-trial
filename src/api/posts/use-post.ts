import useSWR from "swr";
import { fetcher } from "../fetcher";
import { mutate, Methods } from "../mutate";
import { Post } from "../types";

export const usePost = () => {
  const { data, ...otherSWR } = useSWR(
    `http://localhost:3000/api/v1/posts`,
    fetcher,
    {
      errorRetryCount: 2,
    }
  );

  return {
    posts: data instanceof Object && data instanceof Array ? data : [],
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
    ...otherSWR,
  };
};
