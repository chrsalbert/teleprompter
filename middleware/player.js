import customId from 'custom-id'
export default function ({ app, route, redirect }) {
    let playerId = app.$cookies.get('playerId')
    if (route.params.id !== undefined && route.params.id === playerId) return
    if (playerId !== undefined) return redirect(`/player/${playerId}`)
    playerId = customId({})
    app.$cookies.set('playerId', playerId, {
        path: '/',
        maxAge: 60 * 60 * 24
    })
    if (app.$cookies.get('playerId')) return redirect(`/player/${playerId}`)
    return redirect('/errors/noplayeridcookie')
}