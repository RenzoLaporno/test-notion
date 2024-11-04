// fetch for database
//==============================================
// import type { NextApiRequest, NextApiResponse } from "next";
// import { Client } from "@notionhq/client";

// const secret = process.env.NOTION_SECRET;
// const db = process.env.NOTION_DB;

// const notion = new Client({ auth: secret });

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse 
// ) {
//   if (!secret || !db) throw new Error("Missing secret");
//   const query = await notion.databases.query({
//     database_id: db,
//   });

//    console.log(query.results)
//   res.status(200).json({ name: "John Doe" });
// }
//===========================
//test for get all pages 
//===========================
// import type { NextApiRequest, NextApiResponse } from "next";
// import { Client } from "@notionhq/client";
// import {
//   PageObjectResponse,
//   RichTextItemResponse,
// } from "@notionhq/client/build/src/api-endpoints";

// const secret = process.env.NOTION_SECRET;
// const notion = new Client({ auth: secret });

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     // Step 1: Search for all pages
//     const pagesResponse = await notion.search({
//       filter: {
//         property: "object",
//         value: "page",
//       },
//     });

//     // Log all pages to inspect the structure

//     // Step 2: Filter and format the pages
//     const allPages = pagesResponse.results as PageObjectResponse[];

//     const formattedPages = allPages
//       .filter((page) => !page.parent || page.parent.type === "workspace") // Check if parent is undefined or a workspace
//       .map((page) => {
//         const titleProperty =
//           page.properties["Name"] || page.properties["title"]; // Adjust as necessary for your title property
//         let title = "Untitled";

//         if (titleProperty && titleProperty.type === "title") {
//           // Extract title from rich text
//           const titleItems: RichTextItemResponse[] = titleProperty.title;
//           title = titleItems
//             .map((item) =>
//               item.type === "text" && item.text ? item.text.content : ""
//             )
//             .join("");
//         }

//         return {
//           id: page.id,
//           title,
//           created_time: page.created_time,
//           last_edited_time: page.last_edited_time,
//         };
//       });

//     console.log("Top-Level Pages:", formattedPages.length);
//     res.status(200).json(formattedPages);
//   } catch (error) {
//     console.error("Error retrieving pages:", error);
//     res.status(500).json({ error: "Error retrieving pages" });
//   }
// }


//test for filtering db and tables in page 
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const secret = process.env.NOTION_SECRET;
const pageId = process.env.NOTION_PAGE_ID; // Use a page ID, not a database ID

const notion = new Client({ auth: secret });

// Type guard to narrow down the type of the block
function isBlockObjectResponse(block: any): block is BlockObjectResponse {
  return block.type !== undefined; // Check for the existence of 'type'
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!secret || !pageId) {
    return res.status(400).json({ error: "Missing secret or page ID" });
  }

  try {
    // Retrieve the blocks of the page
    const blocksResponse = await notion.blocks.children.list({
      block_id: pageId,
    });

    // Filter for table blocks using the type guard
    const tableBlocks = blocksResponse.results
      .filter(isBlockObjectResponse) // Ensure block is BlockObjectResponse
      .filter(
        (block) => block.type === "table" || block.type === "child_database"
      );

    // Format the output for clarity

    const formattedTableBlocks = tableBlocks.map((block) => ({
      id: block.id,
      created_time: block.created_time,
      last_edited_time: block.last_edited_time,
      table: block, // This will contain table metadata
    }));

    res.status(200).json({ tables: formattedTableBlocks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving page data" });
  }
}