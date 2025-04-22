# 🌉 HopeLearnBridge

**HopeLearnBridge** is a full-stack web application developed during the Summer 2024 training program at ASAL Technologies. The project aims to provide a platform that bridges learners with educational resources, fostering a community of knowledge sharing and growth.

---

## 📁 Project Structure

- **backend/**: Contains the ASP.NET Core Web API, handling business logic, data access, and integration with Azure services.
- **frontend/**: Houses the React application, offering an interactive user interface for end-users.
- **.pipelines/**: Includes Azure DevOps pipeline configurations for continuous integration and deployment.
- **infra/**: Infrastructure-as-Code scripts for provisioning and managing Azure resources.

---

## 🚀 Getting Started

### Prerequisites

- [.NET 6 SDK](https://dotnet.microsoft.com/download/dotnet/6.0)
- [Node.js (v16 or later)](https://nodejs.org/)
- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)
- [Docker](https://www.docker.com/) (optional, for containerization)

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend/HopeLearnBridge
    ```

2. Restore dependencies and build the project:
    
    ```bash
    dotnet restore
    dotnet build
    ```
    
3. Run the application:
    
    ```bash
    dotnet run
    ```
    
    The API will be accessible at `https://localhost:5001` by default.
    

### Frontend Setup

1. Navigate to the frontend directory:
    
    ```bash
    cd frontend
    ```
    
2. Install dependencies:
    
    ```bash
    npm install
    ```
    
3. Start the development server:
    
    ```bash
    npm start
    ```
    
    The application will be available at `http://localhost:3000`.
    

---

## 🔐 Environment Configuration

Sensitive information such as API keys and connection strings are managed through environment variables. Ensure the following files are configured:

- **Backend**: `backend/HopeLearnBridge/appsettings.json`
    
- **Frontend**: `frontend/.env`
    
---

## 🛠️ Technologies Used

- **Frontend**: React, Redux, Tailwind CSS
    
- **Backend**: ASP.NET Core Web API, Entity Framework Core
    
- **Database**: Azure Cosmos DB
    
- **Authentication**: Azure Active Directory B2C
    
- **CI/CD**: Azure DevOps Pipelines
    
- **Infrastructure**: Azure Resource Manager (ARM) Templates / Bicep
    

---

## 📦 Deployment

The application is deployed to Azure using Azure DevOps pipelines. The deployment process includes:

- Building and testing the application
    
- Creating and configuring Azure resources
    
- Deploying the backend and frontend applications
    

Refer to the `.pipelines/` directory for full pipeline configurations.

---

## 👥 Contributors

- [Belal Hamdeh](https://github.com/Hamdeh-Belal)
    
- [Saja Shareef](https://github.com/SajaShareef)
    
- [Tasneem Ghazal](https://github.com/Tasneemghazal)
    
- Huthaifa Aljanazreh
    

---

## 📄 License

⚠️ **Notice:** This project was developed as part of a training program and is intended for educational use only.  
If you wish to use, modify, or redistribute any part of this project, **please contact the authors for permission first.**  
Unauthorized commercial or public use is not permitted.
