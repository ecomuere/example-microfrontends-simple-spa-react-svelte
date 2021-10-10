import AppRouter from "./app.router";

$(() => {
  new AppRouter();
  Backbone.history.start();
});
