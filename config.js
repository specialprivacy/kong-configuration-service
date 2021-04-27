var array = [
  {
    "service": {
      "name": "WelcomePageFrontend",
      "host": "welcome-page",
      "port": 80,
      "protocol": "http",
      "connect_timeout": 60000,
      "read_timeout": 60000,
      "write_timeout": 60000
    },
    "routes": [
      {
        "paths": [
          "/"
        ],
        "strip_path": true,
        "preserve_host": false,
        "regex_priority": 0,
        "hosts": null,
        "protocols": [
          "http",
          "https"
        ],
        "methods": null
      }
    ],
    "plugins": [
    ]
  },
  {
    "service": {
      "name": "ConsentManagementBackend",
      "host": "consent-management-backend",
      "port": 80,
      "protocol": "http",
      "connect_timeout": 60000,
      "read_timeout": 60000,
      "write_timeout": 60000
    },
    "routes": [
      {
        "paths": ["/users", "/applications", "/policies"],
        "strip_path": false,
        "preserve_host": false,
        "regex_priority": 0,
        "hosts": null,
        "protocols": [
          "http",
          "https"
        ],
        "methods": [
          "DELETE",
          "GET",
          "POST",
          "PUT"
        ]
      }
    ],
    "plugins": [
      {
        "name": "oidc",
        "config": {
          "bearer_only": "no",
          "client_id": "special-platform",
          "client_secret": "dd52905b-46a7-4e0c-9770-c8178e23d9d7",
          "discovery": `${process.env["KEYCLOAK_ENDPOINT"]}/realms/special/.well-known/openid-configuration`,
          "realm": "special",
          "response_type": "code",
          "scope": "openid",
          "ssl_verify": "no",
          "token_endpoint_auth_method": "client_secret_post"
        },
        "enabled": true
      }
    ]
  },
  {
    "service": {
      "name": "ConsentManagementFrontend",
      "host": "consent-management-frontend",
      "port": 80,
      "protocol": "http",
      "connect_timeout": 60000,
      "read_timeout": 60000,
      "write_timeout": 60000
    },
    "routes": [
      {
        "paths": [
          "/consent"
        ],
        "strip_path": true,
        "preserve_host": false,
        "regex_priority": 0,
        "hosts": null,
        "protocols": [
          "http",
          "https"
        ],
        "methods": null
      }
    ],
    "plugins": [
      {
        "name": "oidc",
        "config": {
          "bearer_only": "no",
          "client_id": "special-platform",
          "client_secret": "dd52905b-46a7-4e0c-9770-c8178e23d9d7",
          "discovery": `${process.env["KEYCLOAK_ENDPOINT"]}/realms/special/.well-known/openid-configuration`,
          "realm": "special",
          "response_type": "code",
          "scope": "openid",
          "ssl_verify": "no",
          "token_endpoint_auth_method": "client_secret_post"
        },
        "enabled": true
      }
    ]
  },
  {
    "service": {
      "name": "PolicyAdminFrontend",
      "host": "policy-admin-frontend",
      "port": 80,
      "protocol": "http",
      "connect_timeout": 60000,
      "read_timeout": 60000,
      "write_timeout": 60000
    },
    "routes": [
      {
        "paths": [
          "/policy-crud"
        ],
        "strip_path": true,
        "preserve_host": false,
        "regex_priority": 0,
        "hosts": null,
        "protocols": [
          "http",
          "https"
        ],
        "methods": null
      }
    ],
    "plugins": [
      {
        "name": "oidc",
        "config": {
          "bearer_only": "no",
          "client_id": "special-platform",
          "client_secret": "dd52905b-46a7-4e0c-9770-c8178e23d9d7",
          "discovery": `${process.env["KEYCLOAK_ENDPOINT"]}/realms/special/.well-known/openid-configuration`,
          "realm": "special",
          "response_type": "code",
          "scope": "openid",
          "ssl_verify": "no",
          "token_endpoint_auth_method": "client_secret_post"
        },
        "enabled": true
      }
    ]
  },
  {
    "service": {
      "name": "TransparencyBackend",
      "host": "transparency-backend",
      "port": 80,
      "protocol": "http",
      "connect_timeout": 60000,
      "read_timeout": 60000,
      "write_timeout": 60000
    },
    "routes": [
      {
        "paths": ["/transparency-backend"],
        "strip_path": true,
        "preserve_host": false,
        "regex_priority": 0,
        "hosts": null,
        "protocols": [
          "http",
          "https"
        ],
        "methods": [
          "DELETE",
          "GET",
          "POST",
          "PUT"
        ]
      }
    ],
    "plugins": [
      {
        "name": "oidc",
        "config": {
          "bearer_only": "no",
          "client_id": "special-platform",
          "client_secret": "dd52905b-46a7-4e0c-9770-c8178e23d9d7",
          "discovery": `${process.env["KEYCLOAK_ENDPOINT"]}/realms/special/.well-known/openid-configuration`,
          "realm": "special",
          "response_type": "code",
          "scope": "openid",
          "ssl_verify": "no",
          "token_endpoint_auth_method": "client_secret_post"
        },
        "enabled": true
      }
    ]
  },
  {
    "service": {
      "name": "TransparencyFrontend",
      "host": "transparency-frontend",
      "port": 80,
      "protocol": "http",
      "connect_timeout": 60000,
      "read_timeout": 60000,
      "write_timeout": 60000
    },
    "routes": [
      {
        "paths": [
          "/transparency"
        ],
        "strip_path": true,
        "preserve_host": false,
        "regex_priority": 0,
        "hosts": null,
        "protocols": [
          "http",
          "https"
        ],
        "methods": null
      }
    ],
    "plugins": [
      {
        "name": "oidc",
        "config": {
          "bearer_only": "no",
          "client_id": "special-platform",
          "client_secret": "dd52905b-46a7-4e0c-9770-c8178e23d9d7",
          "discovery": `${process.env["KEYCLOAK_ENDPOINT"]}/realms/special/.well-known/openid-configuration`,
          "realm": "special",
          "response_type": "code",
          "scope": "openid",
          "ssl_verify": "no",
          "token_endpoint_auth_method": "client_secret_post"
        },
        "enabled": true
      }
    ]
  },
  {
    "service": {
      "name": "Keycloak",
      "host": "keycloak",
      "port": 8080,
      "protocol": "http",
      "connect_timeout": 60000,
      "read_timeout": 60000,
      "write_timeout": 60000
    },
    "routes": [
      {
        "paths": [
          "/auth"
        ],
        "strip_path": false,
        "preserve_host": false,
        "regex_priority": 0,
        "hosts": null,
        "protocols": [
          "http",
          "https"
        ],
        "methods": null
      }
    ],
    "plugins": [
    ]
  },
  {
    "service": {
      "name": "PersonalDataGateway",
      "host": "personal-data-gateway",
      "port": 5000,
      "protocol": "http",
      "connect_timeout": 60000,
      "read_timeout": 60000,
      "write_timeout": 60000
    },
    "routes": [
      {
        "paths": ["/personal-data-gateway"],
        "strip_path": true,
        "preserve_host": false,
        "regex_priority": 0,
        "hosts": null,
        "protocols": [
          "http",
          "https"
        ],
        "methods": [
          "DELETE",
          "GET",
          "POST",
          "PUT"
        ]
      }
    ],
    "plugins": [
    ]
  }
];

exports.default = array;