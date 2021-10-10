{{! <h2>Your Search</h2> }}
<form onsubmit="return false;" class="form-inline">
  <!--<select class="search-criteria form-control">
    {{#searchCriteria}}
    <option value="{{code}}">{{display}}</option>
    {{/searchCriteria}}
  </select>-->
  <input type="text" class="dmi-search-query form-control dmi-lang-km dmi-lang-my" autofocus>
  <button class="btn btn-default dmi-search-start" type="button" title="Search">
    <i class="dmi-icon-search"></i>
  </button>
  <button class="btn btn-default dmi-save-search hidden" type="button" title="Save search">
    <i class="dmi-icon-floppy"></i>
  </button>
  <a class="pull-right" href="/advancedsearch" title="Advanced Search">Advanced Search</a>
</form>
<div class="error-msg"></div>
