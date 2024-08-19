using HopeLearnBridge.DataStorage;
using Microsoft.Azure.Cosmos;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddSingleton<CosmosClient>(sp =>
{
    var configuration = sp.GetRequiredService<IConfiguration>();
    var cosmosDbConfig = configuration.GetSection("CosmosDB");
    var account = cosmosDbConfig["Account"];
    var key = cosmosDbConfig["Key"];
    return new CosmosClient(account, key);
});

builder.Services.AddSingleton<IDataStorage>(sp =>
{
    var cosmosClient = sp.GetRequiredService<CosmosClient>();
    return new CosmosDataStorage(cosmosClient);
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var app = builder.Build();
var isLocal = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Local";
// Configure the HTTP request pipeline.
if (isLocal){
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
