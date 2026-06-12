import type { INodeProperties } from 'n8n-workflow';

export const staticDataDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Static Data"
					]
				}
			},
			"options": [
				{
					"name": "Get Brand Names Get Brands Get",
					"value": "Get Brand Names Get Brands Get",
					"action": "Get a list of brand names",
					"description": "Get vehicle brand names. \n\nThese names are used as arguments for other endpoints. The names are generally not case sensitive\nwhen used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getBrands"
						}
					}
				},
				{
					"name": "Get Model Names All Get Inactive Models Get",
					"value": "Get Model Names All Get Inactive Models Get",
					"action": "Get a list of model names including discontinued models",
					"description": "Get all model names including discontinued models. Because these models are no longer built, or have very poor market performance\nthey are not incuded in the normal getModels endpoint. Many users itterate through the model names with our new vehicle sales\nendpoints and waste some of their quota making self contradictory requests. This endpoint was created to aleviate the use case where\nsomeone requests information on new vehicle sales for a model that has not been sold new for a long, long, time. \n\nThese names are used as arguments for other endpoints. The names are generally not case sensitive\nwhen used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getInactiveModels"
						}
					}
				},
				{
					"name": "Get Model Names Get Models Get",
					"value": "Get Model Names Get Models Get",
					"action": "Get a list of model names",
					"description": "Get brand model names for currently active models. This endpoint does not return model names that have been discontinued or have \nsold less than 10 vehicles in the last month and a half.\n\nThese names are used as arguments for other endpoints. The names are generally not case sensitive\nwhen used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getModels"
						}
					}
				},
				{
					"name": "Get Regions Get Regions Get",
					"value": "Get Regions Get Regions Get",
					"action": "Get a list of region names",
					"description": "Get region names. These names are used as arguments for other endpoints. The names are generally not case sensitive\nwhen used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getRegions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /getBrands",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Static Data"
					],
					"operation": [
						"Get Brand Names Get Brands Get"
					]
				}
			}
		},
		{
			"displayName": "JWT",
			"name": "jwt",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "jwt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Static Data"
					],
					"operation": [
						"Get Brand Names Get Brands Get"
					]
				}
			}
		},
		{
			"displayName": "GET /getInactiveModels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Static Data"
					],
					"operation": [
						"Get Model Names All Get Inactive Models Get"
					]
				}
			}
		},
		{
			"displayName": "JWT",
			"name": "jwt",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "jwt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Static Data"
					],
					"operation": [
						"Get Model Names All Get Inactive Models Get"
					]
				}
			}
		},
		{
			"displayName": "Brand Name",
			"name": "brandName",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "brandName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Static Data"
					],
					"operation": [
						"Get Model Names All Get Inactive Models Get"
					]
				}
			}
		},
		{
			"displayName": "GET /getModels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Static Data"
					],
					"operation": [
						"Get Model Names Get Models Get"
					]
				}
			}
		},
		{
			"displayName": "JWT",
			"name": "jwt",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "jwt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Static Data"
					],
					"operation": [
						"Get Model Names Get Models Get"
					]
				}
			}
		},
		{
			"displayName": "Brand Name",
			"name": "brandName",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "brandName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Static Data"
					],
					"operation": [
						"Get Model Names Get Models Get"
					]
				}
			}
		},
		{
			"displayName": "GET /getRegions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Static Data"
					],
					"operation": [
						"Get Regions Get Regions Get"
					]
				}
			}
		},
		{
			"displayName": "JWT",
			"name": "jwt",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "jwt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Static Data"
					],
					"operation": [
						"Get Regions Get Regions Get"
					]
				}
			}
		},
];
