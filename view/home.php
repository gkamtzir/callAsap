<?php include_once("analyticstracking.php") ?>
<div ui-view="navbar"></div>

<div class="container">

  <h1>What are you waiting for?</h1>

  <input type="hidden" ng-init="ip='<?php echo $_SERVER['REMOTE_ADDR']; ?>'">

  <h4>Your IP: {{ip}}</h4>

  <div ng-show="error == false">

    <div ui-view="country"></div>

  </div>

  <div ng-show="error">

    <h1>{{ error }}</h1>

  </div>

</div>
