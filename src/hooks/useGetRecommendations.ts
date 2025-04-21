import { useMutation } from "@tanstack/react-query";

import { sendWorkerRequest } from "../services/sendWorkerRequest";
import { WORKER_URL } from "../constants";
import { MutationKeys } from "../react-query/mutation-keys";

type GetRecommendationsParams = {
  messages: {
    role: string;
    content: string;
  }[];
};

export const useGetRecommendations = () => {
  const getRecommendations = async ({ messages }: GetRecommendationsParams) => {
    const response = await sendWorkerRequest({
      url: `${WORKER_URL}/api/recommendations`,
      options: {
        method: "POST",
        body: messages,
      },
    });

    return response;
  };

  const { mutate, isError, isPending, data, reset } = useMutation({
    mutationFn: getRecommendations,
    onError: (error) => {
      console.error("Error fetching recommendations:", error);
    },
    mutationKey: [MutationKeys.MOVIE_RECOMMENDATIONS],
  });

  return { getRecommendations: mutate, isError, isPending, data, reset };
};
