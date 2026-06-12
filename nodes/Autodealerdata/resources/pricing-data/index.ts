import type { INodeProperties } from 'n8n-workflow';

export const pricingDataDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Data"
					]
				}
			},
			"options": [
				{
					"name": "Get Avg List Price List Price Get",
					"value": "Get Avg List Price List Price Get",
					"action": "Stats on ask price of new vehicles",
					"description": "Average, median, standard deviation, and population variance of the ask price of new vehicles over the last 15 days for a given brand and region.\n\nThe available brand and region names can be retrieved from their respective endpoints.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listPrice"
						}
					}
				},
				{
					"name": "Get Avg Sale Price Sale Price Get",
					"value": "Get Avg Sale Price Sale Price Get",
					"action": "Stats on sale price of new vehicles",
					"description": "Average, median, standard deviation, and population variance of the sale price of new vehicles over the last 15 days for a given brand and region.\n\nThe available brand and region names can be retrieved from their respective endpoints.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/salePrice"
						}
					}
				},
				{
					"name": "Get Model Sale Buckets Sale Price Histogram Get",
					"value": "Get Model Sale Buckets Sale Price Histogram Get",
					"action": "Histogram of sales price of new vehicles by model",
					"description": "Histogram of the sale price of vehicles over the last 45 days for a given model and region. \nPrice buckets are grouped in units of $1000\nThe available brand, model, and region names can be retrieved from their respective endpoints.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/salePriceHistogram"
						}
					}
				},
				{
					"name": "Get Market 3 Similar Sale Price Get",
					"value": "Get Market 3 Similar Sale Price Get",
					"action": "Premium. Simple Vehicle Market Report",
					"description": "Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new and used vehicles in a given region based off the provided VIN. \nOptionally restricts report to vehicles of the same model year and goes back up to 120 days.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/similarSalePrice"
						}
					}
				},
				{
					"name": "Get Market 4 Valuation Get",
					"value": "Get Market 4 Valuation Get",
					"action": "Premium. Simple Vehicle Market Report Over Arbitrary Locations and Vehicles.",
					"description": "Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new or used vehicles based off the provided VIN \nand matching the provided other search criteria. This endpoint can be easily used to determine market values in arbitrary geographic locations (like a city)\nfor specific vehicles.\nSee /listings2 endpoint for documentation on location, vehicle, and time search parameters. \nDate selection is restricted by your subscription tier, same as with the /listings2 endpoint.\nOptionally restricts report to vehicles of the same model year. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/valuation"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /listPrice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Data"
					],
					"operation": [
						"Get Avg List Price List Price Get"
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
						"Pricing Data"
					],
					"operation": [
						"Get Avg List Price List Price Get"
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
						"Pricing Data"
					],
					"operation": [
						"Get Avg List Price List Price Get"
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
						"Pricing Data"
					],
					"operation": [
						"Get Avg List Price List Price Get"
					]
				}
			}
		},
		{
			"displayName": "GET /salePrice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Data"
					],
					"operation": [
						"Get Avg Sale Price Sale Price Get"
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
						"Pricing Data"
					],
					"operation": [
						"Get Avg Sale Price Sale Price Get"
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
						"Pricing Data"
					],
					"operation": [
						"Get Avg Sale Price Sale Price Get"
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
						"Pricing Data"
					],
					"operation": [
						"Get Avg Sale Price Sale Price Get"
					]
				}
			}
		},
		{
			"displayName": "GET /salePriceHistogram",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Data"
					],
					"operation": [
						"Get Model Sale Buckets Sale Price Histogram Get"
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
						"Pricing Data"
					],
					"operation": [
						"Get Model Sale Buckets Sale Price Histogram Get"
					]
				}
			}
		},
		{
			"displayName": "Model Name",
			"name": "modelName",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "modelName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Data"
					],
					"operation": [
						"Get Model Sale Buckets Sale Price Histogram Get"
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
						"Pricing Data"
					],
					"operation": [
						"Get Model Sale Buckets Sale Price Histogram Get"
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
						"Pricing Data"
					],
					"operation": [
						"Get Model Sale Buckets Sale Price Histogram Get"
					]
				}
			}
		},
		{
			"displayName": "GET /similarSalePrice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Data"
					],
					"operation": [
						"Get Market 3 Similar Sale Price Get"
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
						"Pricing Data"
					],
					"operation": [
						"Get Market 3 Similar Sale Price Get"
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
						"Pricing Data"
					],
					"operation": [
						"Get Market 3 Similar Sale Price Get"
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
						"Pricing Data"
					],
					"operation": [
						"Get Market 3 Similar Sale Price Get"
					]
				}
			}
		},
		{
			"displayName": "Days Back",
			"name": "daysBack",
			"default": 45,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "daysBack",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Data"
					],
					"operation": [
						"Get Market 3 Similar Sale Price Get"
					]
				}
			}
		},
		{
			"displayName": "Same Year",
			"name": "sameYear",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "sameYear",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Data"
					],
					"operation": [
						"Get Market 3 Similar Sale Price Get"
					]
				}
			}
		},
		{
			"displayName": "GET /valuation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Data"
					],
					"operation": [
						"Get Market 4 Valuation Get"
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
						"Pricing Data"
					],
					"operation": [
						"Get Market 4 Valuation Get"
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
						"Pricing Data"
					],
					"operation": [
						"Get Market 4 Valuation Get"
					]
				}
			}
		},
		{
			"displayName": "Dealer ID",
			"name": "dealerID",
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
						"Pricing Data"
					],
					"operation": [
						"Get Market 4 Valuation Get"
					]
				}
			}
		},
		{
			"displayName": "Zip Code",
			"name": "zipCode",
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
						"Pricing Data"
					],
					"operation": [
						"Get Market 4 Valuation Get"
					]
				}
			}
		},
		{
			"displayName": "Latitude",
			"name": "latitude",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "latitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Data"
					],
					"operation": [
						"Get Market 4 Valuation Get"
					]
				}
			}
		},
		{
			"displayName": "Longitude",
			"name": "longitude",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "longitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Data"
					],
					"operation": [
						"Get Market 4 Valuation Get"
					]
				}
			}
		},
		{
			"displayName": "Radius",
			"name": "radius",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "radius",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Data"
					],
					"operation": [
						"Get Market 4 Valuation Get"
					]
				}
			}
		},
		{
			"displayName": "Region Name",
			"name": "regionName",
			"default": "",
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
						"Pricing Data"
					],
					"operation": [
						"Get Market 4 Valuation Get"
					]
				}
			}
		},
		{
			"displayName": "Mileage Low",
			"name": "mileageLow",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "mileageLow",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Data"
					],
					"operation": [
						"Get Market 4 Valuation Get"
					]
				}
			}
		},
		{
			"displayName": "Mileage High",
			"name": "mileageHigh",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "mileageHigh",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Data"
					],
					"operation": [
						"Get Market 4 Valuation Get"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Data"
					],
					"operation": [
						"Get Market 4 Valuation Get"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Data"
					],
					"operation": [
						"Get Market 4 Valuation Get"
					]
				}
			}
		},
		{
			"displayName": "Days Back",
			"name": "daysBack",
			"default": 45,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "daysBack",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Data"
					],
					"operation": [
						"Get Market 4 Valuation Get"
					]
				}
			}
		},
		{
			"displayName": "New Cars",
			"name": "newCars",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "newCars",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Data"
					],
					"operation": [
						"Get Market 4 Valuation Get"
					]
				}
			}
		},
		{
			"displayName": "Extended Search",
			"name": "extendedSearch",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "extendedSearch",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Data"
					],
					"operation": [
						"Get Market 4 Valuation Get"
					]
				}
			}
		},
		{
			"displayName": "Same Year",
			"name": "sameYear",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "sameYear",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Data"
					],
					"operation": [
						"Get Market 4 Valuation Get"
					]
				}
			}
		},
];
