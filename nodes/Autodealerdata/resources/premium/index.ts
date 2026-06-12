import type { INodeProperties } from 'n8n-workflow';

export const premiumDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Premium"
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
				},
				{
					"name": "Get History 2 Vehicle History Get",
					"value": "Get History 2 Vehicle History Get",
					"action": "Premium. Simple Vehicle History Report",
					"description": "Premium. Provides a simple report detailing a vechicle's sales history at dealerships. Data includes the name of the dealership, dates it was for sale,\nprice, new/used condition, mileage, dealership state, and dealership zip code. Data availability goes back to early 2016. \n\nIf your use case involves checking if a vehicle has appeared on the open market on or after a given date see \nthe /vehicleSeen endpoint.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/vehicleHistory"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
					],
					"operation": [
						"Get Dealers Get Dealers By Region Get"
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
						"Premium"
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
						"Premium"
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
						"Premium"
					],
					"operation": [
						"Get Region Market Share Get Region Market Share Get"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
					],
					"operation": [
						"Get Dealer Sales Region Sales Get"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
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
						"Premium"
					],
					"operation": [
						"Get Market 4 Valuation Get"
					]
				}
			}
		},
		{
			"displayName": "GET /vehicleHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Premium"
					],
					"operation": [
						"Get History 2 Vehicle History Get"
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
						"Premium"
					],
					"operation": [
						"Get History 2 Vehicle History Get"
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
						"Premium"
					],
					"operation": [
						"Get History 2 Vehicle History Get"
					]
				}
			}
		},
];
