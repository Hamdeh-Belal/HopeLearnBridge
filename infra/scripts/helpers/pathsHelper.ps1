function Join-RepoPath {
    param (
        [string]$RepoRoot,
        [string]$RelativePath
    )
    $FullPath = Join-Path $RepoRoot $RelativePath
    return $FullPath
}