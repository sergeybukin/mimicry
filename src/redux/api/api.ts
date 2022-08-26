async function request<TResponse>(
  url: string,
  config?: RequestInit
): Promise<TResponse> {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}${url}`,
    config
  );
  return await response.json();
}

export const api = {
  get: <TResponse>(url: string) => request<TResponse>(url),
  // Using `extends` to set a type constraint:
  post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) => {
    return request<TResponse>(url, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  },
  put: <TBody extends BodyInit, TResponse>(url: string, body: TBody) => {
    return request<TResponse>(url, {
      method: "PUT",
      body,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  },
};
