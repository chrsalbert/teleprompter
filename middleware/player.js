import customId from 'custom-id'
export default function ({ app, route, redirect }) {
    const setCookie = () => {
        app.$cookies.set('playerId', customId({}), {
            path: '/',
            maxAge: 60 * 60 * 24
        })
        playerId = app.$cookies.get('playerId', { fromRes: true })
    }

    let playerId = app.$cookies.get('playerId')
    if (!playerId) setCookie()
    if (route.params.id !== undefined && route.params.id === playerId) return
    if (playerId !== undefined) return redirect(`/player/${playerId}`)
    return redirect(`/player/${playerId}`)
}