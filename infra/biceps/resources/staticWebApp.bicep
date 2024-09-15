param resourceName string
param location string
param tags object
param sku string
param appSettings object
param environmentShortName string

resource staticWebApp 'Microsoft.Web/staticSites@2022-09-01' = {
  name: resourceName
  location: location
  tags: tags
  sku: {
    name: sku
    tier: sku
  }
  properties: {
    buildProperties: {
      appLocation: 'src/frontend'
      appBuildCommand: 'pnpm install && pnpm build:${environmentShortName}'
    }
  }
}

resource staticWebAppConfig 'Microsoft.Web/staticSites/config@2022-03-01' = {
  parent: staticWebApp
  name: 'appsettings'
  kind: 'config'
  properties: appSettings
}

output url string = 'https://${staticWebApp.properties.defaultHostname}'
