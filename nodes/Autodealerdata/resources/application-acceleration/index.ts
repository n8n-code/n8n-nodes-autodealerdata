import type { INodeProperties } from 'n8n-workflow';

export const applicationAccelerationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Application Acceleration"
					]
				}
			},
			"options": [
				{
					"name": "Get Vehicle Seen Vehicle Seen Get",
					"value": "Get Vehicle Seen Vehicle Seen Get",
					"action": "Checks if a VIN appeared on the market on or after a given date.",
					"description": "Checks our database to see if we have data on a VIN that appeared on the open market on or after the given date with a True/False response. \nThis endpoint is more cost effective than the /vehicleHistory endpoint if your use case\nrequires searching a large list of vehicles with a low individual likelyhood of appearing on the open market. (For example searching for a specific stolen vehicle).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/vehicleSeen"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /vehicleSeen",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Application Acceleration"
					],
					"operation": [
						"Get Vehicle Seen Vehicle Seen Get"
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
						"Application Acceleration"
					],
					"operation": [
						"Get Vehicle Seen Vehicle Seen Get"
					]
				}
			}
		},
		{
			"displayName": "Vin",
			"name": "vin",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "vin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Application Acceleration"
					],
					"operation": [
						"Get Vehicle Seen Vehicle Seen Get"
					]
				}
			}
		},
		{
			"displayName": "After Date",
			"name": "afterDate",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "afterDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Application Acceleration"
					],
					"operation": [
						"Get Vehicle Seen Vehicle Seen Get"
					]
				}
			}
		},
];
