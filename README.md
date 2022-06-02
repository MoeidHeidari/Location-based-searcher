# Parloa Invitation

# Table of Contents

- [Parloa Invitation](#parloa-invitation)
- [Table of Contents](#table-of-contents)
  - [Overview](#overview)
      - [Provided APIs](#provided-apis)
  - [Code architecture](#code-architecture)
  - [source code](#source-code)
  - [Service build information](#service-build-information)
    - [Regular user](#regular-user)
    - [Advanced user](#advanced-user)
  - [Deployment](#deployment)
      - [Helm](#helm)
      - [Kubernetes manifests](#kubernetes-manifests)
  - [Monitoring and alerting](#monitoring-and-alerting)
    - [Health check](#health-check)
  - [OpenApi](#openapi)
  - [Documentation](#documentation)
  - [ToDo list](#todo-list)

## Overview

parloa celebrates its company anniversary and wants to invite all customers located within a 100km radius. This repository hosts a solution implemented to meet the requirements of Parloa's anniversary application. (for recruitment process )

---

#### Provided APIs

- get the list of invitations (`/api/v1/invitation/customers?radius=100&page=1&limit=50`)***[GET]***

- get a customer's location info (`/api/v1/invitation/customers?id={Id of the customer}`)***[GET]***

---

## Code architecture

Onion Architecture

```bash
src
├── app
│   ├── controller
│   └── service
├── common
│   ├── enums
│   ├── helpers
│   └── pipes
├── config
│   └── env
│       └── helper
├── health
│   └── controller
├── http
│   ├── enums
│   ├── exceptions
│   ├── interface
│   └── service
├── invitation
│   ├── controller
│   ├── dto
│   ├── entity
│   ├── repository
│   │   └── factories
│   ├── seeder
│   └── service
└── logger
    ├── interceptors
    └── service
```

---

## source code

```bash
git clone https://gitlab.com/moeidtopcoder2/parloa.git

cd parloa
```

## Service build information

There are different stages of building the application for this service. Based on the environment you want to deploy we have different ways to build the application. following information may help with building the service.

### Regular user

```bash
npm install
npm run build
npm run test:ci
npm start:{dev || debug || prod}
```

### Advanced user

```bash
cd scripts
bash run.sh -h
2022.05.30.14.43
Usage: $(basename "${BASH_SOURCE[0]}") [-h] [-buildDocker] [-runDocker] [-runApp] [-runDoc] [-packageHelm]


This script helps you to run the application in different forms. below you can get the full list of available options.

Available options:

-h, --help              Print this help and exit
-buildDocker            Build the docker image called "parloa:latest"
-runDocker              Build the docker image and run on local machine
-runApp                 Run application with npm in usual way for development
-runDoc                 Generate the code documentation
-packageHelm            makes a helm package from the helm chart.
```

## Deployment

#### Helm

with the following instruction you can install the helm chart on an up and running kubernetes cluster.

```bash
cd k8s
helm install {parloa-app} {app-0.1.0.tgz} --set service.type=NodePort
```

#### Kubernetes manifests

Alternativelly you can deploy the application on an up an running kubernetes cluster using provided config files.

```bash
cd k8s/configFiles

kubectl apply -f invitation-namespace.yaml, invitation-configmap.yaml, invitation-deployment.yaml, invitation-service.yaml
```

it should give you following output

```bash
namespace/invitation created

configmap/invitation-config created

deployment.apps/invitation created

service/invitation created
```

## Monitoring and alerting

### Health check

by calling the following endpoint you can make sure that the application is running and listening to your desired port

`http://localhost:{port_number}/health`

most probably you will get a result back as follow

> **Example**

> {"status":"ok","info":{"alive":{"status":"up"}},"error":{},"details":{"alive":{"status":"up"}}}

mertics

to get the default metrics of the application you can use the following endpoint

`http://localhost:{port_number}/metrics`

## OpenApi

by calling the following endpoint you can see the Swagger OpenApi documentation and explore all the available apis and schemas.

`http://localhost:{port_number}/api`

## Documentation

By running following comman you can generate the full code documentation (Compodoc) and get access to it through port `7000`

```bash
npm run doc
```

http://localhost:7000

## ToDo list

- [ ] add volume mount in docker cotainer to replace or have access to customer.txt from outside the container

