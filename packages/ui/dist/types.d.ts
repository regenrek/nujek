import Vue, { PropOptions } from 'vue';

type ComponentName =
  | 'NjSection'
  | 'NjBurger'
  | 'NjImage'
  | 'SbImage'
  | 'SbRichtext'
  | 'NjNav'
  | 'NjSidebar'
  | 'SbGrid'
  | 'NjVideoBackground'

type CustomProp = {
  [key: string]:
    | undefined
    | string
    | number
    | boolean
    | Array<CustomProp>
    | (() => CustomProp)
    | CustomProp
}

type VTComponent = typeof Vue & {
  options?: {
    props?: {
      [key: string]: PropOptions
    },
    name: ComponentName
  }
}

export { CustomProp, VTComponent };
