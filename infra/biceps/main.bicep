@secure()
param provisionParameters object

var appNamePlaceholder = '{{appName}}'
var resourceNamePlaceholder = '{{resourceName}}'
var namingConvention = '${resourceNamePlaceholder}-${appNamePlaceholder}-${provisionParameters.environmentShortName}-${provisionParameters.locationShortName}-${provisionParameters.instance}'
var hopeLearnBridgeNamingConvention = replace(namingConvention, appNamePlaceholder, provisionParameters.appShortName)
var commonTags = { 'azd-env-name': provisionParameters.environmentShortName }

var cosmosAccountName = replace(hopeLearnBridgeNamingConvention, resourceNamePlaceholder, 'cosno')
module cosmosModule './resources/cosmos.bicep' = {
  name: cosmosAccountName
  params: {
    resourceName: cosmosAccountName
    location: provisionParameters.locationName
    tags: commonTags
    databaseName: 'HopeLearnBridge'
  }
}

var appServicePlanName = replace(hopeLearnBridgeNamingConvention, resourceNamePlaceholder, 'asp')
module appServicePlanModule './resources/appServicePlan.bicep' = {
  name: appServicePlanName
  params: {
    resourceName: appServicePlanName
    location: provisionParameters.locationName
    tags: commonTags
    sku: 'F1'
    kind: 'linux'
  }
}

var backendWebAppName = replace(hopeLearnBridgeNamingConvention, resourceNamePlaceholder, 'app')
var backendWebAppSettings = [
  {
    name: 'ASPNETCORE_ENVIRONMENT'
    value: provisionParameters.environment
  }
  {
    name: 'Cosmos_DB_ConnectionString'
    value: cosmosModule.outputs.connectionString
  }
  {
    name: 'JWT_Issuer'
    value: 'https://${backendWebAppName}.azurewebsites.net/'
  }
  {
    name: 'JWT_Audience'
    value: 'https://${backendWebAppName}.azurewebsites.net/'
  }
]
module backendWebAppModule './resources/webApp.bicep' = {
  name: backendWebAppName
  params: {
    resourceName: backendWebAppName
    location: provisionParameters.locationName
    tags: union(commonTags, { 'azd-service-name': 'backend' })
    appServicePlanResourceId: appServicePlanModule.outputs.resourceId
    linuxFxVersion: 'DOTNET|8.0.303'
    appSettings: backendWebAppSettings
  }
}

var frontendStaticWebAppSettings = {
  VITE_APP_BACKEND_API_BASE_URL: backendWebAppModule.outputs.url
}
var frontendStaticWebAppName = replace(hopeLearnBridgeNamingConvention, resourceNamePlaceholder, 'stapp')
module frontendStaticWebAppModule './resources/staticWebApp.bicep' = {
  name: frontendStaticWebAppName
  params: {
    resourceName: frontendStaticWebAppName
    location: provisionParameters.locationName
    tags: union(commonTags, { 'azd-service-name': 'frontend' })
    sku: 'free'
    appSettings: frontendStaticWebAppSettings
    environmentShortName: provisionParameters.environmentShortName
  }
}


// Output to .env file like this to make it in key=value form
output COSMOS__CONNECTIONSTRING string = cosmosModule.outputs.connectionString

output BACKENDWEBAPPOUTPUT__URL string = backendWebAppModule.outputs.url

output FRONTENDSTATICWEBAPPOUTPUT__URL string = frontendStaticWebAppModule.outputs.url
