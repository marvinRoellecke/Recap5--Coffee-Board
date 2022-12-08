import dbConnect from "../../../db/dbConnect";
import Question from "../../../db/models/Question";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const questions = await Question.find();

    const questionsArray = questions.map((question) => {
      return {
        id: question._id,
        name: question.name,
        text: question.text,
      };
    });

    console.log(questionsArray);

    response.status(200).json(questionsArray);
  }

  if (request.method === "POST") {
    const data = request.body;
    try {
      const newQuestion = await Question.create(data);
      response.status(201).json(newQuestion);
    } catch (error) {
      response.status(400).json("Data could not be processed", { error });
    }
  }
}
