export default Backbone.View.extend({
  template: _.template($("#view-template").html()),

  el: "#root",

  initialize(options) {
    this.options = options;
    this.render();
  },

  render() {
    const html = this.template({ greeting: this.options.greeting });

    this.$el.html(html);

    return this;
  },
});
