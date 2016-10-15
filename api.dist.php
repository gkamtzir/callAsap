<?php

  require "vendor/autoload.php";

  function getDB() {

    $username = "#####";
    $password = "#####";
    $server = "localhost";
    $database = "callasap";

    $connection = "mysql:host=$server;dbname=$database;charset=utf8";
    $databaseConnection = new PDO($connection, $username, $password);
    $databaseConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    return $databaseConnection;

  }


  $app = new \Slim\App();

  $app->get("/country", function($request, $response, $args) {

    try {

      $db = getDB();

      $statement = $db->prepare("SELECT * FROM countries");

      $statement->execute();

      $countries = array();

      while($country = $statement->fetch(PDO::FETCH_OBJ)) {

        array_push($countries, $country);

      }

      $newResponse = $response->withStatus(200);
      $newResponse = $newResponse->withHeader('Access-Control-Allow-Origin', '*');
      $newResponse = $newResponse->withHeader("Content-type", "application/json");
      $newResponse = $newResponse->withJSON($countries);

      return $newResponse;


    } catch (PDOException $e) {

      $newResponse = $response->withStatus(500);
      return $newResponse;

    }

  });

  $app->get("/country/{country}", function($request, $response, $args) {

    try {

      $db = getDB();

      $statement = $db->prepare("SELECT * FROM countries WHERE name = :country");

      $statement->bindParam(":country", ucfirst(strtolower($args["country"])), PDO::PARAM_STR);

      $statement->execute();

      $newResponse = $response->withStatus(200);
      $newResponse = $newResponse->withHeader('Access-Control-Allow-Origin', '*');
      $newResponse = $newResponse->withHeader("Content-type", "application/json");
      $newResponse = $newResponse->withJSON($statement->fetch(PDO::FETCH_OBJ));

      return $newResponse;

    } catch (PDOException $e) {

      $newResponse = $response->withStatus(500);
      return $newResponse;

    }

  });

  $app->get("/country/emergency/{country}", function($request, $response, $args) {

    try {

      $db = getDB();

      $statement = $db->prepare("SELECT Type, Number, LastUpdate FROM emergencyphonenumbers WHERE name = :country");

      $statement->bindParam(":country", ucfirst(strtolower($args["country"])), PDO::PARAM_STR);

      $statement->execute();

      $emergencyPhoneNumbers = array();

      while($emergencyPhoneNumber = $statement->fetch(PDO::PARAM_STR)) {

        array_push($emergencyPhoneNumbers, $emergencyPhoneNumber);

      }

      $newResponse = $response->withStatus(200);
      $newResponse = $newResponse->withHeader('Access-Control-Allow-Origin', '*');
      $newResponse = $newResponse->withHeader("Content-type", "application/json");
      $newResponse = $newResponse->withJSON($emergencyPhoneNumbers);

      return $newResponse;


    } catch (PDOException $e) {

      $newResponse = $response->withStatus(500);
      return $newResponse;

    }

  });


  $app->run();
