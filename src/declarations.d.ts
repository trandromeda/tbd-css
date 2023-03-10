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