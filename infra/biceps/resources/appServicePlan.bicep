param resourceName string
param location string
param tags object
param sku string
param kind string

resource appServicePlan 'Microsoft.Web/serverfarms@2022-09-01' = {
  name: resourceName
  location: location
  tags: tags
  properties: {
    reserved: true
  }
  sku: {
    name: sku
  }
  kind: kind
}

output resourceId string = appServicePlan.id
