module.exports = {
  // See https://github.com/Polymer/web-component-tester/blob/master/runner/config.js#L47-54
  activeBrowsers: [],
  plugins: {
    local: true,
    "istanbul": {
      "dir": "./coverage",
      "reporters": ["text-summary", "lcov"],
      "include": [
        "/vaadin-context-menu-overlay.html",
        "/vaadin-context-menu.html"
      ],
      "exclude": []
    }
  },
  root: '.'
};
