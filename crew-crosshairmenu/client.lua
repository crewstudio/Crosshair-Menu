local isMenuOpen = false
local currentCrosshair = Config.DefaultCrosshair
local playerSettings = {
    url = Config.DefaultCrosshair,
    size = Config.Settings.crosshairSize,
    opacity = Config.Settings.crosshairOpacity,
    rotation = Config.Settings.crosshairRotation
}

local savedSettings = nil
local isCrosshairEnabled = true

Citizen.CreateThread(function()
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
end)

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

    if savedSettings then
        playerSettings = deepCopy(savedSettings)
    end

    SendNUIMessage({
        action = "openMenu",
        url = playerSettings.url,
        settings = playerSettings,
        presets = Config.Presets
    })
end

function closeCrosshairMenu()
    isMenuOpen = false
    SetNuiFocus(false, false)
    SendNUIMessage({ action = "closeMenu" })

    savedSettings = deepCopy(playerSettings)
end

function deepCopy(orig)
    local orig_type = type(orig)
    local copy
    if orig_type == 'table' then
        copy = {}
        for orig_key, orig_value in pairs(orig) do
            copy[orig_key] = deepCopy(orig_value)
        end
    else
        copy = orig
    end
    return copy
end

function setCrosshairVisibility(visible)
    local shouldShow = visible
    
    if not isCrosshairEnabled then
        shouldShow = false
    end
    
    SendNUIMessage({
        action = "showCrosshair",
        url = playerSettings.url,
        visible = shouldShow,
        settings = playerSettings
    })
end

function updateCrosshairSettings(settings)
    for k, v in pairs(settings) do
        playerSettings[k] = v
    end

    if settings.url then
        currentCrosshair = settings.url
    end

    SendNUIMessage({
        action = "showCrosshair",
        url = playerSettings.url,
        visible = isCrosshairEnabled,
        settings = playerSettings
    })

    Citizen.Wait(50)

    savedSettings = deepCopy(playerSettings)

    TriggerServerEvent('crosshair:saveSettings', playerSettings)
end

RegisterNUICallback('setCrosshair', function(data, cb)
    updateCrosshairSettings(data)

    savedSettings = deepCopy(playerSettings)
    cb({})
end)

RegisterNUICallback('closeMenu', function(data, cb)
    closeCrosshairMenu()
    cb({})
end)

RegisterNUICallback('saveSettings', function(data, cb)
    updateCrosshairSettings(data.settings)
    savedSettings = deepCopy(playerSettings)
    cb({})
end)

RegisterCommand('crosskapat', function()
    isCrosshairEnabled = false
    setCrosshairVisibility(false)
    TriggerEvent('chat:addMessage', {
        color = {255, 0, 0},
        multiline = true,
        args = {"[Crosshair]", "Crosshair kapatıldı."}
    })
end, false)

RegisterCommand('crossac', function()
    isCrosshairEnabled = true
    setCrosshairVisibility(true)
    
    -- Chat mesajı gönder
    TriggerEvent('chat:addMessage', {
        color = {0, 255, 0},
        multiline = true,
        args = {"[Crosshair]", "Crosshair açıldı."}
    })
end, false)

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
        savedSettings = deepCopy(playerSettings)
    else
        playerSettings = {
            url = Config.DefaultCrosshair,
            size = Config.Settings.crosshairSize,
            opacity = Config.Settings.crosshairOpacity,
            rotation = Config.Settings.crosshairRotation
        }
        currentCrosshair = Config.DefaultCrosshair
        savedSettings = deepCopy(playerSettings)
    end

    setCrosshairVisibility(true)
end)

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(500)
        
        local playerPed = PlayerPedId()
        local shouldShowCrosshair = true

        if IsPlayerDead(PlayerId()) or IsPedInAnyVehicle(playerPed, false) or IsPauseMenuActive() then
            shouldShowCrosshair = false
        end
        if not isCrosshairEnabled then
            shouldShowCrosshair = false
        end
        
        setCrosshairVisibility(shouldShowCrosshair)
    end
end)