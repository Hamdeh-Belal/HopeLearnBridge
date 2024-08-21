namespace HopeLearnBridge.DataStorage
{
    public interface IDataStorage
    {
        Task<List<T>> GetItemsAsync<T>(string containerName);
        Task<T> UpsertItemAsync<T>(T item, string containerName,string partitionKey);
        
    }
}