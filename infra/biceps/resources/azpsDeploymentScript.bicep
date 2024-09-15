param resourceName string
param location string
param tags object
param userAssignedIdentityResourceId string
param arguments string
param scriptContent string
param baseTime string = utcNow('F')
param timeout string = 'PT8M'

resource azurePowerShellDeploymentScript 'Microsoft.Resources/deploymentScripts@2023-08-01' = {
  name: resourceName
  location: location
  kind: 'AzurePowerShell'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '${userAssignedIdentityResourceId}': {}
    }
  }
  properties: {
    azPowerShellVersion: '11.0'
    arguments: arguments
    scriptContent: scriptContent
    forceUpdateTag: baseTime
    cleanupPreference: 'OnSuccess'
    retentionInterval: 'P1D'
    timeout: timeout
  }
  tags: tags
}
