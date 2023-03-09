import { createContainer, createVar, style } from "@vanilla-extract/css";
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

export const containerName = createContainer();
const alpha = createVar();

const colours = {
  "light-text": "#FFFFFF",
  "dark-text": "#59594A",
  accent: "#801A86",
  "dark-bg": "#000000",
  "light-bg": "#EDDDD4",
};

const space = {
  none: 0,
  small: "4px",
  medium: "8px",
  large: "16px",
};

const colourProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: colours,
    accent: colours,
    backgroundColor: colours,
    background: {
      red: {
        vars: { [alpha]: "0.2" },
        background: `rgba(255, 0, 0, ${alpha})`,
      },
    },
    opacity: {
      1: { vars: { [alpha]: "1" }, background: `rgba(150,150,150, ${alpha})` },
      0.5: {
        vars: { [alpha]: "0.5" },
        background: `rgba(150,150,150, ${alpha})`,
      },
      0.1: { vars: { [alpha]: "0.1" } },
    },
  },
});

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  responsiveArray: ['mobile', 'tablet', 'desktop'],
  properties: {
    display: ["none", "block", "flex", "grid"],
    flexDirection: ["row", "column"],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    nonSense: space,
  },
  shorthands: {
    padding: ["paddingBottom", "paddingTop", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});

const containerProperties = defineProperties({
  conditions: {
    small: {},
    medium: {
      "@container": `${containerName} (min-width: 768px)`,
    },
    large: {
      "@container": `${containerName} (min-width: 1024px)`,
    },
  },
  defaultCondition: "small",
  properties: {
    fontSize: {
      small: "10px",
      medium: "16px",
      large: "20px",
    },
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  containerProperties,
  colourProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
