import type { INodeProperties } from 'n8n-workflow';

export const analystPlanOrGreaterDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Analyst Plan Or Greater"
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
					"name": "Get Listings By Dealer Listings Get",
					"value": "Get Listings By Dealer Listings Get",
					"action": "Listings by Dealer ID",
					"description": "See /listings2 endpoint for more flexible listing search.\nReturns a dealer's listings over the last 45 days by dealer ID. The ID can be found by calling the /getDealers endpoint. \nListing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.\nResults are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listings"
						}
					}
				},
				{
					"name": "Get Listings By Dealer Listings By Date Get",
					"value": "Get Listings By Dealer Listings By Date Get",
					"action": "Listings by Dealer ID and Date",
					"description": "See /listings2 endpoint for more flexible listing search.\nReturns a dealer's listings over the given timespan by dealer ID. The ID can be found by calling the /getDealers endpoint. \nMaximum time interval between startDate and endDate is 45 days.\nListing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.\nResults are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listingsByDate"
						}
					}
				},
				{
					"name": "Get Listings By Region Listings By Region Get",
					"value": "Get Listings By Region Listings By Region Get",
					"action": "Listings by Region",
					"description": "See /listings2 endpoint for more flexible listing search.\nReturns a dealer's listings over up to the last 45 days by region. \nListing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.\nResults are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listingsByRegion"
						}
					}
				},
				{
					"name": "Get Listings By Region And Date Listings By Region And Date Get",
					"value": "Get Listings By Region And Date Listings By Region And Date Get",
					"action": "Listings by Region and Date",
					"description": "See /listings2 endpoint for more flexible listing search.\nReturns listings active in a region in the given date range [startdate, endDate), or in other words dates that satisfy startDate <= X < endDate. Maximum range is 45 days \nListing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.\nResults are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listingsByRegionAndDate"
						}
					}
				},
				{
					"name": "Listings By Zip Code Listings By Zip Code Get",
					"value": "Listings By Zip Code Listings By Zip Code Get",
					"action": "Listings by ZipCode",
					"description": "See /listings2 endpoint for more flexible listing search.\nReturns a dealer's listings over up to the last 45 days in the provided dealerhip's zip code. For example 92701.\nListing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.\nResults are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listingsByZipCode"
						}
					}
				},
				{
					"name": "Listings By Zip Code And Date Listings By Zip Code And Date Get",
					"value": "Listings By Zip Code And Date Listings By Zip Code And Date Get",
					"action": "Listings by ZipCode and Date",
					"description": "See /listings2 endpoint for more flexible listing search.\nReturns a dealer's listings over up to the last 45 days in the provided dealership's zip code. For example 92701.\nListing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.\nResults are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listingsByZipCodeAndDate"
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
						"Analyst Plan Or Greater"
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
						"Analyst Plan Or Greater"
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
						"Analyst Plan Or Greater"
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
						"Analyst Plan Or Greater"
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
						"Analyst Plan Or Greater"
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
						"Analyst Plan Or Greater"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Region Market Share Get Region Market Share Get"
					]
				}
			}
		},
		{
			"displayName": "GET /listings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Dealer Listings Get"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Dealer Listings Get"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Dealer Listings Get"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Dealer Listings Get"
					]
				}
			}
		},
		{
			"displayName": "New Cars",
			"name": "newCars",
			"default": true,
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Dealer Listings Get"
					]
				}
			}
		},
		{
			"displayName": "GET /listingsByDate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Dealer Listings By Date Get"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Dealer Listings By Date Get"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Dealer Listings By Date Get"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"required": true,
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Dealer Listings By Date Get"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"required": true,
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Dealer Listings By Date Get"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Dealer Listings By Date Get"
					]
				}
			}
		},
		{
			"displayName": "New Cars",
			"name": "newCars",
			"default": true,
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Dealer Listings By Date Get"
					]
				}
			}
		},
		{
			"displayName": "GET /listingsByRegion",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Region Listings By Region Get"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Region Listings By Region Get"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Region Listings By Region Get"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Region Listings By Region Get"
					]
				}
			}
		},
		{
			"displayName": "Days Back",
			"name": "daysBack",
			"default": 10,
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Region Listings By Region Get"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Region Listings By Region Get"
					]
				}
			}
		},
		{
			"displayName": "New Cars",
			"name": "newCars",
			"default": true,
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Region Listings By Region Get"
					]
				}
			}
		},
		{
			"displayName": "GET /listingsByRegionAndDate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Region And Date Listings By Region And Date Get"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Region And Date Listings By Region And Date Get"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Region And Date Listings By Region And Date Get"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Region And Date Listings By Region And Date Get"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"required": true,
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Region And Date Listings By Region And Date Get"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"required": true,
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Region And Date Listings By Region And Date Get"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Region And Date Listings By Region And Date Get"
					]
				}
			}
		},
		{
			"displayName": "New Cars",
			"name": "newCars",
			"default": true,
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Listings By Region And Date Listings By Region And Date Get"
					]
				}
			}
		},
		{
			"displayName": "GET /listingsByZipCode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Listings By Zip Code Listings By Zip Code Get"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Listings By Zip Code Listings By Zip Code Get"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Listings By Zip Code Listings By Zip Code Get"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Listings By Zip Code Listings By Zip Code Get"
					]
				}
			}
		},
		{
			"displayName": "New Cars",
			"name": "newCars",
			"default": true,
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Listings By Zip Code Listings By Zip Code Get"
					]
				}
			}
		},
		{
			"displayName": "Model Name",
			"name": "modelName",
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Listings By Zip Code Listings By Zip Code Get"
					]
				}
			}
		},
		{
			"displayName": "GET /listingsByZipCodeAndDate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Listings By Zip Code And Date Listings By Zip Code And Date Get"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Listings By Zip Code And Date Listings By Zip Code And Date Get"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Listings By Zip Code And Date Listings By Zip Code And Date Get"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"required": true,
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Listings By Zip Code And Date Listings By Zip Code And Date Get"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"required": true,
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Listings By Zip Code And Date Listings By Zip Code And Date Get"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Listings By Zip Code And Date Listings By Zip Code And Date Get"
					]
				}
			}
		},
		{
			"displayName": "New Cars",
			"name": "newCars",
			"default": true,
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Listings By Zip Code And Date Listings By Zip Code And Date Get"
					]
				}
			}
		},
		{
			"displayName": "Model Name",
			"name": "modelName",
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Listings By Zip Code And Date Listings By Zip Code And Date Get"
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
						"Analyst Plan Or Greater"
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
						"Analyst Plan Or Greater"
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
						"Analyst Plan Or Greater"
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
						"Analyst Plan Or Greater"
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
						"Analyst Plan Or Greater"
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
						"Analyst Plan Or Greater"
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
						"Analyst Plan Or Greater"
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
						"Analyst Plan Or Greater"
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
						"Analyst Plan Or Greater"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Dealer Sales Region Sales Get"
					]
				}
			}
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
						"Analyst Plan Or Greater"
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
						"Analyst Plan Or Greater"
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
						"Analyst Plan Or Greater"
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
						"Analyst Plan Or Greater"
					],
					"operation": [
						"Get Vehicle Seen Vehicle Seen Get"
					]
				}
			}
		},
];
