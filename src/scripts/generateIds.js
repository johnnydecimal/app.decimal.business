// External
import { writeFile } from "fs/promises";
// Internal
import generateIdsWithACContext from "../helpers/generateIdsWithACContext.ts";
// Data
import sb from "../data/smallbusiness.ts";

(async () => {
  const idsWithACContext = await generateIdsWithACContext(sb);

  await writeFile(
    "./src/data/idsWithACContext.json",
    JSON.stringify(idsWithACContext, null, 2),
    "utf-8"
  );
  console.log(
    "Generated IDs with AC context and saved to idsWithACContext.json"
  );
})();
