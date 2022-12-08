import dbConnect from "../../../db/dbConnect";
import Question from "../../../db/models/Question";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  const { method } = request;

  if (method === "GET") {
    try {
      const question = await Question.findById(id);
      return response
        .status(200)
        .json({ id: question._id, name: question.name, text: question.text });
    } catch {
      return response.status(404).json({ message: "Data not found" });
    }
  }

  if (method === "DELETE") {
    try {
      await Question.findByIdAndDelete(id);
      return response.status(200).json({ message: "question deleted" });
    } catch {
      return response
        .status(404)
        .json({ message: "question to delete couldn't be found" });
    }
  }

  if (method === "PUT") {
    try {
      const result = await Question.findByIdAndUpdate(
        id,
        {
          name: request.body.name,
          text: request.body.text,
        },
        { returnDocument: "after" }
      );
      return response.status(200).json(result);
    } catch {
      return response
        .status(404)
        .json({ message: "question couldn't be found" });
    }
  }

  response.status(405).json({ message: "method not allowed" });
}
