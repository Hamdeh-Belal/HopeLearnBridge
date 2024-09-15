param resourceName string
param location string
param tags object
param databaseName string

resource cosmosAccount 'Microsoft.DocumentDB/databaseAccounts@2024-05-15' = {
  name: resourceName
  location: location
  tags: tags
  properties: {
    locations: [
      {
        locationName: location
      }
    ]
    databaseAccountOfferType: 'Standard'
  }
}

resource cosmosAccountDB 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2024-05-15' = {
  parent: cosmosAccount
  name: databaseName
  tags: tags
  properties: {
    resource: {
      id: databaseName
    }
  }
}

#disable-next-line outputs-should-not-contain-secrets
output connectionString string = cosmosAccount.listConnectionStrings().connectionStrings[0].connectionString
