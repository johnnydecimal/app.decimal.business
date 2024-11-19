import { marked } from "marked";
import type { JohnnyDecimalSystem } from "../types/jd_schema";

interface IDsWithACContext {
  areaId: string;
  areaTitle: string;
  categoryId: string;
  categoryTitle: string;
  idNumber: string;
  idTitle: string;
  idDescription?: string;
  examples?: string;
  moreInfo?: string;
  exceptions?: string;
  alsoSee?: string;
  rationale?: string;
}

/**
 * # generateIds
 *
 * Iterate through a system, and when we reach an ID, push all of that IDs
 * details, and the ID/title of its containing category and area, to an array.
 *
 * The idea is that this is a basically flat array of objects that you can
 * query when you want to know something about an ID.
 */
async function generateIdsWithACContext(
  system: JohnnyDecimalSystem
): Promise<IDsWithACContext[]> {
  const idsWithACContext: IDsWithACContext[] = [];

  const areas = Object.keys(system.areas);

  for (const area of areas) {
    const areaId = system.areas[area].id;
    const areaTitle = system.areas[area].title;

    const categories = system.areas[area].categories
      ? Object.keys(system.areas[area].categories)
      : [];

    for (const category of categories) {
      if (!system.areas[area].categories?.[category]) {
        throw new Error("1: Keeping TS happy -- this shouldn't be possible");
      }
      const categoryId = system.areas[area].categories[category].id;
      const categoryTitle = system.areas[area].categories[category].title;

      const ids = system.areas[area].categories[category].ids
        ? Object.keys(system.areas[area].categories[category].ids)
        : [];

      for (const id of ids) {
        if (!system.areas[area].categories[category].ids?.[id]) {
          throw new Error("2: Keeping TS happy -- this shouldn't be possible");
        }
        const idNumber = system.areas[area].categories[category].ids[id].id;
        const idTitle = system.areas[area].categories[category].ids[id].title;
        const idDescription =
          system.areas[area].categories[category].ids[id].description;

        let mdExamples, mdMoreInfo, mdExceptions, mdAlsoSee, mdRationale;
        const sbDescriptions =
          system.areas[area].categories[category].ids[id].extensions
            ?.smallBusiness;
        if (sbDescriptions) {
          const { examples, moreInfo, exceptions, alsoSee, rationale } =
            sbDescriptions;

          mdExamples = examples ? await marked.parse(examples) : undefined;
          mdMoreInfo = moreInfo ? await marked.parse(moreInfo) : undefined;
          mdExceptions = exceptions
            ? await marked.parse(exceptions)
            : undefined;
          mdAlsoSee = alsoSee ? await marked.parse(alsoSee) : undefined;
          mdRationale = rationale ? await marked.parse(rationale) : undefined;
        }

        idsWithACContext.push({
          areaId,
          areaTitle,
          categoryId,
          categoryTitle,
          idNumber,
          idTitle,
          idDescription,
          examples: mdExamples,
          moreInfo: mdMoreInfo,
          exceptions: mdExceptions,
          alsoSee: mdAlsoSee,
          rationale: mdRationale,
        });
      }
    }
  }

  return idsWithACContext;
}

export default generateIdsWithACContext;
