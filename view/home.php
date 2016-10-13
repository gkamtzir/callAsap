<div ui-view="navbar"></div>

<h1>Home</h1>

<input type="hidden" ng-init="ip='<?php echo $_SERVER['REMOTE_ADDR']; ?>'">

<h3>Your IP: {{ip}}</h3>

<div ng-show="error == false">

  {{ country }}

</div>

<div ng-show="error">

  <h1>Error.</h1>

</div>
