<?php


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
