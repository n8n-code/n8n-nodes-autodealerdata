import type { INodeProperties } from 'n8n-workflow';

export const developerPlanOrGreaterDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Developer Plan Or Greater"
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
				},
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
					"name": "Get Listings 2 Listings 2 Get",
					"value": "Get Listings 2 Listings 2 Get",
					"action": "Flexible Listing Search",
					"description": "Generic getter for listings supporting a wide array of selection criteria. This is the new primary listing endpoint and we will phase out the older listing endpoints over time.\nThe other listing endpoints return the same data, but are more restrictive in the available geographic and vehicle selection criteria and can be replicated by this endpoint.\n\nDealer selection uses the most restrictive criteria supplied. From most restrictive to least: dealerID, gps, zipCode, region. You must provide some dealer selection criteria.\n\nIt is important to note that the units in the longitude are in degrees east, not degrees west. For example the coordinates 45.53N, 100.41W correspond to Mobridge, SC \nbut they will be interpreted as 45.53N, 100.41E which corresponds to a point in the Gobi Desert near Jinst, Mongolia. You can fix this by converting the longitiude yourself, \nor by supplying a negative value (-100.41). For this example both (X, -100.41) and (X, 259.59) would be the same point. Units on the radius are miles and a smaller radius will\nresult in a faster response time. Maximum search radius depends on your subscription plan. \n\nThe radius value is used for GPS searches and (optionally) zipCode searches. It is ignored for searches using other location criteria. If you provide a radius value with a zipCode\nsearch, the zipCode will be mapped to GPS coordinates behind the scenes. If no radius is provided or if the zipCode to GPS mapping fails,\nthe API will only search for vehicles at dealerships within the provided zipCode.\n\nListing selection logically ANDs all options given. \n\nTime interval selection will prefer explicit start and end dates. If only one of startDate/endDate is supplied, this endpoint will use it \nas an anchor and look forward or backwards by the daysBack value. If startDate is specified and endDate is not, then endDate will be set to startDate+daysBack. \nConversely if endDate is specified, but startDate is not then startDate will be set at endDate-daysBack.\nIf neither is supplied endpoint will set endDate to today and startDate to today-daysBack.\n\nMaximum time interval is 45 days.\n\nMileage selection uses the provided mileage values and returns vehicles with mileage in the range [mileageLow, mileageHigh].\nIf mileageLow == mileageHigh (for example both are 0 default) this endpoint will not filter based on mileage. Not all used vehicles have a mileage record available. \n\nExtendedSearch modifies the slice of listings returned. If false (default) it only returns vehicles satisfying lastSeen >= startDate and lastSeen < endDate.\nIf true it will return vehicles that were in dealer's inventory at any point between startDate and endDate including vehicles that were sold after endDate.\nSetting extendedSearch to true will result in a slower response time. \n\nFor example: If both a region name and dealer ID are supplied the dealer ID will be used because it is the most restrictive.\n\nIf a brandName of Ford and modelYear of 2019, modelName of F-150, and newCars of False is supplied this endpoint will return \nused 2019 model year Ford F-150s. If a contradictory listing selection is supplied (for example Ford + Camry) no listings will be returned\nbecause the request matched no listings.\n\nResults are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/listings2"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
					],
					"operation": [
						"Days To Sell Days To Sell Get"
					]
				}
			}
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
					],
					"operation": [
						"Get Dealers Get Dealers By Region Get"
					]
				}
			}
		},
		{
			"displayName": "GET /listings2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Developer Plan Or Greater"
					],
					"operation": [
						"Get Listings 2 Listings 2 Get"
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
						"Developer Plan Or Greater"
					],
					"operation": [
						"Get Listings 2 Listings 2 Get"
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
						"Developer Plan Or Greater"
					],
					"operation": [
						"Get Listings 2 Listings 2 Get"
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
						"Developer Plan Or Greater"
					],
					"operation": [
						"Get Listings 2 Listings 2 Get"
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
						"Developer Plan Or Greater"
					],
					"operation": [
						"Get Listings 2 Listings 2 Get"
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
						"Developer Plan Or Greater"
					],
					"operation": [
						"Get Listings 2 Listings 2 Get"
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
						"Developer Plan Or Greater"
					],
					"operation": [
						"Get Listings 2 Listings 2 Get"
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
						"Developer Plan Or Greater"
					],
					"operation": [
						"Get Listings 2 Listings 2 Get"
					]
				}
			}
		},
		{
			"displayName": "Brand Name",
			"name": "brandName",
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
						"Developer Plan Or Greater"
					],
					"operation": [
						"Get Listings 2 Listings 2 Get"
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
						"Developer Plan Or Greater"
					],
					"operation": [
						"Get Listings 2 Listings 2 Get"
					]
				}
			}
		},
		{
			"displayName": "Model Year",
			"name": "modelYear",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "modelYear",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Developer Plan Or Greater"
					],
					"operation": [
						"Get Listings 2 Listings 2 Get"
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
						"Developer Plan Or Greater"
					],
					"operation": [
						"Get Listings 2 Listings 2 Get"
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
						"Developer Plan Or Greater"
					],
					"operation": [
						"Get Listings 2 Listings 2 Get"
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
						"Developer Plan Or Greater"
					],
					"operation": [
						"Get Listings 2 Listings 2 Get"
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
						"Developer Plan Or Greater"
					],
					"operation": [
						"Get Listings 2 Listings 2 Get"
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
						"Developer Plan Or Greater"
					],
					"operation": [
						"Get Listings 2 Listings 2 Get"
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
						"Developer Plan Or Greater"
					],
					"operation": [
						"Get Listings 2 Listings 2 Get"
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
						"Developer Plan Or Greater"
					],
					"operation": [
						"Get Listings 2 Listings 2 Get"
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
						"Developer Plan Or Greater"
					],
					"operation": [
						"Get Listings 2 Listings 2 Get"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
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
						"Developer Plan Or Greater"
					],
					"operation": [
						"Get Market 4 Valuation Get"
					]
				}
			}
		},
];
