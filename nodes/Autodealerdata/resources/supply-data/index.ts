import type { INodeProperties } from 'n8n-workflow';

export const supplyDataDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Supply Data"
					]
				}
			},
			"options": [
				{
					"name": "Days Supply Days Supply Get",
					"value": "Days Supply Days Supply Get",
					"action": "Days worth of supply left on dealer lots",
					"description": "Average, median, standard deviation, population variance, and whole region average of the \ndays of supply left on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on\na dealer by dealer basis while the whole region average treats the entire region like a single dealership. \nThe average field may differ from the whole region average, especially when dealers are out of \na given model. \n\nThe available brand and region names can be retrieved from their respective endpoints.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/daysSupply"
						}
					}
				},
				{
					"name": "Days To Sell Days To Sell Get",
					"value": "Days To Sell Days To Sell Get",
					"action": "Days a vehicle takes to sell",
					"description": "Average, median, standard deviation, population variance, and whole region average of the \nnumber of days a vehicle spends on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on\na dealer by dealer basis while the whole region average treats the entire region like a single dealership. \nThe average field may differ from the whole region average.\n\nThe available brand and region names can be retrieved from their respective endpoints.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/daysToSell"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /daysSupply",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Supply Data"
					],
					"operation": [
						"Days Supply Days Supply Get"
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
						"Supply Data"
					],
					"operation": [
						"Days Supply Days Supply Get"
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
						"Supply Data"
					],
					"operation": [
						"Days Supply Days Supply Get"
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
						"Supply Data"
					],
					"operation": [
						"Days Supply Days Supply Get"
					]
				}
			}
		},
		{
			"displayName": "GET /daysToSell",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Supply Data"
					],
					"operation": [
						"Days To Sell Days To Sell Get"
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
						"Supply Data"
					],
					"operation": [
						"Days To Sell Days To Sell Get"
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
						"Supply Data"
					],
					"operation": [
						"Days To Sell Days To Sell Get"
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
						"Supply Data"
					],
					"operation": [
						"Days To Sell Days To Sell Get"
					]
				}
			}
		},
];
