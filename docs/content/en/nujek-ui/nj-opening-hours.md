---
title: <NjOpeningHours>
description: ''
category: Nujek Ui
position: 2
---

This component makes it easier to display opening times.


## Examples

```html
<NjOpeningHours :days="[
    {
      name: 'Monday',
      times: [
        {
          end: '12:00',
          start: '09:00'
        }
      ]
    },
    {
      name: 'Tuesday',
      times: [
        {
          end: '12:00',
          start: '09:00'
        }
      ]
    },
    {
      name: 'Wednesday',
      times: [
        {
          end: '18:00',
          start: '09:00'
        }
      ]
    },
    {
      name: 'Thursday',
      times: []
    },
    {
      name: 'Friday',
      times: [
        {
          end: '12:00',
          start: '09:00'
        }
      ]
    },
    {
      name: 'Saturday',
      times: [
        {
          end: '12:00',
          start: '09:00'
        }
      ]
    },
    {
      name: 'Sunday',
      times: [
        {
          end: '12:00',
          start: '09:00'
        }
      ]
    }
  ]"
/>
```

## Props

- `days`
  - Type: `Array`
  - Default: `[]`
- `locale`
  - Type: `String`
  - Default: `de-DE`
- `weekday`
  - Type: `String`
  - Default: `'short'`
- `pairing`
  - Type: `String`
  - Default: `null`
- `showEmptyDay`
  - Type: Boolean
  - Default: false
- placeholder
  - Type: String,
  - default: `'—'`
- timeDivider
  - Type: String,
  - default: ` - `
- showCurrentDay
  - Type: Boolean,
  - default: `false`
- disabled
  - Type: Boolean,
  - default: `false`

## Slots

| Slot    | Description                                                                    | ScopedSlots |
| ------- | ------------------------------------------------------------------------------ | ------------ |
| disabled | Replace template for disabled opening hours. |
| day | Replace template for days | name
| time | Replace template for times | time
