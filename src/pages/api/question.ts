import { get } from "@/services/ajax";

export async function getQuestionById(id: string) {
  const url = `/api/question/${id}`; // Mock 或服务端
  return await get(url);
}
