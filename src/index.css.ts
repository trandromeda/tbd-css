import { createContainer, style } from "@vanilla-extract/css";
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { containerName, sprinkles } from "./sprinkles.css";
import { accentVar } from "./accent.css";

export const accentText = style({
  color: accentVar,
});

// export const container = style({
//   padding: 10,
//   backgroundColor: '#f2f2f2'
// });


export const container = style([
  {
    containerName,
    containerType: "inline-size",
  },
  sprinkles({
    display: "block",
    padding: "medium",
    color: {
      lightMode: "dark-text",
      darkMode: "light-text",
    },
    backgroundColor: {
      lightMode: "light-bg",
      darkMode: "dark-bg",
    },
    opacity: 0.5,
  }),
]);

export const responsiveText = sprinkles({
    fontSize: {
        small: 'small',
        medium: 'medium',
        large: 'large'
    }
})

// fontSize: {
//     small: 'small',
//     medium: 'medium',
//     large: 'large'
//   }
