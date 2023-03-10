import { style } from "@vanilla-extract/css";
import { cardContainer, pageContainer, sprinkles } from "./sprinkles.css";

// export const container = style({
//   padding: 10,
//   backgroundColor: '#f2f2f2'
// });

export const page = style([
  {
    containerName: pageContainer,
    containerType: "inline-size",
  },
]);

export const card = style([
  {
    containerName: cardContainer,
    containerType: "inline-size",
  },
  sprinkles({
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    width: ["sm", "md", "lg"],
    color: {
      lightMode: "dark-text",
      darkMode: "light-text",
    },
    backgroundColor: {
      lightMode: "light-bg",
      darkMode: "dark-bg",
    },
  }),
]);

export const cardContents = style([
  {
    gridTemplateColumns: "minmax(0, 1fr) max-content",
  },
  sprinkles({
    display: "grid",
    gap: "0.25em"
  }),
]);

/** TODO just for testing, remove */
export const responsiveText = sprinkles({
  fontSize: [10, 18, 22],
});

export const rating = style({
    gridColumn: "-2 / -1",
    gridRow: "1",
    justifySelf: "end"
})

export const firstCol = sprinkles({
    gridColumn: "1 / -1"
})

export const img = style([
  {
    width: "100%",
    height: "100%",
    aspectRatio: "1.2 / 1"
  },
  sprinkles({
    borderRadius: "10px",
  }),
]);

export const bold = style({
    fontWeight: 600
})
