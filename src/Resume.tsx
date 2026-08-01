import { useEffect } from 'react'

export default function Resume() {
  useEffect(() => {
    window.location.replace('/resume.pdf')
  }, [])

  return null
}
