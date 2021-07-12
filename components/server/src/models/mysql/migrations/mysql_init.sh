#!/usr/bin/env bash
#!/bin/bash

STORAGE_DB=storage
STORAGE_USER=storage
STORAGE_PASSWORD=developer
ROOT_USER=root

function create_user_and_database() {

	local database=$1
	local user=$2
	echo "Creating user and database '$database'"
	mysql --user=root --password=developer <<-EOSQL
		CREATE DATABASE $database;
		CREATE USER $user IDENTIFIED BY "$STORAGE_PASSWORD";
		GRANT ALL PRIVILEGES ON $database . * TO '$user';
	EOSQL
}

if [ -n "$MYSQL_MULTIPLE_DATABASES" ]; then
	echo "Multiple database creation requested: $MYSQL_MULTIPLE_DATABASES"
	for db in $(echo $MYSQL_MULTIPLE_DATABASES | tr ',' ' '); do
			create_user_and_database $db $db
	done
	echo "Multiple databases created"
fi
