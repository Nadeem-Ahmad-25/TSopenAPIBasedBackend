Building OpenAPI-compliant REST APIs using TypeScript and Node
tsoa is a framework with integrated OpenAPI compiler to build Node.js serve-side applications using TypeScript. It can target express, hapi, koa and more frameworks at runtime. tsoa applications are type-safe by default and handle runtime validation seamlessly.

#**Goal**
TypeScript controllers and models as the single source of truth for your API
A valid OpenAPI (formerly Swagger) spec (2.0 or 3.0) is generated from your controllers and models, including:
Paths (e.g. GET /Users)
Definitions based on TypeScript interfaces (models)
Parameters/model properties marked as required or optional based on TypeScript (e.g. myProperty?: string is optional in the OpenAPI spec)
jsDoc supported for object descriptions (most other metadata can be inferred from TypeScript types)
Routes are generated for middleware of choice
Express, Hapi, and Koa currently supported, other middleware can be supported using a simple handlebars template
Seamless runtime validation

#**Intuition**
Rely on TypeScript type annotations to generate API metadata if possible
If regular type annotations aren't an appropriate way to express metadata, use decorators
Use jsdoc for pure text metadata (e.g. endpoint descriptions)
Minimize boilerplate
Models are best represented by interfaces (pure data structures), but can also be represented by classes
Runtime validation of tsoa should behave as closely as possible to the specifications that the generated OpenAPI 2/3 schema describes. Any differences in validation logic are clarified by logging warnings during the generation of the OpenAPI Specification (OAS) and/or the routes.
Please note that by enabling OpenAPI 3 you minimize the chances of divergent validation logic since OpenAPI 3 has a more expressive schema syntax.

more on https://tsoa-community.github.io/docs/getting-started.html

but a much cooler thing is how we create a node-client for FE developers to interact with the controller with minimal lines of code 
using this command 

npx openapi-typescript-codegen -i ./build/swagger.json -o node-client -c fetch

same can be done for G0-Lang clients etc.

also the swagger allows description writing for real-time documentation primarily. but its to be done under the export functions created in controller. 

so thats main takeaways from this repo.

clone and follow the instruction on their getting started page and build your own OpenAPI based RestfulAPI's with more routes.


