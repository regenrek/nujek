<template>
  <div v-if="days && days.length">
    <div v-if="disabled" class="schedule">
      <!-- disabled slot -->
      <slot name="disabled">
        {{ placeholder }}
      </slot>
    </div>
    <ul v-else class="schedule">
      <li v-for="(day, index) in formattedDays" :key="index">
        <!-- day slot -->
        <slot name="day" v-bind="{ name: day.name }">
          <strong>
            <template v-if="pairing">
              {{
                day.name.length === 2 ? day.name.join('-') : day.name.join(', ')
              }}:
            </template>
            <template v-else>{{ day.name }}: </template>
          </strong>
        </slot>

        <template v-if="day.times || showEmptyDay">
          <!-- time slot -->
          <slot name="time" v-bind="{ time: day.times, placeholder }">
            <span v-if="day.times">
              {{ day.times.join(', ') }}
            </span>
            <span v-else>
              {{ placeholder }}
            </span>
          </slot>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  getWeekDaysForLocale,
  groupBy,
  today,
  daysValidator,
  sequentialDays
} from './helpers'

const findTimeSlot = (arr, item, key, index) =>
  arr.find((group) => {
    const hasKey = group.some(field => field[key] === item[key])
    // Check if current group items are sequent
    const indexSeqence = group
      .map(field => field[index])
      .concat(item[index])
      .join('')
    const isSequent = sequentialDays(indexSeqence)
    return hasKey && isSequent
  })

export default {
  name: 'StoryblokSchedule',
  props: {
    days: {
      type: Array,
      validator: daysValidator,
      required: true
    },
    /**
     * Name of locale, eg. en-GB, default de-DE
     */
    locale: {
      type: String,
      default: 'de-DE'
    },
    /**
     * Formart of weekday short/long
     */
    weekday: {
      type: String,
      validator: value => ['short', 'long'].includes(value),
      default: 'short'
    },
    pairing: {
      type: String,
      validator: value =>
        ['groups', 'timerange'].includes(value) || value === null,
      default: null
    },
    showEmptyDay: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '—'
    },
    timeDivider: {
      type: String,
      default: ' - '
    },
    showCurrentDay: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formattedDays () {
      // Map day names with defined locale
      let days = this.days.map((day, index) => {
        const name = this.getDayName(index) || day.name
        const { times } = day
        const hasTimes = times && times.length > 0

        return {
          name,
          index,
          times: hasTimes
            ? times.map(time => time.start + this.timeDivider + time.end)
            : null
        }
      })

      // Show only current day
      if (this.showCurrentDay) {
        days = days.filter((_, index) => index === today)
      }

      // Hide empty days
      if (!this.showEmptyDay) {
        days = this.hideEmpty(days)
      }

      // Days pairing
      if (this.pairing === 'groups') {
        days = this.pairDays(days)
      }

      if (this.pairing === 'timerange') {
        days = this.pairByTimerange(days)
      }

      return days
    },
    getDayName () {
      return number => getWeekDaysForLocale(this.locale, this.weekday)[number]
    }
  },
  methods: {
    hideEmpty (days) {
      return days.filter(day => day.times)
    },
    pairDays (days) {
      const groupByTime = groupBy('times')
      const groups = groupByTime(days)

      return Object.keys(groups).map((key) => {
        key = key === 'null' ? null : key

        const daySequence = groups[key].map(item => item.index).join('')
        const dayNames = groups[key].map(item => item.name)
        const times = key && key.split(',')
        let name = dayNames

        if (sequentialDays(daySequence)) {
          const firstDayName = dayNames[0]
          const lastDayName = dayNames[dayNames.length - 1]
          name = [firstDayName, lastDayName]
        }

        return {
          name,
          times
        }
      })
    },
    pairByTimerange (days) {
      const daysAndTimes = days.map((item) => {
        return Object.assign(item, {
          times: item.times ? item.times.join(', ') : this.placeholder
        })
      })

      const key = 'times'
      const index = 'index'

      const groups = daysAndTimes.reduce((result, day) => {
        // Check if array with day is already exists
        const hasSlot = result.some(group =>
          group.some(item => item[key] === day[key])
        )

        if (hasSlot) {
          // Find group which includes day
          const matchedSlot = findTimeSlot(result, day, key, index)
          if (matchedSlot) {
            matchedSlot.push(day)
          } else {
            result.push([day])
          }
        }

        if (!hasSlot) {
          result.push([day])
        }

        return result
      }, [])

      return groups.map(group => this.pairDays(group)).flat()
    }
  }
}
</script>
