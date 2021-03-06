export const fetcher = async (endpoint: string, options?: object) => {
  const response = await fetch(endpoint, {
    ...options,
  });

  const noContent = 204;

  if (response.status === noContent) return;

  const body = await response.json();

  if (Math.floor(response.status / 400) || Math.floor(response.status / 500))
    throw new Error(body);
  return body?.data ? body.data : body;
};
