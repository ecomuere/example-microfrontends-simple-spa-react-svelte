import AppView from "./app.view";

export default Backbone.Router.extend({
  routes: {
    "": () => {
      new AppView({ greeting: "Home Page!!!!" });
    },
    about: () => {
      new AppView({ greeting: "About Page" });
    },
    "*path": () => {
      new AppView({ greeting: "Page Not Found" });
    },
  },
});
