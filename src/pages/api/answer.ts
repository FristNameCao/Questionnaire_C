import { postAnswer } from "@/services/answer";
import { NextApiRequest, NextApiResponse } from "next";

function genAnswerInfo(reqBody: any) {
  const answerList: any = [];

  Object.keys(reqBody).forEach((key) => {
    if (key === "questionId") return;
    answerList.push({
      componentId: key,
      value: reqBody[key],
    });
  });

  return {
    questionId: reqBody.questionId || "",
    answerList,
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(200).json({ errno: -1, msg: "错误" });
  }
  // 获取并格式化表单数据
  const answerInfo = genAnswerInfo(req.body);
  console.log("answerInfo", answerInfo);

  try {
    // TODO 提交服务端 Mock
    const resData = await postAnswer(answerInfo);
    console.log("resData", resData);

    if (resData?.errno === 0) {
      // 如果提交成功了
      // 如果等于0提交成功了
      res.redirect("/success");
    } else {
      // 提交失败
      res.redirect("/fail");
    }
  } catch (e) {
    res.redirect("/fail");
  }
  console.log("answerInfo", answerInfo);

  res.status(200).json({ errno: 0, msg: "成功" });
}

// HTTP 协议,request response
