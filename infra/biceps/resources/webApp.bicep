param resourceName string
param location string
param tags object
param linuxFxVersion string
param appServicePlanResourceId string
param appSettings array

resource webApp 'Microsoft.Web/sites@2022-09-01' = {
  name: resourceName
  location: location
  kind: 'app,linux'
  tags: tags
  properties: {
    enabled: true
    serverFarmId: appServicePlanResourceId
    httpsOnly: true
    reserved: true
    siteConfig: {
      linuxFxVersion: linuxFxVersion
      appSettings: appSettings
      cors: {
        allowedOrigins: [
          '*'
        ]
      }
    }
    publicNetworkAccess: 'Enabled'
    storageAccountRequired: false
    keyVaultReferenceIdentity: 'SystemAssigned'
  }
}

output url string = 'https://${webApp.properties.defaultHostName}'
