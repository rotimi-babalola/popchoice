type FetchOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
  headers?: {
    [headerName: string]: string;
  };
};

interface IWorkerRequest {
  url: string;
  options?: FetchOptions;
}

export const sendWorkerRequest = async ({
  url,
  options = {},
}: IWorkerRequest) => {
  const { method, body } = options;

  const response = await fetch(url, {
    method: method || "GET",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
