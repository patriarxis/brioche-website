<template>
  <div id="schedule">
    <div id="day-names">
      <span v-bind:key="day.id" v-for="day in days">{{ day.name }}</span>
    </div>
    <div id="weeks" :key="week.id" v-for="week in weeks">
      <div id="day" :class="{ 'inactive-day': !day.isDayOfMonth }"
      :key="day.id"
      v-for="day in week.days">
        <span>{{ day.date }}</span>
        <div :class="{ 'open': day.isOpen, 'closed': !day.isOpen }"></div>
      </div>
    </div>
    <div id="explanatory">
      <div>
        <div class="open"></div>
        <span>open</span>
      </div>
      <div>
        <div class="closed"></div>
        <span>closed</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Schedule',
  data () {
    return {
      days: [
        {
          id: 1,
          name: 'Su'
        },
        {
          id: 2,
          name: 'Mo'
        },
        {
          id: 3,
          name: 'Tu'
        },
        {
          id: 4,
          name: 'We'
        },
        {
          id: 5,
          name: 'Th'
        },
        {
          id: 6,
          name: 'Fr'
        },
        {
          id: 7,
          name: 'Sa'
        }
      ],
      weeks: [
        {
          id: 1,
          days: [
            {
              id: 1,
              date: calendar[0][0],
              isDayOfMonth: belongsToMonth(0, 0),
              isOpen: false
            },
            {
              id: 2,
              date: calendar[0][1],
              isDayOfMonth: belongsToMonth(0, 1),
              isOpen: true
            },
            {
              id: 3,
              date: calendar[0][2],
              isDayOfMonth: belongsToMonth(0, 2),
              isOpen: true
            },
            {
              id: 4,
              date: calendar[0][3],
              isDayOfMonth: belongsToMonth(0, 3),
              isOpen: true
            },
            {
              id: 5,
              date: calendar[0][4],
              isDayOfMonth: belongsToMonth(0, 4),
              isOpen: true
            },
            {
              id: 6,
              date: calendar[0][5],
              isDayOfMonth: belongsToMonth(0, 5),
              isOpen: true
            },
            {
              id: 7,
              date: calendar[0][6],
              isDayOfMonth: true,
              isOpen: false
            }
          ]
        },
        {
          id: 2,
          days: [
            {
              id: 1,
              date: calendar[1][0],
              isDayOfMonth: true,
              isOpen: false
            },
            {
              id: 2,
              date: calendar[1][1],
              isDayOfMonth: true,
              isOpen: true
            },
            {
              id: 3,
              date: calendar[1][2],
              isDayOfMonth: true,
              isOpen: true
            },
            {
              id: 4,
              date: calendar[1][3],
              isDayOfMonth: true,
              isOpen: true
            },
            {
              id: 5,
              date: calendar[1][4],
              isDayOfMonth: true,
              isOpen: true
            },
            {
              id: 6,
              date: calendar[1][5],
              isDayOfMonth: true,
              isOpen: true
            },
            {
              id: 7,
              date: calendar[1][6],
              isDayOfMonth: true,
              isOpen: false
            }
          ]
        },
        {
          id: 3,
          days: [
            {
              id: 1,
              date: calendar[2][0],
              isDayOfMonth: true,
              isOpen: false
            },
            {
              id: 2,
              date: calendar[2][1],
              isDayOfMonth: true,
              isOpen: true
            },
            {
              id: 3,
              date: calendar[2][2],
              isDayOfMonth: true,
              isOpen: true
            },
            {
              id: 4,
              date: calendar[2][3],
              isDayOfMonth: true,
              isOpen: true
            },
            {
              id: 5,
              date: calendar[2][4],
              isDayOfMonth: true,
              isOpen: true
            },
            {
              id: 6,
              date: calendar[2][5],
              isDayOfMonth: true,
              isOpen: true
            },
            {
              id: 7,
              date: calendar[2][6],
              isDayOfMonth: true,
              isOpen: false
            }
          ]
        },
        {
          id: 4,
          days: [
            {
              id: 1,
              date: calendar[3][0],
              isDayOfMonth: true,
              isOpen: false
            },
            {
              id: 2,
              date: calendar[3][1],
              isDayOfMonth: true,
              isOpen: true
            },
            {
              id: 3,
              date: calendar[3][2],
              isDayOfMonth: true,
              isOpen: true
            },
            {
              id: 4,
              date: calendar[3][3],
              isDayOfMonth: true,
              isOpen: true
            },
            {
              id: 5,
              date: calendar[3][4],
              isDayOfMonth: true,
              isOpen: true
            },
            {
              id: 6,
              date: calendar[3][5],
              isDayOfMonth: true,
              isOpen: true
            },
            {
              id: 7,
              date: calendar[3][6],
              isDayOfMonth: true,
              isOpen: false
            }
          ]
        },
        {
          id: 5,
          days: [
            {
              id: 1,
              date: calendar[4][0],
              isDayOfMonth: belongsToMonth(4, 0),
              isOpen: false
            },
            {
              id: 2,
              date: calendar[4][1],
              isDayOfMonth: belongsToMonth(4, 1),
              isOpen: true
            },
            {
              id: 3,
              date: calendar[4][2],
              isDayOfMonth: belongsToMonth(4, 2),
              isOpen: true
            },
            {
              id: 4,
              date: calendar[4][3],
              isDayOfMonth: belongsToMonth(4, 3),
              isOpen: true
            },
            {
              id: 5,
              date: calendar[4][4],
              isDayOfMonth: belongsToMonth(4, 4),
              isOpen: true
            },
            {
              id: 6,
              date: calendar[4][5],
              isDayOfMonth: belongsToMonth(4, 5),
              isOpen: true
            },
            {
              id: 7,
              date: calendar[4][6],
              isDayOfMonth: belongsToMonth(4, 6),
              isOpen: false
            }
          ]
        },
        {
          id: 6,
          days: [
            {
              id: 1,
              date: calendar[5][0],
              isDayOfMonth: belongsToMonth(5, 0),
              isOpen: false
            },
            {
              id: 2,
              date: calendar[5][1],
              isDayOfMonth: belongsToMonth(5, 1),
              isOpen: true
            },
            {
              id: 3,
              date: calendar[5][2],
              isDayOfMonth: false,
              isOpen: true
            },
            {
              id: 4,
              date: calendar[5][3],
              isDayOfMonth: false,
              isOpen: true
            },
            {
              id: 5,
              date: calendar[5][4],
              isDayOfMonth: false,
              isOpen: true
            },
            {
              id: 6,
              date: calendar[5][5],
              isDayOfMonth: false,
              isOpen: true
            },
            {
              id: 7,
              date: calendar[5][6],
              isDayOfMonth: false,
              isOpen: false
            }
          ]
        }
      ]
    }
  }
}

