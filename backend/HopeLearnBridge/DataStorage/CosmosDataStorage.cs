using Microsoft.Azure.Cosmos.Linq;
using System.Linq.Expressions;
using Microsoft.Azure.Cosmos;

namespace HopeLearnBridge.DataStorage
{
    public class CosmosDataStorage : IDataStorage
    {
        private readonly Database _database;

        public CosmosDataStorage(CosmosClient cosmosClient)
        {
            _database = cosmosClient.GetDatabase(DataStorageConstants.DatabaseName)
                ?? throw new ArgumentNullException(nameof(cosmosClient));
        }

        public async Task<List<T>> GetItemsAsync<T>(string containerName, Expression <Func<T,bool>> predicate)
        {
            var container = _database.GetContainer(containerName);
            var query= container.GetItemLinqQueryable<T>().Where(predicate);
            var feedIterator = query.ToFeedIterator();
            List<T> results = new List<T>();

            while (feedIterator.HasMoreResults)
            {
                var response = await feedIterator.ReadNextAsync();
                results.AddRange(response.ToList());
            }

            return results;
        }

        public async Task<T> UpsertItemAsync<T>(T item, string containerName , string PartitionKeyValue) 
        {
            var container = _database.GetContainer(containerName);
            PartitionKey? partitionKey = PartitionKeyValue == null ? null : new PartitionKey(PartitionKeyValue);
            var response = await container.UpsertItemAsync(item, partitionKey);
            return response.Resource;
        }
    }
}