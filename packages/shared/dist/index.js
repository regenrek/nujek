'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const clearLodashAndUpper = (value) => {
  return value.replace(/_/, "").toUpperCase();
};
const clearHyphenAndUpper = (value) => {
  return value.replace(/-/, "").toUpperCase();
};
const toPascalCase = (value) => {
  value = value.replace(/(^\w|-\w)/g, clearHyphenAndUpper);
  value = value.replace(/(^\w|_\w)/g, clearLodashAndUpper);
  return value;
};

function getButtonLinkType(button) {
  var _a;
  switch ((_a = button.link) == null ? void 0 : _a.linktype) {
    case "url":
      return "a";
    case "story":
      return "nuxt-link";
    default:
      return "div";
  }
}
function getButtonLink(button) {
  var _a;
  switch ((_a = button.link) == null ? void 0 : _a.linktype) {
    case "url":
      return {href: button.link.url, target: "blank"};
    case "story":
      return {to: "/" + button.link.story.full_slug};
    default:
      return {};
  }
}

function forwardProps(props) {
  const pure = {};
  for (const prop in props) {
    if (props[prop] !== void 0) {
      pure[prop] = props[prop];
    }
  }
  return pure;
}

exports.forwardProps = forwardProps;
exports.getButtonLink = getButtonLink;
exports.getButtonLinkType = getButtonLinkType;
exports.toPascalCase = toPascalCase;
