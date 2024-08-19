namespace HopeLearnBridge.DataStorage
{
    public interface IDataStorage
    {
        Task<List<T>> GetItemsAsync<T>(string containerName);
    }
}