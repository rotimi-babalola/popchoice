import { WORKER_URL } from "../constants";
import { sendWorkerRequest } from "../services/sendWorkerRequest";

export const getQueryEmbeddings = async ({
  question,
}: {
  question: string;
}) => {
  const response = await sendWorkerRequest({
    url: `${WORKER_URL}/api/embeddings`,
    options: {
      method: "POST",
      body: question,
    },
  });

  return response;
};
