using HopeLearnBridge.DataStorage;
using HopeLearnBridge.Handlers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Cosmos;

var builder = WebApplication.CreateBuilder(args);
var isLocal = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Local";
builder.Services.AddControllers();
builder.Services.AddApiVersioning(options =>
{
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.DefaultApiVersion = new ApiVersion(1, 0);
    options.ReportApiVersions = true;
});
builder.Services.AddSingleton<IDataStorage, CosmosDataStorage>();
builder.Services.AddSingleton<CourseHandler>();
builder.Services.AddSingleton<CosmosClient>(sp =>
{
    var configuration = sp.GetRequiredService<IConfiguration>();
    var cosmosDbConfig = configuration.GetSection("CosmosDB");
    var account = cosmosDbConfig["Account"];
    var key = cosmosDbConfig["Key"];
    return new CosmosClient(account, key);
});
builder.Services.AddSingleton<ICourseHandler,CourseHandler>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>{
    if (isLocal)
    {
        options.AddPolicy("HopeLearnBridgeLocalPolicy", policy =>
        {
            policy.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
    }
    else{
        options.AddPolicy("HopeLearnBridgeCloudPolicy", policy =>
        {
            policy.WithOrigins("http://localhost:5173")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
    }
});
var app = builder.Build();
// Configure the HTTP request pipeline.
if (isLocal){
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(isLocal ? "HopeLearnBridgeLocalPolicy" : "HopeLearnBridgeCloudPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();