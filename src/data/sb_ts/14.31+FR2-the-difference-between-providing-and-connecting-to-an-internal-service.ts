// Auto-generated from 14.31+FR2-the-difference-between-providing-and-connecting-to-an-internal-service.md
import type { FurtherReadingEntry } from "@data/smallBusinessFlat";
const entry: FurtherReadingEntry = {
  "number": "14.31+FR2",
  "title": "The difference between providing and connecting to an internal service",
  "type": "furtherReading",
  "isPublic": false,
  "metadata": {
    "createdDate": "2025-02-26T01:32:40.043Z",
    "updatedDate": "2025-02-26T01:32:40.043Z"
  },
  "extensions": {
    "furtherReading": {
      "text": "We’re going pretty deep here. But if you’re interested, here’s why we’re recommending that some details are saved in this ID versus others.\n\nIf a device’s configuration relates to _providing_ an internal service, then your config notes live with that device. For example, you type things in the web interface of an ADSL modem/router to create a wifi network. Then you add some bullets to [[14.13]] in your JDex so you can remember what you did.\n\nBut the instructions for _connecting_ to an internal service live alongside the service in this ID. For example, how to connect a laptop, phone, or printer to the wifi. Now we're ‘consuming the configuration’, if you like.\n\nHere’s a scenario for our office wifi:\n\n1. Our ISP has configuration – the notes go in [[14.32]].\n\n2. Our ADSL modem has configuration – the notes go in [[14.13]].\n\n3. Our wifi router has configuration. Ditto.\n\n4. We just built a wifi internal service – the notes live here, including:\n\n- a list of the components involved,\n- a diagram of how it’s set up,\n- instructions on how to connect to it,\n- steps to follow if it’s not working.\n\nBasically, just tell yourself a story on what you did so you’ll remember in the future, and you’ll know what devices to check when the wifi is down.\n\n5. When we get a new iPad, we connect it to the wifi with the instructions in step 4."
    }
  }
};
export default entry;
