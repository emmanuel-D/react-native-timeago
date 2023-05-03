import React from 'react'
import { Text } from 'react-native'
import TestRenderer from 'react-test-renderer'
import dayjs from 'dayjs'
import TimeAgo from '../TimeAgo'

describe('TimeAgo', () => {
  test('Renders', () => {
    const timestamp = dayjs().subtract(10, 'days')
    const renderer = TestRenderer.create(
      <TimeAgo time={timestamp} />
    )
    const instance = renderer.root
    expect(instance.findByType(Text).props.children).toEqual('10 days ago')
    renderer.unmount()
  })
})
