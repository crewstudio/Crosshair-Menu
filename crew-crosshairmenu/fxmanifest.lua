fx_version 'cerulean'
game 'gta5'

name 'Crew Studio - Crosshair Menu'
author 'crewstudio'
description 'CrosshairMenu'
version '1.0.0'

ui_page 'html/ui.html'

client_scripts {
    'config.lua',
    'client.lua'
}

server_scripts {
    'config.lua',
    'server.lua'
}

files {
    'html/ui.html',
    'html/css/style.css',
    'html/js/app.js',
    'html/fonts/*.woff2',
    'html/images/*.png',
    'html/images/*.svg'
}

dependencies {
    '/onesync'
}