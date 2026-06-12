import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { supplyDataDescription } from './resources/supply-data';
import { developerPlanOrGreaterDescription } from './resources/developer-plan-or-greater';
import { staticDataDescription } from './resources/static-data';
import { starterPlanOrGreaterDescription } from './resources/starter-plan-or-greater';
import { dealershipDataDescription } from './resources/dealership-data';
import { premiumDescription } from './resources/premium';
import { salesDataDescription } from './resources/sales-data';
import { analystPlanOrGreaterDescription } from './resources/analyst-plan-or-greater';
import { authenticationDescription } from './resources/authentication';
import { pricingDataDescription } from './resources/pricing-data';
import { vehicleDataDescription } from './resources/vehicle-data';
import { applicationAccelerationDescription } from './resources/application-acceleration';

export class Autodealerdata implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Autodealerdata',
                name: 'N8nDevAutodealerdata',
                icon: { light: 'file:./autodealerdata.svg', dark: 'file:./autodealerdata.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'API provides Automotive Data access per Terms of Service.',
                defaults: { name: 'Autodealerdata' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAutodealerdataApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Supply Data",
					"value": "Supply Data",
					"description": ""
				},
				{
					"name": "Developer Plan Or Greater",
					"value": "Developer Plan Or Greater",
					"description": ""
				},
				{
					"name": "Static Data",
					"value": "Static Data",
					"description": ""
				},
				{
					"name": "Starter Plan Or Greater",
					"value": "Starter Plan Or Greater",
					"description": ""
				},
				{
					"name": "Dealership Data",
					"value": "Dealership Data",
					"description": ""
				},
				{
					"name": "Premium",
					"value": "Premium",
					"description": ""
				},
				{
					"name": "Sales Data",
					"value": "Sales Data",
					"description": ""
				},
				{
					"name": "Analyst Plan Or Greater",
					"value": "Analyst Plan Or Greater",
					"description": ""
				},
				{
					"name": "Authentication",
					"value": "Authentication",
					"description": ""
				},
				{
					"name": "Pricing Data",
					"value": "Pricing Data",
					"description": ""
				},
				{
					"name": "Vehicle Data",
					"value": "Vehicle Data",
					"description": ""
				},
				{
					"name": "Application Acceleration",
					"value": "Application Acceleration",
					"description": ""
				}
			],
			"default": ""
		},
		...supplyDataDescription,
		...developerPlanOrGreaterDescription,
		...staticDataDescription,
		...starterPlanOrGreaterDescription,
		...dealershipDataDescription,
		...premiumDescription,
		...salesDataDescription,
		...analystPlanOrGreaterDescription,
		...authenticationDescription,
		...pricingDataDescription,
		...vehicleDataDescription,
		...applicationAccelerationDescription
                ],
        };
}
