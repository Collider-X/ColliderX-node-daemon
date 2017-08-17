How to daemonize the ColliderX payment application
==================================================
The application is developed in NodeJS. This method is using node-service-linux, a npm package available at https://www.npmjs.com/package/node-service-linux 

Provided you have installed the [ColliderX](https://www.collider-x.org) application (since you'll need those dependencies), run the script provided here. It assumes the applications files are in `/opt/colliderx`.

Then you can start and stop the *colliderx* daemon, as any other in Linux, e.g. `service collider start`

