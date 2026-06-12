import type { INodeProperties } from 'n8n-workflow';

export const vehicleDataDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Vehicle Data"
					]
				}
			},
			"options": [
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
				},
				{
					"name": "Vin Decode Vin Decode Get",
					"value": "Vin Decode Vin Decode Get",
					"action": "Vin decoder and Recall Info",
					"description": "Decodes the provided North American vin and provides recall information if available. \nWe require at least the first 12 out of 17 characters in the vin to attempt a decode. The vin is not case sensitive.\nIf passEmpty (default False) is True we will also include the empty fields in the response json. \nIf includeRecall (default True) is True we will include recall data reported to the NHTSA. Set False for a faster response.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/vinDecode"
						}
					}
				}
			],
			"default": ""
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
					],
					"operation": [
						"Get Listings By Dealer Listings Get"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
					],
					"operation": [
						"Get Listings 2 Listings 2 Get"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
					],
					"operation": [
						"Listings By Zip Code And Date Listings By Zip Code And Date Get"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
					],
					"operation": [
						"Get History 2 Vehicle History Get"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
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
						"Vehicle Data"
					],
					"operation": [
						"Get Vehicle Seen Vehicle Seen Get"
					]
				}
			}
		},
		{
			"displayName": "GET /vinDecode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vehicle Data"
					],
					"operation": [
						"Vin Decode Vin Decode Get"
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
						"Vehicle Data"
					],
					"operation": [
						"Vin Decode Vin Decode Get"
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
						"Vehicle Data"
					],
					"operation": [
						"Vin Decode Vin Decode Get"
					]
				}
			}
		},
		{
			"displayName": "Pass Empty",
			"name": "passEmpty",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "passEmpty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vehicle Data"
					],
					"operation": [
						"Vin Decode Vin Decode Get"
					]
				}
			}
		},
		{
			"displayName": "Include Recall",
			"name": "includeRecall",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeRecall",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vehicle Data"
					],
					"operation": [
						"Vin Decode Vin Decode Get"
					]
				}
			}
		},
];
