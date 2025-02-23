async function pm2AppAction(appName, action){
    await fetch(`/pm2dashboard/api/apps/${appName}/${action}`, { method: 'POST'})
    location.reload();
}