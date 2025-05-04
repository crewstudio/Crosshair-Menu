local playersSettings = {}

AddEventHandler('onResourceStart', function(resourceName)
    if GetCurrentResourceName() ~= resourceName then return end
    loadAllPlayerSettings()
end)

function loadAllPlayerSettings()
    local settingsString = GetResourceKvpString("crosshair_all_settings")
    if settingsString then
        playersSettings = json.decode(settingsString) or {}
        print("[Crosshair] Loaded settings for " .. getTableSize(playersSettings) .. " players")
    else
        playersSettings = {}
        print("[Crosshair] No saved settings found")
    end
end

function saveAllPlayerSettings()
    SetResourceKvp("crosshair_all_settings", json.encode(playersSettings))
    print("[Crosshair] Saved settings for " .. getTableSize(playersSettings) .. " players")
end

function getTableSize(t)
    local count = 0
    for _ in pairs(t) do count = count + 1 end
    return count
end

RegisterNetEvent('crosshair:checkPermission')
AddEventHandler('crosshair:checkPermission', function()
    local src = source
    if not Config.RequirePermission then
        TriggerClientEvent('crosshair:permissionGranted', src)
        return
    end

    if IsPlayerAceAllowed(src, Config.Permission) then
        TriggerClientEvent('crosshair:permissionGranted', src)
    else
        TriggerClientEvent('crosshair:permissionDenied', src)
    end
end)

RegisterNetEvent('crosshair:loadSettings')
AddEventHandler('crosshair:loadSettings', function()
    local src = source
    local playerId = GetPlayerIdentifier(src, 0)

    if playersSettings[playerId] then
        TriggerClientEvent('crosshair:loadSettings', src, playersSettings[playerId])
    else

        local defaultSettings = {
            url = Config.DefaultCrosshair,
            size = Config.Settings.crosshairSize,
            opacity = Config.Settings.crosshairOpacity,
            rotation = Config.Settings.crosshairRotation
        }
        TriggerClientEvent('crosshair:loadSettings', src, defaultSettings)
    end
end)

RegisterNetEvent('crosshair:saveSettings')
AddEventHandler('crosshair:saveSettings', function(settings)
    local src = source
    local playerId = GetPlayerIdentifier(src, 0)

    if not settings or type(settings) ~= "table" then
        return
    end

    playersSettings[playerId] = {
        url = settings.url or Config.DefaultCrosshair,
        size = settings.size or Config.Settings.crosshairSize,
        opacity = settings.opacity or Config.Settings.crosshairOpacity,
        rotation = settings.rotation or Config.Settings.crosshairRotation
    }

    saveAllPlayerSettings()
end)

AddEventHandler('playerDropped', function(reason)
    local src = source
    local playerId = GetPlayerIdentifier(src, 0)
    

    if playersSettings[playerId] then
        saveAllPlayerSettings()
    end
end)

AddEventHandler('onResourceStop', function(resourceName)
    if GetCurrentResourceName() ~= resourceName then return end
    
    saveAllPlayerSettings()
    print("[Crosshair] Settings saved on resource stop")
end)

RegisterCommand('reloadcrosshair', function(source, args, rawCommand)
    if source ~= 0 and not IsPlayerAceAllowed(source, 'command.reloadcrosshair') then
        TriggerClientEvent('chat:addMessage', source, {
            color = {255, 0, 0},
            args = {"[Crosshair]", "You don't have permission to use this command."}
        })
        return
    end

    loadAllPlayerSettings()

    TriggerClientEvent('crosshair:loadSettings', -1)
    
    if source == 0 then
        print("[Crosshair] Settings reloaded for all players")
    else
        TriggerClientEvent('chat:addMessage', source, {
            color = {0, 255, 0},
            args = {"[Crosshair]", "Settings reloaded for all players."}
        })
    end
end, false)