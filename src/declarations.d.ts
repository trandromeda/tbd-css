declare namespace JSX {
      interface IntrinsicElements {
        "vanilla-example": React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement>,
          HTMLElement
        >;
      "lit-example": LitExampleElementAttributes;
      }

      interface LitExampleElementAttributes extends React.HTMLAttributes {
        img?: string;
        title?: string;
        region?: string;
        dates?: string;
        price?: string;
        rating?: string;
      }
  }

// https://stackoverflow.com/questions/52759220/importing-images-in-typescript-react-cannot-find-module
declare module '*.jpg';