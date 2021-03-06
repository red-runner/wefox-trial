import { mutate as SWRMutate } from "swr";
import { fetcher } from "./fetcher";

export enum Methods {
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export const mutate = async (
  endpoint: string | null,
  body?: object,
  options?: object,
  method = Methods.POST
) => {
  return SWRMutate(
    endpoint,
    endpoint
      ? await fetcher(endpoint, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
          method,
          ...options,
        })
      : null
  );
};
