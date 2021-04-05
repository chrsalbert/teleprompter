import customId from 'custom-id'

export default function ({ app, route, redirect }) {
  const isCookiePlayerIdInRoute = (playerId) =>
    route.params.id !== undefined && route.params.id === playerId

  const hasCookiePlayerId = () => !!getCookiePlayerId()

  const getCookiePlayerId = () => app.$cookies.get('playerId')

  const setCookiePlayerId = () =>
    app.$cookies.set('playerId', customId({}), {
      path: '/',
      maxAge: 60 * 60 * 24,
    })

  const redirectToPlayer = () => {
    if (!isCookiePlayerIdInRoute(getCookiePlayerId())) {
      redirect(`/player/${getCookiePlayerId()}`)
    }
  }

  if (!hasCookiePlayerId()) {
    setCookiePlayerId()
  }

  redirectToPlayer()
}
