# What are Environment Variables?
## What is an environment?
- An environment is the system that an application is deployed to and running in.
- Types of environments in real-life applications:
  - Testing - An environment that's used to test the application to ensure that recent changes don't affect existing functionality and that new features meet the project's requirements.
  - Staging/Development - An environment that mirrors the production environment to ensure that nothing unexpected occurs before the application is deployed to production.
  - Production - The environment that serves end users. For applications that need to support a large number of users, the production environment can contain multiple servers (sometimes dozens or even hundreds of servers).

<br/>

## What are environment variables?
- Environment variables are application configuration related variables whose values change depending on the environment that the application is running in.
- Using environment variables allows you to change the behavior of your application by the environment that it's running in without having to hard code values in your code.
- Environment variables are typically used when there is sensitive information to hide from the public eye, or if there are configurations that change based on use case.

<br/>

## Use cases:
- Where else should you use environment variables? Anywhere that the behavior of your code needs to change based upon the environment that it's running in. Environment variables are commonly used for:
  - Database connection settings (as you've just seen)
  - Execution environment (production, staging, testing)
  - Server HTTP ports
  - Static file locations
  - API keys and secrets
