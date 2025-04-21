import { WORKER_URL } from "../constants";
import { sendWorkerRequest } from "../services/sendWorkerRequest";

export const getQueryEmbeddings = async ({
  question,
}: {
  question: string;
}) => {
  try {
    const response = await sendWorkerRequest({
      url: `${WORKER_URL}/api/embeddings`,
      options: {
        method: "POST",
        body: question,
      },
    });

    return response;
  } catch (error) {
    console.error("Error fetching query embeddings:", error);
  }
};
