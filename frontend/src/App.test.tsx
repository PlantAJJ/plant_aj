import { renderToString } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the setup heading', () => {
    const html = renderToString(<App />)

    expect(html).toContain('Plant AJ setup')
  })
})
