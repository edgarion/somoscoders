Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\info\Desktop\somoscoders\public\images\hero_group_original.jpg"
$src = [System.Drawing.Image]::FromFile($srcPath)
$w = $src.Width
$h = $src.Height
Write-Host "Source image size: $w x $h"

# 1. Hero Characters group (top right of design)
$heroRect = New-Object System.Drawing.Rectangle ([int]($w * 0.44)), ([int]($h * 0.08)), ([int]($w * 0.55)), ([int]($h * 0.58))
$heroBmp = New-Object System.Drawing.Bitmap $heroRect.Width, $heroRect.Height
$g = [System.Drawing.Graphics]::FromImage($heroBmp)
$g.DrawImage($src, (New-Object System.Drawing.Rectangle 0, 0, $heroRect.Width, $heroRect.Height), $heroRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$heroBmp.Save("c:\Users\info\Desktop\somoscoders\public\images\hero_characters_exact.png", [System.Drawing.Imaging.ImageFormat]::Png)
$heroBmp.Dispose()

# 2. Impact Section: boy with idea bulb (left side of impact)
$impactRect = New-Object System.Drawing.Rectangle ([int]($w * 0.02)), ([int]($h * 0.66)), ([int]($w * 0.16)), ([int]($h * 0.19))
$impactBmp = New-Object System.Drawing.Bitmap $impactRect.Width, $impactRect.Height
$g2 = [System.Drawing.Graphics]::FromImage($impactBmp)
$g2.DrawImage($src, (New-Object System.Drawing.Rectangle 0, 0, $impactRect.Width, $impactRect.Height), $impactRect, [System.Drawing.GraphicsUnit]::Pixel)
$g2.Dispose()
$impactBmp.Save("c:\Users\info\Desktop\somoscoders\public\images\char_impact_bulb.png", [System.Drawing.Imaging.ImageFormat]::Png)
$impactBmp.Dispose()

# 3. Opportunity Card: girl with glasses pointing up (right side of impact)
$oppRect = New-Object System.Drawing.Rectangle ([int]($w * 0.86)), ([int]($h * 0.48)), ([int]($w * 0.12)), ([int]($h * 0.16))
$oppBmp = New-Object System.Drawing.Bitmap $oppRect.Width, $oppRect.Height
$g3 = [System.Drawing.Graphics]::FromImage($oppBmp)
$g3.DrawImage($src, (New-Object System.Drawing.Rectangle 0, 0, $oppRect.Width, $oppRect.Height), $oppRect, [System.Drawing.GraphicsUnit]::Pixel)
$g3.Dispose()
$oppBmp.Save("c:\Users\info\Desktop\somoscoders\public\images\char_opportunity_girl.png", [System.Drawing.Imaging.ImageFormat]::Png)
$oppBmp.Dispose()

# 4. Program 1: Desarrollo Web (girl with laptop)
$p1Rect = New-Object System.Drawing.Rectangle ([int]($w * 0.28)), ([int]($h * 0.86)), ([int]($w * 0.14)), ([int]($h * 0.14))
$p1Bmp = New-Object System.Drawing.Bitmap $p1Rect.Width, $p1Rect.Height
$g4 = [System.Drawing.Graphics]::FromImage($p1Bmp)
$g4.DrawImage($src, (New-Object System.Drawing.Rectangle 0, 0, $p1Rect.Width, $p1Rect.Height), $p1Rect, [System.Drawing.GraphicsUnit]::Pixel)
$g4.Dispose()
$p1Bmp.Save("c:\Users\info\Desktop\somoscoders\public\images\program_web_dev.png", [System.Drawing.Imaging.ImageFormat]::Png)
$p1Bmp.Dispose()

# 5. Program 2: Data & IA (boy with charts)
$p2Rect = New-Object System.Drawing.Rectangle ([int]($w * 0.45)), ([int]($h * 0.86)), ([int]($w * 0.14)), ([int]($h * 0.14))
$p2Bmp = New-Object System.Drawing.Bitmap $p2Rect.Width, $p2Rect.Height
$g5 = [System.Drawing.Graphics]::FromImage($p2Bmp)
$g5.DrawImage($src, (New-Object System.Drawing.Rectangle 0, 0, $p2Rect.Width, $p2Rect.Height), $p2Rect, [System.Drawing.GraphicsUnit]::Pixel)
$g5.Dispose()
$p2Bmp.Save("c:\Users\info\Desktop\somoscoders\public\images\program_data_ai.png", [System.Drawing.Imaging.ImageFormat]::Png)
$p2Bmp.Dispose()

# 6. Program 3: QA & Testing (boy with magnifying glass)
$p3Rect = New-Object System.Drawing.Rectangle ([int]($w * 0.63)), ([int]($h * 0.86)), ([int]($w * 0.14)), ([int]($h * 0.14))
$p3Bmp = New-Object System.Drawing.Bitmap $p3Rect.Width, $p3Rect.Height
$g6 = [System.Drawing.Graphics]::FromImage($p3Bmp)
$g6.DrawImage($src, (New-Object System.Drawing.Rectangle 0, 0, $p3Rect.Width, $p3Rect.Height), $p3Rect, [System.Drawing.GraphicsUnit]::Pixel)
$g6.Dispose()
$p3Bmp.Save("c:\Users\info\Desktop\somoscoders\public\images\program_qa_testing.png", [System.Drawing.Imaging.ImageFormat]::Png)
$p3Bmp.Dispose()

# 7. Program 4: UX/UI (girl with tablet winking)
$p4Rect = New-Object System.Drawing.Rectangle ([int]($w * 0.80)), ([int]($h * 0.86)), ([int]($w * 0.14)), ([int]($h * 0.14))
$p4Bmp = New-Object System.Drawing.Bitmap $p4Rect.Width, $p4Rect.Height
$g7 = [System.Drawing.Graphics]::FromImage($p4Bmp)
$g7.DrawImage($src, (New-Object System.Drawing.Rectangle 0, 0, $p4Rect.Width, $p4Rect.Height), $p4Rect, [System.Drawing.GraphicsUnit]::Pixel)
$g7.Dispose()
$p4Bmp.Save("c:\Users\info\Desktop\somoscoders\public\images\program_ux_ui.png", [System.Drawing.Imaging.ImageFormat]::Png)
$p4Bmp.Dispose()

$src.Dispose()
Write-Host "All components extracted successfully from user provided assets!"
