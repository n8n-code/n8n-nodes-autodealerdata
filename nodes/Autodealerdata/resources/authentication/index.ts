import type { INodeProperties } from 'n8n-workflow';

export const authenticationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					]
				}
			},
			"options": [
				{
					"name": "Get Sub User Keys Get Sub User Keys Get",
					"value": "Get Sub User Keys Get Sub User Keys Get",
					"action": "Get all Sub User Keys associated with your account.",
					"description": "Get a list of your issued SubUser API Keys. Includes active and revoked keys.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getSubUserKeys"
						}
					}
				},
				{
					"name": "Make Token Get Token Get",
					"value": "Make Token Get Token Get",
					"action": "Get a JWT from your API credentials",
					"description": "This is the first function you should call. \n\nIf you are accessing our API through a third party provider they will handle authenticating to our API for you \nand you will not need call this function or retrieve a JSON Web Token. \n\nAll other functions require the JSON Web Token (JWT) from this function to \nbe incuded in their arguments. The value of the \"token\" field is the actual JWT and any other values in the returned JSON\nare metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an\nAPI endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point\nto get a new token.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getToken"
						}
					}
				},
				{
					"name": "Make Token Get Token Post",
					"value": "Make Token Get Token Post",
					"action": "Get a JWT from your API credentials",
					"description": "This is the first function you should call. \n\nIf you are accessing our API through a third party provider they will handle authenticating to our API for you \nand you will not need call this function or retrieve a JSON Web Token. \n\nAll other functions require the JSON Web Token (JWT) from this function to \nbe incuded in their arguments. The value of the \"token\" field is the actual JWT and any other values in the returned JSON\nare metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an\nAPI endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point\nto get a new token.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getToken"
						}
					}
				},
				{
					"name": "Make Sub User Key Make Sub User Key Post",
					"value": "Make Sub User Key Make Sub User Key Post",
					"action": "Generate a Sub User Key that can be used by your users to make API calls in frontend applications.",
					"description": "This endpoint is only fully available to users with a paid plan. Users on Basic or Trial plans may only create keys valid on the \"localhost\" domain.\nThis endpoint creates an API key that can be embedded in frontend applications such as web pages that allow your users to directly make API calls. \nThe \"endpoints\" value is an array of strings that name the allowed endpoints that may be called using the Sub User Key. Passing a \"*\" value in the array will allow\nall endpoints that require a JWT (JSON Web Token) to be called by the Sub User Key. The keys are valid for as long as your account is valid or you revoke the Sub User Key.\nAll API calls made by the Sub User Keys are billed to your account. Additionally you should not call this endpoint or the /revokeSubUserKey endpoint at a combined rate \nhigher than once per second. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/makeSubUserKey"
						}
					}
				},
				{
					"name": "Revoke Sub User Key Revoke Sub User Key Put",
					"value": "Revoke Sub User Key Revoke Sub User Key Put",
					"action": "Revoke a Sub User Key associated with your account.",
					"description": "Revoke a SubUser API Key with the given UUID. This action can not be undone.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/revokeSubUserKey"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /getSubUserKeys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Get Sub User Keys Get Sub User Keys Get"
					]
				}
			}
		},
		{
			"displayName": "API ID",
			"name": "apiID",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "apiID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Get Sub User Keys Get Sub User Keys Get"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "apiKey",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "apiKey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Get Sub User Keys Get Sub User Keys Get"
					]
				}
			}
		},
		{
			"displayName": "GET /getToken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Make Token Get Token Get"
					]
				}
			}
		},
		{
			"displayName": "API ID",
			"name": "apiID",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "apiID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Make Token Get Token Get"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "apiKey",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "apiKey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Make Token Get Token Get"
					]
				}
			}
		},
		{
			"displayName": "POST /getToken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Make Token Get Token Post"
					]
				}
			}
		},
		{
			"displayName": "API ID",
			"name": "apiID",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "apiID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Make Token Get Token Post"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "apiKey",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "apiKey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Make Token Get Token Post"
					]
				}
			}
		},
		{
			"displayName": "POST /makeSubUserKey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Make Sub User Key Make Sub User Key Post"
					]
				}
			}
		},
		{
			"displayName": "API ID",
			"name": "apiID",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "apiID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Make Sub User Key Make Sub User Key Post"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "apiKey",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "apiKey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Make Sub User Key Make Sub User Key Post"
					]
				}
			}
		},
		{
			"displayName": "Site Name",
			"name": "siteName",
			"default": "localhost",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "siteName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Make Sub User Key Make Sub User Key Post"
					]
				}
			}
		},
		{
			"displayName": "End Points",
			"name": "endPoints",
			"type": "json",
			"default": "[\n  \"*\"\n]",
			"routing": {
				"send": {
					"property": "endPoints",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Make Sub User Key Make Sub User Key Post"
					]
				}
			}
		},
		{
			"displayName": "PUT /revokeSubUserKey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Revoke Sub User Key Revoke Sub User Key Put"
					]
				}
			}
		},
		{
			"displayName": "API ID",
			"name": "apiID",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "apiID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Revoke Sub User Key Revoke Sub User Key Put"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "apiKey",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "apiKey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Revoke Sub User Key Revoke Sub User Key Put"
					]
				}
			}
		},
		{
			"displayName": "Sub User Key UUID",
			"name": "subUserKeyUUID",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "subUserKeyUUID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Revoke Sub User Key Revoke Sub User Key Put"
					]
				}
			}
		},
];
