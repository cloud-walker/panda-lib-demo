import {type Meta, type StoryObj} from '@storybook/react'
import {Button} from './Button'

export default {} satisfies Meta

export const BaseStory = {
  render() {
    return <Button>Click me</Button>
  },
} satisfies StoryObj
