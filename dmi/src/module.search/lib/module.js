module.exports = Module;

function Module(searchService) {
  this.service = searchService;
}

Module.$inject = ['svc.search.SearchService'];

Module.prototype.execute = function (params, cb) {
  this.service.getSearchCriteria(function (error, searchCriteria) {
    if (error) return cb(error);
    cb(null, {
      view: 'search',
      title: 'Search',
      searchCriteria: searchCriteria,
      require: 'module.search/module'
    });
  });
};