# Parloa anniversary Home task (Senior backend developer)

#### Candidate: S.Moeid Heidari

---

#### General description

parloa celebrates its company anniversary and wants to invite all customers located within a 100km radius. This repository hosts a solution implemented to meet the requirements of Parloa's anniversary application. (for recruitment process )

![](/images/restfulapi.png)

Invitation/customers api has three query parameters

- radius (radius of the distance circle)

- page (number of the page)

- limit (limit number of retrived list)
  
  below you can see the request DTO for invitation api
  
  ```typescript
  /**
     * Coordinates of Paloa current location
     */
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
      description: 'radius in which we want to invide the customers',
    })
    radius: string;
  
    /**
     * Represents the number of retrived customers.
     */
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
      description: 'Limitation of the retrived customers',
    })
    limit: string;
  
    /**
     * Represents th number of  current page.
     */
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
      description: 'number of current page',
    })
    page: string;
  ```

and here is the response DTO of invitation API

```typescript
/**
   * A list of should be invited customers
   */
  @IsDefined()
  @ValidateNested()
  @IsArray()
  @Type(() => Customer)
  @ApiProperty({
    description: 'A list of should be invited customers',
  })
  list: Customer[];

  /**
   * Represents the number of retrived customers.
   */
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'Number of retrived customers',
  })
  number: number;

  /**
   * Represents address of the next page.
   */
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'next page address',
  })
  next: string;

  /**
   * Represents th number of  current page.
   */
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'number of current page',
  })
  page: number;
```

by requesting the api application tries to calculate the distance between Parloa location and the customer's location asynchroneously

Below you can see the actual code of the calculation

```typescript
/**
 * Calculates the distance between two given locations
 * @param lat1 latitude_one
 * @param lon1 longitude_one
 * @param lat2 latitude_two
 * @param lon2 longitude_two
 * @returns float number
 */
export async function distance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const p = 0.017453292519943295;
  const c = Math.cos;
  const a = 0.5 - c((lat2 - lat1) * p) / 2 + (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;
  return 12742 * Math.asin(Math.sqrt(a));
}
```

**Note** 12742 is the earth's diameter

We also used an async filtering function to filter the customers by their distance from Parloa's Location. Below the actual code is provided

```typescript
/**
 * Asynchronous filtering on an array
 * @param arr Provides async filtering
 * @param predicate predicate parameter
 * @returns list of elements
 */
export async function asyncFilter(arr: any, predicate: any) {
  const results = await Promise.all(arr.map(predicate));
  return arr.filter((_v: any, index: any) => results[index]);
}
```

---

## Features and Technical acceptance criteria



- [x] a JSON HTTP API (Server)

