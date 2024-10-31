import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_SECRET });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const externalResponse = await fetch("https://d1wvu1ls1c540u.cloudfront.net/api/v1/getState");
    if (!externalResponse.ok) {
      throw new Error(`HTTP error! status: ${externalResponse.status}`);
    }

    const externalData = await externalResponse.json();
    const states = externalData.states;

    const stateCodes = states.map((state: { state_code: string }) => ({
      name: state.state_code,
    }));

    const stateNames = states.map((state: { state_name: string }) => ({
      name: state.state_name,
    }));

    // Log the page ID for debugging
    const parentPageId = "13008046134e805384a3c5bfa8c19e1c";
    console.log("Using page ID:", parentPageId);

    // Create Notion database
    const notionResponse = await notion.databases.create({
      parent: {
        type: "page_id",
        page_id: parentPageId,
      },
      title: [
        {
          type: "text",
          text: {
            content: "States",
            link: null,
          },
        },
      ],
      properties: {
        Name: {
          title: {},
        },
        State_Codes: {
          select: {
            options: stateCodes,
          },
        },
        State_Names: {
          select: {
            options: stateNames,
          },
        },
      },
    });

    res.status(200).json({
      success: true,
      notionDatabaseId: notionResponse.id,
      stateCodes,
      stateNames,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      error: "An error occurred while creating the Notion database and fetching state data.",
    });
  }
}
