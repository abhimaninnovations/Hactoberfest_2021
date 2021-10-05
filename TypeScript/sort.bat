# Folder where Files and Folders are located
$TopFolder = "C:\Install"

# Getting Folders and Files
$Folders = gci $TopFolder -OutVariable Files | ? { $_.PSisContainer }

# Loop over all Files with *.png extension
$Files | ? { $_.Extension -eq '.png' } | % {

    # Split FileName to get the number (like 1001)
    $num = ($_.Name -split "_")[1]

    # Get FolderName by reading out foldername (without 'x') and compare it to number
    $MoveTo = $Folders | ? { $_.Name.substring(1,($_.Name.length -1