The solution provides a RESTfull api on address [http://localhost:{port_number}/api/v1/invitation/customers]([http://localhost:{port_number}/api/v1/invitation/customers](http://localhost/api/v1/invitation/customers))

Method: Get

Content-type: application/json

Reponse: HTTP REST response (the list of should be invited customers)

```bash
curl --location --request GET 'http://localhost:8085/api/v1/invitation/customers?radius=100&page=1&limit=50' \
--data-raw ''
```

- [x] runnable in a local development environment

Application is runnable in local development environment by

```bash
npm install

npm start
```

- [x] NOT require third-party infrastructure or services

it does not require any third-party infrastructure but having **nodejs** installed on the machine.

- [x] clients can submit radius,page and limit number via an HTTP request. The following information will be sent by the clients
  
  ```bash
  ?radius=100&page=1&limit=50
  ```

- [x]  the list of customers located within the circle distance

```bash
{
    "type": "Success",
    "status": 200,
    "message": "OK",
    "description": "The request has succeeded",
    "data": {
        "list": [
            {
                "id": "02335e27-e152-4771-9a6b-5b88c3b29eb9",
                "location": {
                    "lat": 53.14583735,
                    "long": 13.23311883
                }
            },
            {
                "id": "05d07502-b345-4133-b6b0-668ca44a5e95",
                "location": {
                    "lat": 52.14117218,
                    "long": 13.2234046
                }
            },
            {
                "id": "129b3b89-1b29-4aaa-a30c-b7e1a1dd46a0",
                "location": {
                    "lat": 52.48658232,
                    "long": 13.79447524
                }
            },
            {
                "id": "1a3b6dca-a1c9-4b9b-b280-007a040cc4da",
                "location": {
                    "lat": 52.33706243,
                    "long": 14.41390135
                }
            },
            {
                "id": "27051d0b-6476-4794-bb5d-27e7db8e29d5",
                "location": {
                    "lat": 52.08043436,
                    "long": 12.44706698
                }
            },
            {
                "id": "2cce11c3-6979-42a5-b501-ace4d5e598ec",
                "location": {
                    "lat": 52.6907415,
                    "long": 14.31280182
                }
            },
            {
                "id": "4013ac11-6d4a-41c5-94e4-abc4bb931e80",
                "location": {
                    "lat": 52.31534195,
                    "long": 14.10423455
                }
            },
            {
                "id": "469dc15d-6726-4e7d-8da4-d2e10e5a7669",
                "location": {
                    "lat": 52.110815,
                    "long": 12.59116312
                }
            },
            {
                "id": "517ea41d-be50-4c2c-ba49-59a4de03842b",
                "location": {
                    "lat": 52.3655113,
                    "long": 13.22698139
                }
            },
            {
                "id": "6536a868-b83e-47b0-9462-7448a93b9827",
                "location": {
                    "lat": 52.28885695,
                    "long": 14.47946963
                }
            },
            {
                "id": "839e0ebc-4bce-4d2d-93d8-a1201b31c496",
                "location": {
                    "lat": 52.94598921,
                    "long": 12.55603259
                }
            },
            {
                "id": "841d0654-9971-4c84-a5a5-d3e5b5dbc77e",
                "location": {
                    "lat": 52.95192753,
                    "long": 14.54074066
                }
            },
            {
                "id": "add9c5a5-65d6-49a1-a260-c984905a9745",
                "location": {
                    "lat": 51.99078417,
                    "long": 14.52918792
                }
            },
            {
                "id": "b86d6784-7b41-4e3c-971a-5ca2ce8ee895",
                "location": {
                    "lat": 52.68468761,
                    "long": 14.87267413
                }
            },
            {
                "id": "bbccc9e8-5cee-439a-a00c-0088b88bc327",
                "location": {
                    "lat": 53.11368755,
                    "long": 14.03961756
                }
            },
            {
                "id": "cab0ebd3-149b-4bd7-9862-e3e11a9273d5",
                "location": {
                    "lat": 52.4600697,
                    "long": 13.57456475
                }
            },
            {
                "id": "ceaa3ede-1805-4c41-a2d1-79b1c74c033b",
                "location": {
                    "lat": 53.35397848,
                    "long": 13.2690475
                }
            },
            {
                "id": "d3b64719-3b9a-40b7-81e6-56dd94a5a794",
                "location": {
                    "lat": 52.51803419,
                    "long": 12.81343141
                }
            },
            {
                "id": "d5c05bd3-76d4-4c3c-9985-deb82751c611",
                "location": {
                    "lat": 52.62407672,
                    "long": 14.08227028
                }
            }
        ],
        "page": 1,
        "number": 50,
        "next": "/api/v1/invitation/customers?radius=100&page=2&limit=50"
    }
}
```

- [x] intuitive data structures and naming suitable for the purpose

if you take a look at the code you can see that all the data would be handeled by appropriate Classes,DTOs, entities and enums with self described names.

as an example lets take a look at the [invitation-request.dto.ts](https://gitlab.com/moeidtopcoder2/parloa/-/blob/feature/invitation-api/src/application/dtos/invitation-request.dto.ts)

- [x] additional messages or HTTP codes other than 200 in case of unexpected input values (error handling)

In the HTTP REST API response type,status,message, and description are provided. as an example take a look at this result of calling api witch occured a client error.

```bash
"type": "Client Error",

"status": 400,

"message": "Bad Request",

"description": "The request could not be understood by the server due to malformed syntax"
```

- [x]  content negotiation as specified by the HTTP client

as you can see from source code [invitation.controller.ts](https://gitlab.com/moeidtopcoder2/parloa/-/blob/feature/invitation-api/src/application/controllers/invitation.controller.ts) api has content type "application/json" which is an appropriate content type for this api.

```typescript
/**
   * Takes a radious in which we want to invite the customers.
   * @param body radious circle information
   * @returns HTTPReponse
   */
  @ApiOperation({ summary: 'Finds the list of users which are within the circle' })
  @ApiResponse({
    status: 200,
    description: 'Returns back the list of should-be invited customers',
    type: InvitationResponseDTO,
  })
  @ApiBody({ type: [InvitationRquestDTO] })
  @Header('content-type', 'application/json')
  @Get('customers')
  @HttpCode(HttpStatus.OK)
  @Public()
  async invitation(@Query() query: any): Promise<HttpResponse> {
    const response: HttpResponse = await this.invitationservice.handlInvitationRequest(new InvitationRquestDTO(query));
    return response;
  }
```

- [x]  containerized (e.g. using Docker)

application is containerized as docker image. inside the root directory you can find the [Dockerfile](https://gitlab.com/moeidtopcoder2/parloa/-/blob/feature/invitation-api/Dockerfile) and [docker-compose.yaml](https://gitlab.com/moeidtopcoder2/parloa/-/blob/feature/invitation-api/docker-compose.yaml)

- [x]  configuring runtime parameters (e.g. scalability options)

project is associated with ENV values for the mode (development or production) with a NODE_PORT which specifies the node which the server should listen to.

.env.production

```bash
NODE_ENV=development
NODE_PORT=8085
PARLOA_LAT=52.493256
PARLOA_LONG=13.446082
```

.env.development

```bash
NODE_ENV=development
NODE_PORT=8085
PARLOA_LAT=52.493256
PARLOA_LONG=13.446082
```

a validator is also available for the envirment variables accordingly to make sure that the ENVs have a well-formed data.

```typescript
/**
 * Author Moeid Heidari
 * Date 22 May 2022
 */
import { plainToClass } from 'class-transformer';
import { validateSync, IsOptional } from 'class-validator';

/**
 * env vatiables
 */
class EnvironmentVariables {
  /**
   * Represents the latitude of Parloa locatino
   */
  @IsOptional()
  PARLOA_LAT = 52.493256;
  /**
   * Represents the Longitude of Parloa locatino
   */
  @IsOptional()
  PARLOA_LONG = 13.446082;
}

/**
 * validates the config
 * @param config congig
 * @returns validated config
 */
export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, { enableImplicitConversion: true });
  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
```

- [x] unit tests  covers core functionality

The project has ~25 unit tests that has the test cases for core functionality (service functions) and controllers. Below you can see some of the test cases for core functionality. For each test there is a factory that provides the test cases suitable for the test pass.

```typescript
import { datatype } from 'faker';

export const E2E_FAKE_INVITATION_REQUEST_1 = {
  radius: datatype.number(2000).toString(),
  limit: '500',
  page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_2 = {
  radius: 'true',
  limit: '500',
  page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_3 = {
  radius: 'false',
  limit: '500',
  page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_4 = {
  limit: '500',
  page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_5 = {
  radius: '',
  limit: '500',
  page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_6 = {
  radius: datatype.number(2000).toString(),
  limit: 'werwer',
  page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_7 = {
  radius: datatype.number(2000).toString(),
  limit: 'true',
  page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_8 = {
  radius: datatype.number(2000).toString(),
  limit: 'false',
  page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_9 = {
  radius: datatype.number(2000).toString(),
  page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_10 = {
  radius: datatype.number(2000).toString(),
  limit: '',
  page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_11 = {
  limit: ' ',
  page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_12 = {
  radius: datatype.number(2000).toString(),
};
export const E2E_FAKE_INVITATION_REQUEST_13 = {
  page: '1',
};
export const E2E_FAKE_INVITATION_REQUEST_14 = {
  limit: '10',
};
```

- [x] end-to-end tests covers functionality via API and other API-specific aspects 

e-2-e test are also availbale for the project that tests the available apis (mai API, health check apis,... etc). Below you can see an example of such test.

```typescript
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../src/infrastructure/modules/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import supertest from 'supertest';
import {
  E2E_FAKE_INVITATION_REQUEST_1,
  E2E_FAKE_INVITATION_REQUEST_10,
  E2E_FAKE_INVITATION_REQUEST_11,
  E2E_FAKE_INVITATION_REQUEST_12,
  E2E_FAKE_INVITATION_REQUEST_13,
  E2E_FAKE_INVITATION_REQUEST_14,
  E2E_FAKE_INVITATION_REQUEST_2,
  E2E_FAKE_INVITATION_REQUEST_3,
  E2E_FAKE_INVITATION_REQUEST_4,
  E2E_FAKE_INVITATION_REQUEST_5,
  E2E_FAKE_INVITATION_REQUEST_6,
  E2E_FAKE_INVITATION_REQUEST_7,
  E2E_FAKE_INVITATION_REQUEST_8,
  E2E_FAKE_INVITATION_REQUEST_9,
} from '../factories/invitations.e2e.factory';

describe('Invitation endpoints (e2e)', () => {
  let app: INestApplication;
  let request: ReturnType<typeof supertest>;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();

    const config = new DocumentBuilder()
      .setTitle('Parloa Invitation service')
      .setDescription('A service to Find out should be invited customers list')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    request = supertest(app.getHttpServer());
  });
  //=============================================================================================================================
  describe('check service liveness', () => {
    it('should receive status code 404', async () => {
      return await request.get('/').expect(404);
    });
  });

  describe('check invitations endpoints', () => {
    it('should receive status code 200', async () => {
      return await request.get('/api/v1/invitation').expect(200).expect('Welcome to Invitation list endpoint');
    });

    it('should return 200 Success request', async () => {
      return await request.get('/api/v1/invitation/customers').query(E2E_FAKE_INVITATION_REQUEST_1).expect(200);
    });
  });

  it('should return 200 Success request', async () => {
    return await request.get('/api/v1/invitation/customers').query(E2E_FAKE_INVITATION_REQUEST_2).expect(200);
  });
  it('should return 200 Success request', async () => {
    return await request.get('/api/v1/invitation/customers').query(E2E_FAKE_INVITATION_REQUEST_3).expect(200);
  });
  it('should return 400 Bad request', async () => {
    return await request.get('/api/v1/invitation/customers').query(E2E_FAKE_INVITATION_REQUEST_4).expect(400);
  });
  it('should return 400 Bad request', async () => {
    return await request.get('/api/v1/invitation/customers').query(E2E_FAKE_INVITATION_REQUEST_5).expect(400);
  });
  it('should return 200 Success request', async () => {
    return await request.get('/api/v1/invitation/customers').query(E2E_FAKE_INVITATION_REQUEST_6).expect(200);
  });
  it('should return 200 Success request', async () => {
    return await request.get('/api/v1/invitation/customers').query(E2E_FAKE_INVITATION_REQUEST_7).expect(200);
  });
  it('should return 200 Success request', async () => {
    return await request.get('/api/v1/invitation/customers').query(E2E_FAKE_INVITATION_REQUEST_8).expect(200);
  });
  it('should return 400 Bad request', async () => {
    return await request.get('/api/v1/invitation/customers').query(E2E_FAKE_INVITATION_REQUEST_9).expect(400);
  });
  it('should return 400 Bad request', async () => {
    return await request.get('/api/v1/invitation/customers').query(E2E_FAKE_INVITATION_REQUEST_10).expect(400);
  });
  it('should return 400 Bad request', async () => {
    return await request.get('/api/v1/invitation/customers').query(E2E_FAKE_INVITATION_REQUEST_11).expect(400);
  });
  it('should return 400 Bad request', async () => {
    return await request.get('/api/v1/invitation/customers').query(E2E_FAKE_INVITATION_REQUEST_12).expect(400);
  });
  it('should return 400 Bad request', async () => {
    return await request.get('/api/v1/invitation/customers').query(E2E_FAKE_INVITATION_REQUEST_13).expect(400);
  });
  it('should return 400 Bad request', async () => {
    return await request.get('/api/v1/invitation/customers').query(E2E_FAKE_INVITATION_REQUEST_14).expect(400);
  });

  afterEach(async () => {
    await app.close();
  });
});
```

- [x] Documentation on how to prepare and run the solution (requirements to the environment, build and launch instructions) 

provided

A runb-book is also provided that describes the instructions to run and test the application on development and production environments (OS, Docker, Kubernetes cluster,...)

[README.md](https://gitlab.com/moeidtopcoder2/parloa/-/blob/feature/invitation-api/README.md)

- [x] API Documentation (either generated or manually written) 

An api documentation is also provided (Swagger) that described the APIS, schemas ,... etc.

This documentation is accessible throught:

[http://localhost:{port_number}/api](http://localhost:%7Bport_number%7D/api)

- [x] properly configure Git for temporary files / build artifacts

inside the project you can find several .ignore files that prevents pushing uneccessari files to the repository

- [.gitignore](https://gitlab.com/moeidtopcoder2/parloa/-/blob/feature/invitation-api/.gitignore)

- [.eslintignore](https://gitlab.com/moeidtopcoder2/parloa/-/blob/feature/invitation-api/.eslintignore)

- .[dockerignore](https://gitlab.com/moeidtopcoder2/parloa/-/blob/feature/invitation-api/.dockerignore)

- [.helmignore](https://gitlab.com/moeidtopcoder2/parloa/-/blob/feature/invitation-api/k8s/.helmignore)

- [x]  a Makefile (or similar implementation-language agnostic solution) that supports executing the following steps without

any project-specific prerequisites:

development environment initialization (if required)

linting

executing tests

building the Docker image (if implemented)

run the application

run the application using the Docker image (optional)

a [start.sh](https://gitlab.com/moeidtopcoder2/parloa/-/blob/feature/invitation-api/scripts/start.sh) script is also provided that helps the developer to build and run the project regardless to any dependency.

- [x]  industry best-practices at all levels including but not limited to:

amount and variance of tests (positive, negative, code coverage)

runtime efficiency of the implementation

concurrency / scalability

security of the runtime (assuming containerized, e.g. Kubernetes) as well as build chain (CI/CD pipeline)

Project is also has a helm chart prepare with skaffold configuration that helps with Continues deployment on a kubernetes cluster (minikube, mubeadm, kind,... etc)

[Makefile](https://gitlab.com/moeidtopcoder2/parloa/-/blob/feature/invitation-api/Makefile)

```makefile
.PHONY: skaffold-dev

skaffold-dev:

skaffold dev --auto-build --auto-deploy --tail --cleanup

.PHONY: skaffold-debug

skaffold-debug:

skaffold debug --auto-build --auto-deploy --tail --cleanup

.PHONY: encrypt-secrets

encrypt-secrets:

helm secrets enc k8s/secrets.yaml
```

[skaffold.yaml](https://gitlab.com/moeidtopcoder2/parloa/-/blob/feature/invitation-api/skaffold.yaml)

```yaml
apiVersion: skaffold/v2beta13
kind: Config
build:
  local:
    useBuildkit: true
  artifacts:
  - image: registry.gitlab.com/moeidtopcoder2/parloa
deploy:
  helm:
    releases:
    - name: app
      chartPath: ./k8s
      wait: false
      useHelmSecrets: true
      valuesFiles:
      - ./k8s/values.yaml
      - ./k8s/secrets.yaml
      artifactOverrides:
        image: registry.gitlab.com/moeidtopcoder2/parloa
      imageStrategy:
        helm: {}

portForward:
 - resourceType: service
   resourceName: app
   port: 8085
   localPort: 8085
```

To deploy the project continuesly inside a kubernetes cluster you just need to run following command

```bash
make
```

- [x]  production deployment of the provided solution and document remaining steps / ToDo’s to let the solution participate in a CI/

CD pipeline

Project is connected to a CI/CP pipeline (Gitlab CI) that wold run the pipeline (build, test, linting,...)

on each commit . and it will build and push a docker image to Gitlab container registry upon a commit or merge to main branch.

[.gitlab-ci.yaml](https://gitlab.com/moeidtopcoder2/parloa/-/blob/feature/invitation-api/.gitlab-ci.yml)

```yaml
image: node:latest

services:
cache:
  key:
    files:
      - package.json
  paths:
    - node_modules

stages:
  - build
  - test
  - upload
sast:
  stage: test
include:
- template: Security/SAST.gitlab-ci.yml

build:
  stage: build
  script:
    - npm install
    - npm run build --if-present

test:
  stage: test
  script:
    - npm run format
    - npm run lint
    - npm test

build image:
    image: docker:20.10.10
    services:
        - docker:20.10.10-dind
    rules:
        - if: $CI_COMMIT_BRANCH == "main" || ($CI_PIPELINE_SOURCE == 'merge_request_event' && ($CI_MERGE_REQUEST_TARGET_BRANCH_NAME == "main" ))       
    script:
        - echo $CI_REGISTRY_PASSWORD | docker login -u $CI_REGISTRY_USER $CI_REGISTRY --password-stdin
        - docker build -t $CI_REGISTRY_IMAGE .
        - docker push $CI_REGISTRY_IMAGE

upload helmchart:
    image: curlimages/curl:latest
    stage: upload
    rules:
        - if: $CI_COMMIT_BRANCH == "main" || ($CI_PIPELINE_SOURCE == 'merge_request_event' && ($CI_MERGE_REQUEST_TARGET_BRANCH_NAME == "main" ))
    script:
      - 'curl --request POST --user gitlab-ci-token:$CI_JOB_TOKEN --form "chart=@parloa-0.1.0.tgz" "${CI_API_V4_URL}/projects/${CI_PROJECT_ID}/packages/helm/api/stable/charts"'
```

Building the docker image has two phases (development and production)

[Dockerfile](https://gitlab.com/moeidtopcoder2/parloa/-/blob/feature/invitation-api/Dockerfile)

```dockerfile
FROM node:12.19.0-alpine3.9 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install

COPY . .

RUN npm run build

FROM node:12.19.0-alpine3.9 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

ARG NODE_PORT=8085
ENV NODE_PORT=${NODE_PORT}

ARG PARLOA_LAT=52.493256
ENV PARLOA_LAT=${PARLOA_LAT}

ARG PARLOA_LONG=13.446082
ENV PARLOA_LONG=${PARLOA_LONG}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
```

source code is fully documented and accessible by generating the documentation with

```bash
npm run doc
```

and then

http://localhost:7000

as you can see project is 100% documented.

![](//images/code-documentation.png)

- [x] Kubernetes config files are added (namespace,deployment,configmap,service,... etc).
  
  ```bash
  kubectl apply -f invitation-namespace.yaml,invitation-configmap.yaml,invitation-deployment.yaml,invitation-service.yaml
  ```

- [x] An automatic caching also added to the APIs (Redis)
  
  ```bash
  response time: > 5 ms
  ```

# Hope you like it

Please don't hestitate should you have any question or suggestion about the project

[moeidtopcoder2@gmail.com](mailto:moeidtopcoder2@gmail.com)

# END
