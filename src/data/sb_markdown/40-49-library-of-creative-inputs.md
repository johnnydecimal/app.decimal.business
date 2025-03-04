---
# NOTE this file is in .prettierignore for the Mermaid diagram
---


<pre class="mermaid mermaid-light">
flowchart TB
    n1["Start"]
    n2["40-49 Library of creative inputs"]
    n3["Make a thing; do the creative work"]
    n4["Ad-hoc per-job input"]
    n5["50-59 Portfolio of creative outputs"]
    n6["Stop"]
    n1 --> n2
    n1 --> n4
    n2 ---> n3
    n4 --> n3
    n5 -->|Use the output from a previous job| n3
    n5 --> n6
    n3 -->|If you produced something reusable, save it in your library| n2
    n3 ---> n5

    n1@{ shape: start}
    n2@{ shape: internal-storage}
    n4@{ shape: manual-input}
    n3@{ shape: proc}
    n5@{ shape: internal-storage}
    n6@{ shape: stop}

    click n5 "/90-99"
</pre>

<pre class="mermaid mermaid-dark">
---
config:
  theme: dark
---
flowchart TB
    n1["Start"]
    n2["40-49 Library of creative inputs"]
    n3["Make a thing; do the creative work"]
    n4["Ad-hoc per-job input"]
    n5["50-59 Portfolio of creative outputs"]
    n6["Stop"]
    n1 --> n2
    n1 --> n4
    n2 ---> n3
    n4 --> n3
    n5 -->|You might use an output from a previous job| n3
    n5 --> n6
    n3 ---> n5
    n3 -->|If you produced something reusable, save it in your library| n2

    n1@{ shape: start}
    n2@{ shape: internal-storage}
    n4@{ shape: manual-input}
    n3@{ shape: proc}
    n5@{ shape: internal-storage}
    n6@{ shape: stop}
</pre>