import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID;

const getDatabase = async () => {
  const response = await notion.databases.retrieve({
    database_id: databaseId,
  });
  console.log(response);
};

const getMembers = async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        timestamp: "created_time",
        direction: "ascending",
      },
    ],
  });
  return responseToMembers(response);
};

const responseToMembers = async (response) => {
  return response.results.map((result) => {
    return {
      name: result.properties.Name.title.map((e) => e.plain_text) + "",
      birthday: result.properties.Birthday.date.start,
      country: result.properties.Country.select.name,
      job: result.properties.Job.rich_text.map((e) => e.plain_text) + "",
      bio: result.properties.Bio.rich_text.map((e) => e.plain_text) + "",
      description: result.properties.Description.formula.string,
      profile: result.properties.Profile.files.map((e) => e.file.url) + "",
    };
  });
};

const addItem = async (text) => {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: {
          title: [
            {
              text: {
                content: text,
              },
            },
          ],
        },
      },
    });
    console.log(response);
    console.log("Successfully created");
  } catch (err) {
    console.error(err.body);
  }
};

const members = async () => {
  return await getMembers()
    .then((log) => {
      return log;
    })
    .catch((e) => console.log(e.body));
};
export default members;
