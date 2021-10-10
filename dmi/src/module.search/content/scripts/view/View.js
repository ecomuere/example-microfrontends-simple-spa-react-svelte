define('module.search/view/View', [
  'vendor.asset.jquery/jquery',
  'vendor.asset.backbone/backbone',
  'dmi.pages.dash/util/mq2/MQ',
  'dmi.pages.dash/util/CommonUtil'
], function ($, Backbone, MQ, CommonUtil) {
  'use strict';
  return Backbone.View.extend({
    events: function () {
      return {
        'click .dmi-search-start': 'onSearch',
        'keypress .dmi-search-query': 'triggerSearch',
        'click .alert i': 'hideError'
      };
    },

    initialize: function () {
      this.$searchQuery = this.$el.find('.dmi-search-query');
      this.$searchError = this.$el.find('.error-msg');
      //this.$searchCriteria = this.$el.find('.search-criteria');

      this.searchPubSocket = MQ.socket('pub', 'page://dmi-message-search');

      // If Search query is part of Query string
      var searchString = this.getQSValue('searchstring');
      if (searchString) {
        this.$searchQuery.val(decodeURI(searchString));
        /*var searchOperator = this.getQSValue('searchoperator');
        if (searchOperator) {
          this.$searchCriteria.val(searchOperator);
        }*/
        this.onSearch();

      }
    },

    triggerSearch: function (e) {
      if (e.which === 13) {
        e.preventDefault();
        this.onSearch();
      }
    },

    getQSValue: function (name) {
      var query = window.location.search.substring(1).toLowerCase();
      var vars = query.split('&');
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (pair[0] === name) {
          return pair[1];
        }
      }
      return null;
    },

    onSearch: function (e) {
      if (e) {
        e.preventDefault();
      }
      if (!this.$searchQuery.val()) {
        CommonUtil.showErrorMessage('Search input must be supplied!', this.$searchError);
      } else {
        this.$searchError.hide();
        this.searchPubSocket.send({
          searchMode: 'simple',
          query: {
            searchString: this.$searchQuery.val().replace(/[\u200B-\u200D\uFEFF]/g, ''),
            //searchOperator: this.$searchCriteria.val()
          }
        });
      }
    },

    hideError: function (e) {
      $(e.currentTarget).closest('.alert').stop(true, true).fadeOut(100);
    }
  });
});