#!/bin/bash
SERVERS=(Node Aero Fastify Restify Express Koa Hapi Feathers)
CONCURRENCY=10

for port in {5000..5007}
do
	echo -e "\e[33m${SERVERS[$port - 5000]}:\e[0m"
	wrk -c $CONCURRENCY -d 2m http://localhost:$port/ | grep "Requests/sec"
	wrk -c $CONCURRENCY -d 2m http://localhost:$port/test | grep "Requests/sec"
done
