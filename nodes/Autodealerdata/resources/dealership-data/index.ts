import type { INodeProperties } from 'n8n-workflow';

export const dealershipDataDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Dealership Data"
					]
				}
			},
			"options": [
				{
					"name": "Get Dealers Get Dealers Get",
					"value": "Get Dealers Get Dealers Get",
					"action": "Premium. Dealers in a zip code.",
					"description": "Premium. Dealership information in a given zip code using the first 4 digits. Returns name, address, state, zipCode, and IDs.\nFor example a call with the zip code 92701 would return dealers with zip codes in the range [92700, 92709]",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getDealers"
						}
					}
				},
				{
					"name": "Get Dealers Get Dealers By ID Get",
					"value": "Get Dealers Get Dealers By ID Get",
					"action": "Premium. Dealers by ID",
					"description": "Premium. Dealership information using the internal ID. Returns name, address, state, zipCode, and ID for a single dealer in the same format as the /getDealers endpoint.\nDealer IDs are generally retrieved via the /getDealers or /getDealersByRegion endpoints.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getDealersByID"
						}
					}
				},
				{
					"name": "Get Dealers Get Dealers By Region Get",
					"value": "Get Dealers Get Dealers By Region Get",
					"action": "Premium. Dealers in a region.",
					"description": "Premium. Dealership information in a given region. Returns name, address, state, zipCode, and IDs. Results are paginated with up to 30 results per page.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getDealersByRegion"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /getDealers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Dealership Data"
					],
					"operation": [
						"Get Dealers Get Dealers Get"
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
						"Dealership Data"
					],
					"operation": [
						"Get Dealers Get Dealers Get"
					]
				}
			}
		},
		{
			"displayName": "Zip Code",
			"name": "zipCode",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "zipCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Dealership Data"
					],
					"operation": [
						"Get Dealers Get Dealers Get"
					]
				}
			}
		},
		{
			"displayName": "GET /getDealersByID",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Dealership Data"
					],
					"operation": [
						"Get Dealers Get Dealers By ID Get"
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
						"Dealership Data"
					],
					"operation": [
						"Get Dealers Get Dealers By ID Get"
					]
				}
			}
		},
		{
			"displayName": "Dealer ID",
			"name": "dealerID",
			"required": true,
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "dealerID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Dealership Data"
					],
					"operation": [
						"Get Dealers Get Dealers By ID Get"
					]
				}
			}
		},
		{
			"displayName": "GET /getDealersByRegion",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Dealership Data"
					],
					"operation": [
						"Get Dealers Get Dealers By Region Get"
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
						"Dealership Data"
					],
					"operation": [
						"Get Dealers Get Dealers By Region Get"
					]
				}
			}
		},
		{
			"displayName": "Region Name",
			"name": "regionName",
			"default": "REGION_STATE_CA",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "regionName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Dealership Data"
					],
					"operation": [
						"Get Dealers Get Dealers By Region Get"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Dealership Data"
					],
					"operation": [
						"Get Dealers Get Dealers By Region Get"
					]
				}
			}
		},
];
