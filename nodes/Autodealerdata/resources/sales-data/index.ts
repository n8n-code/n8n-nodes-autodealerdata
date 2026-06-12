import type { INodeProperties } from 'n8n-workflow';

export const salesDataDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sales Data"
					]
				}
			},
			"options": [
				{
					"name": "Get Region Brand Market Share Get Region Brand Market Share Get",
					"value": "Get Region Brand Market Share Get Region Brand Market Share Get",
					"action": "Market share of a brand in region",
					"description": "Market share of a given brand in a given region by number of vehicles sold over the last 45 days.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getRegionBrandMarketShare"
						}
					}
				},
				{
					"name": "Get Region Market Share Get Region Market Share Get",
					"value": "Get Region Market Share Get Region Market Share Get",
					"action": "Market share of all brands in region",
					"description": "Market share of a all brands in a given region by number of vehicles sold over the last 45 days.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getRegionMarketShare"
						}
					}
				},
				{
					"name": "Get Model Used Dist Model Year Dist Get",
					"value": "Get Model Used Dist Model Year Dist Get",
					"action": "Used market share of model year by model",
					"description": "Market share of used vehicles over the last 45 days by model and year. All values are relative to vehicles of the same model.\nFor example: a percentOfMarket value of 25, year of 2017, and modelName of Camry means that 25% of used Camrys on the market \nin the given region over the last 45 days were from the 2017 model year.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/modelYearDist"
						}
					}
				},
				{
					"name": "Get Dealer Sales Region Daily Sales Get",
					"value": "Get Dealer Sales Region Daily Sales Get",
					"action": "Brand sales by region and Day",
					"description": "Get regional sales by brand and day. Most recent data is typically only 2 days old for this endpoint.\n    \nThe Day field is in YYYY-MM-DD format. For example if you wanted sales data from April 5th of 2020 the day field would be '2020-04-05'\n\nData availability depends on region and goes back up to 2016.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/regionDailySales"
						}
					}
				},
				{
					"name": "Get Dealer Sales Region Sales Get",
					"value": "Get Dealer Sales Region Sales Get",
					"action": "Premium. Brand sales by region and month",
					"description": "Premium. Get regional sales by brand and month, broken down by day. Most recent data is typically only 2 days old for this endpoint.\n    \nThe month field is in YYYY-MM-DD format. For example if you wanted sales data from April of 2020 the month field would be '2020-04-01'\n\nData availability depends on region and goes back up to 2016.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/regionSales"
						}
					}
				},
				{
					"name": "Get Top Models Top Models Get",
					"value": "Get Top Models Top Models Get",
					"action": "Top models in a given region",
					"description": "Sales ranking of different models by region over the last 45 days. \nThe <strong>percentOfTopSales</strong> value is the percent of the top seller the model represents. \n\nFor example: a value of 80% means that model sold 8 vehicles for every 10 of the top model sold.\n\nThe other fields represent the model percent of X. The <strong>brandMarketShare</strong> field is that brand's market share of the region\nover the report's time interval.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/topModels"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /getRegionBrandMarketShare",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sales Data"
					],
					"operation": [
						"Get Region Brand Market Share Get Region Brand Market Share Get"
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
						"Sales Data"
					],
					"operation": [
						"Get Region Brand Market Share Get Region Brand Market Share Get"
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
						"Sales Data"
					],
					"operation": [
						"Get Region Brand Market Share Get Region Brand Market Share Get"
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
						"Sales Data"
					],
					"operation": [
						"Get Region Brand Market Share Get Region Brand Market Share Get"
					]
				}
			}
		},
		{
			"displayName": "GET /getRegionMarketShare",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sales Data"
					],
					"operation": [
						"Get Region Market Share Get Region Market Share Get"
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
						"Sales Data"
					],
					"operation": [
						"Get Region Market Share Get Region Market Share Get"
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
						"Sales Data"
					],
					"operation": [
						"Get Region Market Share Get Region Market Share Get"
					]
				}
			}
		},
		{
			"displayName": "GET /modelYearDist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sales Data"
					],
					"operation": [
						"Get Model Used Dist Model Year Dist Get"
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
						"Sales Data"
					],
					"operation": [
						"Get Model Used Dist Model Year Dist Get"
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
						"Sales Data"
					],
					"operation": [
						"Get Model Used Dist Model Year Dist Get"
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
						"Sales Data"
					],
					"operation": [
						"Get Model Used Dist Model Year Dist Get"
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
						"Sales Data"
					],
					"operation": [
						"Get Model Used Dist Model Year Dist Get"
					]
				}
			}
		},
		{
			"displayName": "GET /regionDailySales",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sales Data"
					],
					"operation": [
						"Get Dealer Sales Region Daily Sales Get"
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
						"Sales Data"
					],
					"operation": [
						"Get Dealer Sales Region Daily Sales Get"
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
						"Sales Data"
					],
					"operation": [
						"Get Dealer Sales Region Daily Sales Get"
					]
				}
			}
		},
		{
			"displayName": "Region Name",
			"name": "regionName",
			"required": true,
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
						"Sales Data"
					],
					"operation": [
						"Get Dealer Sales Region Daily Sales Get"
					]
				}
			}
		},
		{
			"displayName": "Day",
			"name": "day",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "day",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sales Data"
					],
					"operation": [
						"Get Dealer Sales Region Daily Sales Get"
					]
				}
			}
		},
		{
			"displayName": "GET /regionSales",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sales Data"
					],
					"operation": [
						"Get Dealer Sales Region Sales Get"
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
						"Sales Data"
					],
					"operation": [
						"Get Dealer Sales Region Sales Get"
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
						"Sales Data"
					],
					"operation": [
						"Get Dealer Sales Region Sales Get"
					]
				}
			}
		},
		{
			"displayName": "Region Name",
			"name": "regionName",
			"required": true,
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
						"Sales Data"
					],
					"operation": [
						"Get Dealer Sales Region Sales Get"
					]
				}
			}
		},
		{
			"displayName": "Month",
			"name": "month",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "month",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sales Data"
					],
					"operation": [
						"Get Dealer Sales Region Sales Get"
					]
				}
			}
		},
		{
			"displayName": "GET /topModels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sales Data"
					],
					"operation": [
						"Get Top Models Top Models Get"
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
						"Sales Data"
					],
					"operation": [
						"Get Top Models Top Models Get"
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
						"Sales Data"
					],
					"operation": [
						"Get Top Models Top Models Get"
					]
				}
			}
		},
];
