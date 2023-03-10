declare namespace JSX {
      interface IntrinsicElements {
        "vanilla-example": React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement>,
          HTMLElement
        >;
      "lit-example": MyElementAttributes;
      }

      interface MyElementAttributes extends React.HTMLAttributes {
        name?: string;
      }
  }

// https://stackoverflow.com/questions/52759220/importing-images-in-typescript-react-cannot-find-module
declare module '*.jpg';