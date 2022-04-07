import { createMachine } from "xstate";

export const machine =
  /** @xstate-layout N4IgpgJg5mDOIC5QQPZQHQENYBsxgAcBiAd0wGs4BaAVwMVAJVgEsAXFlAOwZAA9EVAEwAOdABYAbFKEB2AJyyArCJGyRQoQBoQAT0Tj56OQAYAjELMiTp2QGZJSgL5OdqDNjyEiAMxQoIKhwaACcwXiZWDm5eAQQqCxN0ETshSSElDPk0lJEdfXjE9DMzSRN5cUNMk2lxFzc0LDJKX0wcHFgqT3x6JBBI9k4ePriLO2NLcTlJESVxJTsRSXzBIQcJeTKNWTXs+RNnepAuALhedyxcHojmQZiRwTsTMSkSuyUrGYPZlfjU9FkskkChShnkS3EsiOF0wzXCfQG0WGoFGC2Si3EJhqBymSkcvymEkxwIh0hSc2haBuUSGsUe-1eZnen2sKiUvyoTyMUlkUxqQhqFUkLhcQA */
  createMachine(
    {
      id: "dog",
      initial: "asleep",
      states: {
        asleep: {
          on: {
            "wakes-up": {
              actions: "go wakes up",
              target: "awake",
            },
            "food-lure": {
              actions: "give food",
              target: "awake",
            },
          },
        },
        awake: {
          entry: ["awake entry"],
          exit: ["awake out"],
          on: {
            "falls-asleep": {
              actions: "go asleep",
              target: "asleep",
            },
          },
        },
      },
    },
    {
      actions: {
        "go wakes up": () => {
          alert("go wakes up");
        },
        "give food": () => {
          alert("give food");
        },
        "go asleep": () => {
          alert("go asleep");
        },
        "awake entry": () => {
          alert("awake entry");
        },
        "awake out": () => {
          alert("awake out");
        },
      },
    }
  );
