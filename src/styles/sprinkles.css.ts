import { createContainer, createVar, style } from "@vanilla-extract/css";
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

export const cardContainer = createContainer();
export const pageContainer = createContainer();
const alpha = createVar();

const colours = {
  "light-text": "#FFFFFF",
  "dark-text": "rgb(34, 34, 34)",
  accent: "#801A86",
  "dark-bg": "#000000",
  "light-bg": "#FFFFFF",
};

const space = {
  none: 0,
  small: "4px",
  medium: "8px",
  large: "16px",
};

const fontSizes = {
  10: "10px",
  14: "14px",
  18: "18px",
  22: "22px",
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

const unresponsiveProperties = defineProperties({
  properties: {
    borderRadius: ["5px", "10px"],
  },
});

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  responsiveArray: ["mobile", "tablet", "desktop"],
  properties: {
    display: ["none", "block", "flex", "grid"],
    flexDirection: ["row", "column"],
    gap: ["0.25em", "0.5em", "1em"],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    gridColumn: ["1 / -1"]
  },
  shorthands: {
    padding: ["paddingBottom", "paddingTop", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});

const pageContainerProperties = defineProperties({
  conditions: {
    small: {},
    medium: {
      "@container": `${pageContainer} (min-width: 768px)`,
    },
    large: {
      "@container": `${pageContainer} (min-width: 1024px)`,
    },
  },
  defaultCondition: "small",
  responsiveArray: ["small", "medium", "large"],
  properties: {
    fontSize: fontSizes,
    width: {
      sm: "240px",
      md: "324px",
      lg: "25%",
    },
  },
});

export const sprinkles = createSprinkles(
  unresponsiveProperties,
  responsiveProperties,
  pageContainerProperties,
  colourProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
