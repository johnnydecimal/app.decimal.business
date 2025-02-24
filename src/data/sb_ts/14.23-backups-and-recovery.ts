// Auto-generated from 14.23-backups-and-recovery.md
import type { IdEntry } from "@data/smallBusinessFlat";
const entry: IdEntry = {
  "number": "14.23",
  "title": "Backups & recovery",
  "description": "Processes, schedules, and tests to ensure you don’t lose anything.",
  "type": "id",
  "isPublic": false,
  "isHeader": false,
  "metadata": {
    "createdDate": "2025-02-24T05:52:12.775Z",
    "updatedDate": "2025-02-24T05:52:12.775Z"
  },
  "extensions": {
    "smallBusiness": {
      "examples": "Descriptions of what backup services you use, such as Time Machine, Windows Backup, Backblaze, Arq; notes on what data is backed up by which service; a summary of backup jobs, including the schedule.",
      "overview": "This completes the trifecta. You have data, on storage. Now you need to ensure that you don't lose it. The 3-2-1 backup strategy is acknowledged as the way to do it. Three copies of your data, on two different media, one copy offsite.\n\nWhen choosing what to back up, we recommend thinking in terms of the data you defined in [[14.22]]. For instance, Johnny doesn’t necessarily think “I'll back up my whole laptop”. He focuses on particular data blocks, like the precious D85 folder – one copy of which happens to be on the laptop.\n\nThe Airtable database mentioned in [[14.22]] summarises what, where, and how often our data blocks are backed up. Keep your records in whatever way works for you.\n\nFor future reference, remember to note any configuration details you’ve chosen in your backup service. And if you have sensitive stuff, like customer data, that should also be encrypted.",
      "alsoSee": "Remember to include a _printed_ copy of your data recovery instructions in [[11.23]]. Printed because you might not be able to access your computer in an emergency (e.g. due to damage, theft, or ransomware). Do not put passwords in these printouts, they never leave your password manager.\n\n\n[Do this one for first release]",
      "links": "[The 3-2-1 Backup Strategy](https://www.backblaze.com/blog/the-3-2-1-backup-strategy/).\n\n[World Backup Day](https://worldbackupday.com).\n\nHow to export data from [Gmail](https://takeout.google.com/settings/takeout?pli=1).\n\nHow to export data from [Xero](https://central.xero.com/s/article/Export-data-out-of-Xero).\n\nHow to export data from [Instagram](https://help.instagram.com/181231772500920).\n\nAn article about how to back up emails in [Gmail, Outlook, and iCloud](https://www.wired.com/story/how-to-back-up-email-gmail-outlook-icloud/)."
    }
  }
};
export default entry;
