param resourceName string
param location string
param tags object
param userAssignedIdentityResourceId string
param arguments string
param scriptContent string
param baseTime string = utcNow('F')
param timeout string = 'PT8M'

resource azureCliDeploymentScript 'Microsoft.Resources/deploymentScripts@2023-08-01' = {
  name: resourceName
  location: location
  kind: 'AzureCLI'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '${userAssignedIdentityResourceId}': {}
    }
  }
  properties: {
    azCliVersion: '2.9.1'
    arguments: arguments
    scriptContent: scriptContent
    forceUpdateTag: baseTime
    cleanupPreference: 'OnSuccess'
    retentionInterval: 'P1D'
    timeout: timeout
  }
  tags: tags
}
