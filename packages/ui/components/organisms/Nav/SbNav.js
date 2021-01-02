import { forwardProps } from '@nujek/shared'
import TkContent from '~/components/molecules/TkContent'

export default {
  name: 'BlokContent',
  functional: true,
  props: ['blok'],
  render(h, context) {
    return h(TkContent, {
      props: forwardProps(context.props.blok)
    })
  }
}
