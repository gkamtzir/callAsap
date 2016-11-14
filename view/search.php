<?php include_once("analyticstracking.php") ?>
<div ui-view="navbar"></div>

<div class="container">

  <h1>Search</h1>

  <h3>Find any emergency phone immediately.</h3>

  <br />

  <div class="form-group">
    <div class="row">
      <div class="col-md-3">
        <label for="country">Country:</label>
      </div>
      <div class="col-md-6">
        <select ng-options="option.Name for option in countries track by option.ID" name="country" id="country" ng-model="country" ng-required="true" class="form-control">
          <option value="" disabled selected>Choose country</option>
        </select>
      </div>
    </div>
  </div>

  <br /><br />

  <div ui-view="country"></div>

</div>
