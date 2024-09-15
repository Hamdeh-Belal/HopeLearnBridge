# Exit script on any error
$ErrorActionPreference = "Stop"

# Import helper functions
. "$PSScriptRoot\..\helpers\loggingHelper.ps1"
. "$PSScriptRoot\..\helpers\pathsHelper.ps1"

# Define the root directory of the repository
$repoRoot = Resolve-Path "$PSScriptRoot\..\..\.."

function ValidateBicepTemplate {
    param (
        [string]$BicepFilePath
    )
    Write-Log "Validating Bicep Template..."
    try {
        az bicep build --file $BicepFilePath
    }
    catch {
        Write-Log -Message "Bicep template validation failed." -Level "ERROR"
        exit 1
    }
}

function Main {
    # Set paths
    $BicepFilePath = Join-RepoPath -RepoRoot $repoRoot -RelativePath "infra\biceps\main.bicep"

    # Validate Bicep template
    ValidateBicepTemplate -BicepFilePath $BicepFilePath
}

Main
