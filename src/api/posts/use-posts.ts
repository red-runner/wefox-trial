import useSWR from "swr";
import { fetcher } from "../fetcher";

// type Post = {
//   id: string;
//   title: string;
//   content: string;
//   lat: string;
//   long: string;
//   image_url: string;
// };

export const usePosts = () => {
  const { data, ...otherSWR } = useSWR(
    "http://localhost:3000/api/v1/posts",
    fetcher
  );

  return {
    pol: data,
    ...otherSWR,
  };
};
