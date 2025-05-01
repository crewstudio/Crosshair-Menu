local isMenuOpen = false
local currentCrosshair = Config.DefaultCrosshair
local playerSettings = {
    url = Config.DefaultCrosshair,
    size = Config.Settings.crosshairSize,
    opacity = Config.Settings.crosshairOpacity,
    rotation = Config.Settings.crosshairRotation,
    color = Config.Settings.crosshairColor
}

Citizen.CreateThread(function()
    -- Wait for the player to be ready
    while not NetworkIsPlayerActive(PlayerId()) do
        Citizen.Wait(100)
    end

    TriggerServerEvent('crosshair:loadSettings')

    RegisterKeyMapping(Config.Command, 'Open Crosshair Menu', 'keyboard', Config.OpenKey)

    RegisterCommand(Config.Command, function()
        toggleCrosshairMenu()
    end, false)

    Citizen.Wait(1000) 
    setCrosshairVisibility(true)

    if Config.Debug then
        print("[Crosshair] Client initialized")
    end
end)

-- Toggle the crosshair menu
function toggleCrosshairMenu()
    if isMenuOpen then
        closeCrosshairMenu()
    else
        openCrosshairMenu()
    end
end

function openCrosshairMenu()
    if Config.RequirePermission then
        TriggerServerEvent('crosshair:checkPermission')
        return
    end

    isMenuOpen = true
    SetNuiFocus(true, true)

    SendNUIMessage({
        action = "openMenu",
        url = playerSettings.url,
        settings = playerSettings,
        presets = Config.Presets
    })

    if Config.Debug then
        print("[Crosshair] Menu opened")
    end
end

function closeCrosshairMenu()
    isMenuOpen = false
    SetNuiFocus(false, false)
    SendNUIMessage({ action = "closeMenu" })

    if Config.Debug then
        print("[Crosshair] Menu closed")
    end
end

function setCrosshairVisibility(visible)
    -- Debug için
    if Config.Debug then
        print("[Crosshair] Setting visibility:", visible, "URL:", playerSettings.url)
    end
    
    SendNUIMessage({
        action = "showCrosshair",
        url = playerSettings.url,
        visible = visible,
        settings = playerSettings  -- Tüm ayarları gönder
    })
    
    Citizen.Wait(50)
end

function updateCrosshairSettings(settings)
    -- Debug için
    if Config.Debug then
        print("[Crosshair] Updating settings with:", json.encode(settings))
    end
    
    for k, v in pairs(settings) do
        playerSettings[k] = v
    end

    if settings.url then
        currentCrosshair = settings.url
    end

    SendNUIMessage({
        action = "showCrosshair",
        url = playerSettings.url,
        visible = true,
        settings = playerSettings
    })

    Citizen.Wait(50)

    TriggerServerEvent('crosshair:saveSettings', playerSettings)

    if Config.Debug then
        print("[Crosshair] Settings updated:", json.encode(playerSettings))
    end
end

RegisterNUICallback('setCrosshair', function(data, cb)
    updateCrosshairSettings(data)
    cb({})
end)

RegisterNUICallback('closeMenu', function(data, cb)
    closeCrosshairMenu()
    cb({})
end)

RegisterNUICallback('saveSettings', function(data, cb)
    updateCrosshairSettings(data.settings)
    cb({})
end)

RegisterNetEvent('crosshair:permissionGranted')
AddEventHandler('crosshair:permissionGranted', function()
    openCrosshairMenu()
end)

RegisterNetEvent('crosshair:permissionDenied')
AddEventHandler('crosshair:permissionDenied', function()
    TriggerEvent('chat:addMessage', {
        color = {255, 0, 0},
        multiline = true,
        args = {"[Crosshair]", "You don't have permission to use this feature."}
    })
end)

RegisterNetEvent('crosshair:loadSettings')
AddEventHandler('crosshair:loadSettings', function(settings)
    if settings then
        playerSettings = settings
        currentCrosshair = settings.url or Config.DefaultCrosshair
    else
        playerSettings = {
            url = Config.DefaultCrosshair,
            size = Config.Settings.crosshairSize,
            opacity = Config.Settings.crosshairOpacity,
            rotation = Config.Settings.crosshairRotation,
            color = Config.Settings.crosshairColor
        }
        currentCrosshair = Config.DefaultCrosshair
    end

    setCrosshairVisibility(true)

    if Config.Debug then
        print("[Crosshair] Settings loaded:", json.encode(settings))
    end
end)

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(500)
        
        local playerPed = PlayerPedId()
        if IsPlayerDead(PlayerId()) or IsPedInAnyVehicle(playerPed, false) or IsPauseMenuActive() then
            setCrosshairVisibility(false)
        else
            setCrosshairVisibility(true)
        end
    end
end)