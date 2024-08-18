using Microsoft.Azure.Cosmos.Linq;
using Microsoft.Azure.Cosmos;

namespace HopeLearnBridge.DataStorage
{
    public class CosmosDataStorage : IDataStorage
    {
        private readonly CosmosClient _cosmosClient;
        private readonly string _databaseName = DataStorageConstants.DatabaseName; 
        public CosmosDataStorage(CosmosClient cosmosClient)
        {
            _cosmosClient = cosmosClient;
        }
        public async Task<List<T>> GetItemsAsync<T>(string containerName)
        {
            var container = _cosmosClient.GetContainer(_databaseName, containerName);
            var feedIterator = container.GetItemLinqQueryable<T>().Where(item => true).ToFeedIterator();
            List<T> results = new List<T>();
            while (feedIterator.HasMoreResults)
            {
                var response = await feedIterator.ReadNextAsync();
                results.AddRange(response.ToList());
            }
            return results;
        }
    }
}