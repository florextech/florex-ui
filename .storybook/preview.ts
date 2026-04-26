import type { Preview } from "@storybook/react";
import "../src/themes/florex.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "florex",
      values: [{ name: "florex", value: "#0b0d0c" }],
    },
  },
};

export default preview;
