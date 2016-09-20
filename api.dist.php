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

  $app->get("/country/{country}", function($request, $response, $args) {

    try {

      $db = getDB();

      $statement = $db->prepare("SELECT * FROM countries WHERE name = :country");

      $statement->bindParam(":country", $args["country"], PDO::PARAM_STR);

      $statement->execute();

      $newResponse = $response->withHeader("Content-type", "application/json");
      $newResponse = $newResponse->withJSON($statement->fetch(PDO::FETCH_OBJ));

      return $newResponse;

    } catch (PDOException $e) {

      $newResponse = $response->withStatus(500);
      return $newResponse;

    }

  });


  $app->run();
