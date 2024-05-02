import { render, screen } from '@testing-library/react'
import VimStatusBarBottom from './VimStatusBarBottom'

describe('VimStatusBarBottom', () => {
  beforeAll(() => {
    vitest.useFakeTimers().setSystemTime(new Date('December 09, 1987 15:24:00'))
  })

  afterAll(() => {
    vitest.useRealTimers()
  })

  test('displays the current time', () => {
    render(<VimStatusBarBottom />)

    expect(screen.getByText(/3:24 PM/))
  })
})
