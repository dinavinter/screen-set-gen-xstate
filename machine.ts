import { setup } from "xstate";

export const machine = setup({
  types: {
    context: {} as {
      js: null;
      css: null;
      bdds: null;
      html: null;
      jsonSpec: null;
      aiMessages: unknown[];
      userMessages: unknown[];
      screenSetSpec: null;
    },
    events: {} as
      | { type: "start" }
      | { type: "updateJS" }
      | { type: "updateCSS" }
      | { type: "generateJS" }
      | { type: "updateBDDs" }
      | { type: "updateHTML" }
      | { type: "generateCSS" }
      | { type: "generateBDDs" }
      | { type: "generateHTML" }
      | { type: "userSatisfied" }
      | { type: "displayResults" }
      | { type: "updateJSONSpec" }
      | { type: "generateJSONSpec" }
      | { type: "receiveUserInput" }
      | { type: "updatesCompleted" }
      | { type: "adjustmentsNeeded" }
      | { type: "receiveUserFeedback" }
      | { type: "updateScreenSetSpec" }
      | { type: "allArtifactsGenerated" }
      | { type: "generateScreenSetSpec" }
      | { type: "requirementsUnderstood" },
  },
  actions: {
    logUserMessage: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    processUserInput: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    generateScreenSetSpec: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    generateBDDs: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    generateJSONSpec: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    generateHTML: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    generateJS: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    generateCSS: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    processUserFeedback: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    updateScreenSetSpec: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    updateBDDs: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    updateJSONSpec: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    updateHTML: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    updateJS: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
    updateCSS: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
  },
  guards: {
    "New guard": function ({ context, event }) {
      // Add your guard condition here
      return true;
    },
  },
  schemas: {
    events: {
      start: {
        type: "object",
        properties: {},
      },
      updateJS: {
        type: "object",
        properties: {},
      },
      updateCSS: {
        type: "object",
        properties: {},
      },
      generateJS: {
        type: "object",
        properties: {},
      },
      updateBDDs: {
        type: "object",
        properties: {},
      },
      updateHTML: {
        type: "object",
        properties: {},
      },
      generateCSS: {
        type: "object",
        properties: {},
      },
      generateBDDs: {
        type: "object",
        properties: {},
      },
      generateHTML: {
        type: "object",
        properties: {},
      },
      userSatisfied: {
        type: "object",
        properties: {},
      },
      displayResults: {
        type: "object",
        properties: {},
      },
      updateJSONSpec: {
        type: "object",
        properties: {},
      },
      generateJSONSpec: {
        type: "object",
        properties: {},
      },
      receiveUserInput: {
        type: "object",
        properties: {},
      },
      updatesCompleted: {
        type: "object",
        properties: {},
      },
      adjustmentsNeeded: {
        type: "object",
        properties: {},
      },
      receiveUserFeedback: {
        type: "object",
        properties: {},
      },
      updateScreenSetSpec: {
        type: "object",
        properties: {},
      },
      allArtifactsGenerated: {
        type: "object",
        properties: {},
      },
      generateScreenSetSpec: {
        type: "object",
        properties: {},
      },
      requirementsUnderstood: {
        type: "object",
        properties: {},
      },
    },
    context: {
      js: {
        type: "null",
        description:
          'Generated automatically based on the key: "js" in initial context values',
      },
      css: {
        type: "null",
        description:
          'Generated automatically based on the key: "css" in initial context values',
      },
      bdds: {
        type: "null",
        description:
          'Generated automatically based on the key: "bdds" in initial context values',
      },
      html: {
        type: "null",
        description:
          'Generated automatically based on the key: "html" in initial context values',
      },
      jsonSpec: {
        type: "null",
        description:
          'Generated automatically based on the key: "jsonSpec" in initial context values',
      },
      aiMessages: {
        type: "array",
        items: {
          type: "string",
        },
        description:
          'Generated automatically based on the key: "aiMessages" in initial context values',
      },
      userMessages: {
        type: "array",
        items: {
          type: "string",
        },
        description:
          'Generated automatically based on the key: "userMessages" in initial context values',
      },
      screenSetSpec: {
        type: "null",
        description:
          'Generated automatically based on the key: "screenSetSpec" in initial context values',
      },
    },
  },
}).createMachine({
  context: {
    js: null,
    css: null,
    bdds: null,
    html: null,
    jsonSpec: null,
    aiMessages: [],
    userMessages: [],
    screenSetSpec: null,
  },
  id: "aiTeam",
  initial: "Initializing",
  states: {
    Initializing: {
      on: {
        start: {
          target: "UnderstandingRequirements",
        },
      },
      description:
        "The AI agents team is initializing and preparing to start the collaboration process.",
    },
    UnderstandingRequirements: {
      on: {
        receiveUserInput: {
          actions: [
            {
              type: "logUserMessage",
            },
            {
              type: "processUserInput",
            },
          ],
        },
        requirementsUnderstood: {
          target: "GeneratingArtifacts",
        },
      },
      description:
        "The AI agents are actively chatting with the user to understand the requirements for the project.",
    },
    GeneratingArtifacts: {
      on: {
        generateScreenSetSpec: {
          actions: {
            type: "generateScreenSetSpec",
          },
        },
        generateBDDs: {
          actions: {
            type: "generateBDDs",
          },
        },
        generateJSONSpec: {
          actions: {
            type: "generateJSONSpec",
          },
          guard: {
            type: "New guard",
          },
        },
        generateHTML: {
          actions: {
            type: "generateHTML",
          },
        },
        generateJS: {
          actions: {
            type: "generateJS",
          },
        },
        generateCSS: {
          actions: {
            type: "generateCSS",
          },
        },
        allArtifactsGenerated: {
          target: "VisualizingResults",
        },
      },
      description:
        "The AI agents are generating the screen-set spec, BDDs, JSON-spec, HTML, JS, and CSS based on the understood requirements.",
    },
    VisualizingResults: {
      on: {
        displayResults: {
          target: "ChattingWithUser",
        },
      },
      description:
        "The AI agents are visualizing the generated artifacts for the user and for each other to review and ensure everything is as required.",
    },
    ChattingWithUser: {
      on: {
        receiveUserFeedback: {
          actions: [
            {
              type: "logUserMessage",
            },
            {
              type: "processUserFeedback",
            },
          ],
        },
        adjustmentsNeeded: {
          target: "UpdatingArtifacts",
        },
        userSatisfied: {
          target: "Completed",
        },
      },
      description:
        "The AI agents are discussing the results with the user, gathering feedback, and making necessary adjustments.",
    },
    UpdatingArtifacts: {
      on: {
        updateScreenSetSpec: {
          actions: {
            type: "updateScreenSetSpec",
          },
        },
        updateBDDs: {
          actions: {
            type: "updateBDDs",
          },
        },
        updateJSONSpec: {
          actions: {
            type: "updateJSONSpec",
          },
        },
        updateHTML: {
          actions: {
            type: "updateHTML",
          },
        },
        updateJS: {
          actions: {
            type: "updateJS",
          },
        },
        updateCSS: {
          actions: {
            type: "updateCSS",
          },
        },
        updatesCompleted: {
          target: "VisualizingResults",
        },
      },
      description:
        "The AI agents are updating the artifacts based on user feedback to meet the requirements accurately.",
    },
    Completed: {
      type: "final",
      description:
        "The AI agents have completed the project, and the user is satisfied with the results.",
    },
  },
});
