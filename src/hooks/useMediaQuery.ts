import { useEffect, useState } from 'react'

const isBrowser = typeof window !== 'undefined'
const useMediaQuery = (query: string, defaultState = false) => {
  const [state, setState] = useState(
    isBrowser ? () => window.matchMedia(query).matches : defaultState
  )

  useEffect(() => {
    let mounted = true
    const mql = window.matchMedia(query)
    const onChange = () => {
      if (!mounted) {
        return
      }
      setState(!!mql.matches)
    }

    mql.addListener(onChange)
    setState(mql.matches)

    return () => {
      mounted = false
      mql.removeListener(onChange)
    }
  }, [query])

  return state
}

export default useMediaQuery
