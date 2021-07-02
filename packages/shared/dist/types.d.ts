declare const toPascalCase: (value: any) => any;

declare function getButtonLinkType(button: any): "a" | "nuxt-link" | "div";
declare function getButtonLink(button: any): {
    href: any;
    target: string;
    to?: undefined;
} | {
    to: string;
    href?: undefined;
    target?: undefined;
} | {
    href?: undefined;
    target?: undefined;
    to?: undefined;
};

/**
 * Clears out all undefined properties from an object.
 * @param {Object} props
 * @returns {Object} Sanitized object with defined values.
 */
declare function forwardProps(props: any): {};

export { forwardProps, getButtonLink, getButtonLinkType, toPascalCase };
