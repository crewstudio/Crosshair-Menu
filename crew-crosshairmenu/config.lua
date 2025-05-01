Config = {}

Config.Enabled = true

Config.OpenKey = 167  -- F6

-- Default crosshair Burasıdır . Oyuncu oyuna girdiğinde açılacak ilk crosshair
Config.DefaultCrosshair = "https://images-ext-1.discordapp.net/external/aXp16Lq0czbY99QKBn7EMqMEJkDY8cuSqwYKVdYme_M/https/cdn-icons-png.flaticon.com/128/4018/4018979.png?format=webp&quality=lossless&width=107&height=107"

-- Menüyü açma komutu
Config.Command = "crosshair"

-- false kalsın 
Config.RequirePermission = false

Config.Permission = "crosshair.use"

Config.Debug = false

Config.Presets = {
    {
        name = "Default",
        url = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PGxpbmUgeDE9IjE2IiB5MT0iMCIgeDI9IjE2IiB5Mj0iMzIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIwIiB5MT0iMTYiIHgyPSIzMiIgeTI9IjE2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4="
    },
    {
        name = "Dot",
        url = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMiIgZmlsbD0id2hpdGUiLz48L3N2Zz4="
    },
    {
        name = "Circle",
        url = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+"
    },
    {
        name = "Sniper",
        url = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjE2IiB5MT0iOCIgeDI9IjE2IiB5Mj0iMTQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjxsaW5lIHgxPSIxNiIgeTE9IjE4IiB4Mj0iMTYiIHkyPSIyNCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjgiIHkxPSIxNiIgeDI9IjE0IiB5Mj0iMTYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjxsaW5lIHgxPSIxOCIgeTE9IjE2IiB4Mj0iMjQiIHkyPSIxNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+"
    },
    {
        name = "Cross",
        url = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGxpbmUgeDE9IjE2IiB5MT0iOCIgeDI9IjE2IiB5Mj0iMjQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjxsaW5lIHgxPSI4IiB5MT0iMTYiIHgyPSIyNCIgeTI9IjE2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4="
    },
    {
        name = "Square",
        url = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHJlY3QgeD0iMTIiIHk9IjEyIiB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4="
    }
}

-- Player settings that will be saved
Config.Settings = {
    crosshairUrl = Config.DefaultCrosshair,
    crosshairSize = 32,
    crosshairOpacity = 100,
    crosshairRotation = 0,
    crosshairColor = "#ffffff"
}