import type { INodeProperties } from 'n8n-workflow';

export const starterPlanOrGreaterDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Starter Plan Or Greater"
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
				},
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
					],
					"operation": [
						"Get Regions Get Regions Get"
					]
				}
			}
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
					],
					"operation": [
						"Get Avg List Price List Price Get"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
					],
					"operation": [
						"Get Model Used Dist Model Year Dist Get"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
					],
					"operation": [
						"Get Market 3 Similar Sale Price Get"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
					],
					"operation": [
						"Get Top Models Top Models Get"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
					],
					"operation": [
						"Get History 2 Vehicle History Get"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
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
						"Starter Plan Or Greater"
					],
					"operation": [
						"Vin Decode Vin Decode Get"
					]
				}
			}
		},
];
