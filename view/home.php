<?php include_once("analyticstracking.php") ?>
<div ui-view="navbar"></div>

<div class="container">

  <h1>What is your emergency?</h1>
  <loading></loading>

  <div ng-show="error == false">

    <div ui-view="country"></div>

  </div>

  <div ng-show="error">

    <h1>{{ error }}</h1>

  </div>

</div>
