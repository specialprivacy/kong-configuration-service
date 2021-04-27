const fetch = require('node-fetch');
const data = require("./config").default;

data.forEach(
    async elem => {
        let service = elem.service;
        let routes = elem.routes;
        let plugins = elem.plugins;

        await fetch('http://kong:8001/services', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(service),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Service successfully created:', data);
            })
            .catch((error) => {
                console.error('Error on service creation:', error);
            });

        routes.forEach(route => {
            fetch(`http://kong:8001/services/${service.name}/routes`, {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(route)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Route successfully created:', data);
                })
                .catch((error) => {
                    console.error('Error on route creation:', error);
                });
        });

        plugins.forEach(plugin => {
            fetch(`http://kong:8001/services/${service.name}/plugins`, {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(plugin)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Plugin successfully created:', data);
                })
                .catch((error) => {
                    console.error('Error on plugin creation:', error);
                });
        });
    }
);