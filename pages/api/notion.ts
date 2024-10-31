import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

const secret = process.env.NOTION_SECRET;
const db = process.env.NOTION_DB;

const notion = new Client({ auth: secret });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse 
) {
  if (!secret || !db) throw new Error("Missing secret");
  const query = await notion.databases.query({
    database_id: db,
  });

   console.log(query.results)
  res.status(200).json({ name: "John Doe" });
}
