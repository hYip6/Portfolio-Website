import { useEffect } from 'react'

export default function Resume() {
  useEffect(() => {
    window.location.replace(`${import.meta.env.BASE_URL}resume.pdf`)
  }, [])

  return null
}
