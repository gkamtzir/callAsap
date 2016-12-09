<?php include_once("analyticstracking.php") ?>
<div ui-view="navbar"></div>

<div class="container">

  <h1>SEARCH</h1>
  
  <h4>Find any emergency phone immediately.</h4>

  <br />

  <div class="form-group">
    <div class="row">
      <div class="col-md-3">
        <label for="country">Country:</label>
      </div>
      <div class="col-md-6">
        <select ng-options="option.Name for option in countries | orderBy: 'Name' track by option.ID" name="country" id="country" ng-model="country" ng-required="true" class="form-control">
          <option value="" disabled selected>Choose country</option>
        </select>
      </div>
    </div>
  </div>

  <hr />

  <div ui-view="country"></div>

</div>
