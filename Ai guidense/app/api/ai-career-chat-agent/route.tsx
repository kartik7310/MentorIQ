import { inngest } from "@/inngest/client";
import axios from "axios";

export async function POST(req:any) {
  const {userInput} = req.json();
  const resultIds = await inngest.send({
    name:"AiCareerAgent",
    data:{
      userInput:userInput
    }
  });
  const runId = resultIds.ids[0]
}

async function getRuns(runId:string) {
  const response = await fetch(`process.env.INNGEST_SERVER_HOST/v1/events/${runId}/runs`, {
    headers: {
      Authorization: `Bearer ${process.env.INNGEST_SIGNING_KEY}`,
    },
  });
  const json = await response.json();
  return json.data;
}