var date = new Date()
var yyyy = date.getFullYear()
var mm = date.getMonth()
var firstDayOfMonth = new Date(yyyy, mm, 1).getDay()
var lastDateOfMonth = new Date(yyyy, mm + 1, 0).getDate()
var lastDateOfPreviousMonth = new Date(yyyy, mm, 0).getDate()
var datesOfMonth = 1
var remainingDays = 1
var i, j // week, day

/* Create 2d array */
var calendar = new Array(5)
for (i = 0; i < 6; i++) {
  calendar[i] = new Array(7)
}

for (j = firstDayOfMonth - 1; j >= 0; j--) {
  calendar[0][j] = lastDateOfPreviousMonth--
}

for (j = firstDayOfMonth; j < 7; j++) {
  calendar[0][j] = datesOfMonth++
}

for (i = 1; i <= 3; i++) {
  for (j = 0; j < 7; j++) {
    calendar[i][j] = datesOfMonth++
  }
}

for (i = 4; i < 6; i++) {
  for (j = 0; j < 7; j++) {
    if (datesOfMonth <= lastDateOfMonth) {
      calendar[i][j] = datesOfMonth++
    } else {
      calendar[i][j] = remainingDays++
    }
  }
}

function belongsToMonth (i, j) {
  if (i === 0) {
    if (Math.floor(calendar[i][j] / 10) !== 0) {
      return false
    }
    return true
  } else {
    if (Math.floor(calendar[i][j] / 10) === 0) {
      return false
    }
    return true
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables.scss";

#schedule {
  display: grid;
  width: 90%;
  height: 100%;

  #day-names, #weeks {
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    place-items: center;
  }

  #day-names {
    font-weight: 900;

    height: 40px;
  }

  #weeks {
    height: 40px;

    border-bottom: 1px dashed $secondary-color;

    transition: .2s ease;

    #day {
      display: grid;
      place-items: center;

      width: 60%;
      height: 80%;

      border-radius: 5px;

      transition: .2s ease;

      div {
        width: 5px;
        height: 5px;

        border-radius: 100%;

        transition: .2s ease;
      }

      /* &:hover {
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
      } */
    }

    /* &:hover {
      height: 50px;
    }

    &:hover #day div {
      width: 7px;
      height: 7px;
    } */
  }

  #explanatory {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    place-self: center;

    width: 80%;
    height: 30px;

    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      place-items: center;

      div {
        display: block;

        width: 5px;
        height: 5px;
        border-radius: 100%;
      }
    }
  }

  .inactive-day {
    opacity: .3;

    div {
      background-color: $secondary-color;
    }
  }

  .open {
    background-color: green;
  }

  .closed {
    background-color: red;
  }
}
</style>
