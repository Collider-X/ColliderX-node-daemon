/*
-*- coding: utf-8 -*-
   This script allows to daemonize the ColliderX NodeJS payment application.
   Copyright (C) 2017 Marc Lijour
   https://www.linkedin.com/in/marclijour
   https://github.com/marclijour

   This program is free software: you can redistribute it and/or modify
   it under the terms of the GNU Affero General Public License as
   published by the Free Software Foundation, either version 3 of the
   License, or (at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Affero General Public License for more details.

   You should have received a copy of the GNU Affero General Public License
   along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
  var Service = require('node-service-linux').Service;

  // Create a new service object
  var svc = new Service({
    name:'ColliderX',
    description: 'Payment application for ColliderX.',
    script: '/opt/colliderx/stripe-donation-website/server.js',
    user: 'ubuntu',
    group: 'ubuntu',
    cwd: '/opt/colliderx/stripe-donation-website/'
  });

  // Listen for the "install" event, which indicates the
  // process is available as a service.
  svc.on('install',function(){
    svc.start();
  });

  svc.install();

