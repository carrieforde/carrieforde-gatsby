import "../src/styles/settings.css";
import "../src/styles/themes.css";
import "../src/styles/global.css";
import "../src/styles/prismjs.css";
import "../src/utils/fontawesome";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

global.__BASE_PATH__ = "/";

window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname);
};
