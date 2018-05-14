class Calendar {
  constructor(inst) {
    this.$inst = inst
    this.$now  = new Date()
    this.$week_txt = ['日', '一', '二', '三', '四', '五', '六']
    this.$data = inst.data.calendar_data || {}
    this.__init()
    this.__calculate_month()
  }

  __fn_ (n){
    n = n.toString()
  	return n[1] ? n : '0' + n
  }

  __is_sameday(prev, next) {
    return prev.year == next.year && 
           prev.month == next.month && 
           prev.day == next.day
  }

  __is_small_eq_than(source, target) {
    source = new Date(source.year,source.month-1,source.day)
    target = new Date(target.year,target.month-1,target.day)
    return source.getTime() - target.getTime() >= 0
  }

  __date_to_obj(date) {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      week: date.getDay()
    }
  }

  __is_disabled(date) {
    for (let j = 0, len = this.$data.disabled.length; j < len; j++) {
      if (this.__is_sameday(this.$data.disabled[j], date)) {
        return true
      }
    }
  }

  __is_highlighted(date) {
    for (let j = 0, len = this.$data.highlighted.length; j < len; j++) {
      if (this.__is_sameday(this.$data.highlighted[j], date)) {
        return true
      }
    }
  }

  __init() {
    this.$data.today = this.__date_to_obj(this.$now)
    if (!this.$data.disabled) {
      this.$data.disabled = []
    }
    if (!this.$data.highlighted) {
      this.$data.highlighted = []
    }
    if (!this.$data.cursor) {
      this.$data.cursor = this.$data.today
    }
    if (!this.$data.validDays) {
      this.$data.validDays = 365
    }
	this.__bind()
  }

  __bind() {
	$("body").on("click",(event)=>{
		let target 		= $(event.target)
		let bindtap 	= target.attr("bindtap")
		if (!bindtap) {
			let attrs = ['onPrevMonth','onNextMonth','onPickDate']
			for(let i=0,len=attrs.length;i<len;i++) {
				let item 	= attrs[i]
				let found 	= target.parents(`[bindtap=${item}]`)
				if (found.length > 0) {
					bindtap = item
					break
				}
			}
		}
		if (bindtap == "onPrevMonth") {
			this.prevMonth()
		} else if (bindtap == "onNextMonth") {
			this.nextMonth()
		} else if (bindtap == "onPickDate") {
			let index = target.attr("data-index")
			this.setChoosed(this.$inst.data.calendar_data.days[index])
			if (this.$inst.onDateChanged) {
				this.$inst.onDateChanged()
			}
		}
	})
	$("body").on("touchstart", (event)=>{
		let target 		= $(event.currentTarget)
		let touchstart 	= target.attr('bindtouchstart')
		if (!touchstart) {
			let found   = target.parents("[bindtouchstart=onCalendarTouch]")
			if (found.length > 0) {
				target  	= found
				touchstart 	= "onCalendarTouch"
			}
		}
		if (touchstart == "onCalendarTouch") {
			event.preventDefault()
			this.$touch_start_x = event.touches[0].pageX
			this.$touch_moved   = false
		}
	})
	$("body").on("touchmove", (event)=>{
		let target 		= $(event.currentTarget)
		let touchstart 	= target.attr('bindtouchmove')
		if (!touchstart) {
			let found   = target.parents("[bindtouchmove=onCalendarTouch]")
			if (found.length > 0) {
				target  	= found
				touchstart 	= "onCalendarTouch"
			}
		}
		if (touchstart == "onCalendarTouch") {
			event.preventDefault()
			this.$touch_moved = true
			this.$touch_last_x  = event.touches[0].pageX
		}
	})
	$("body").on("touchend", (event)=>{
		let target 		= $(event.currentTarget)
		let touchstart 	= target.attr('bindtouchend')
		if (!touchstart) {
			let found   = target.parents("[bindtouchend=onCalendarTouch]")
			if (found.length > 0) {
				target  	= found
				touchstart 	= "onCalendarTouch"
			}
		}
		if (touchstart == "onCalendarTouch") {
			event.preventDefault()
			let end_x = this.$touch_last_x
			if (this.$touch_moved) {
			let delta = end_x - this.$touch_start_x
			if (delta > 30) {
				this.prevMonth()
			} else if (delta < -30) {
				this.nextMonth()
			}
			}
		}
	})
  }

  __calculate_month() {
    if (this.$data.choosed && this.__is_disabled(this.$data.choosed)) {
      this.$data.choosed = null
      this.$data.choosed_txt = null
    }
    let cursor = this.$data.cursor
    cursor = this.__date_to_obj(new Date(cursor.year, cursor.month - 1, 1))
    let first = 1-cursor.week
    let lastDay = 28, temp = cursor.month
    while (temp == cursor.month) {
      lastDay++
      temp = new Date(cursor.year, cursor.month - 1, lastDay).getMonth() + 1
    }
    lastDay--
    let lastWeek = new Date(cursor.year, cursor.month - 1, lastDay).getDay()
    let last = lastDay + 6 - lastWeek, result = []
    for(let i=first;i<=last;i++) {
      let data = this.__date_to_obj(new Date(cursor.year,cursor.month-1,i))
      let disabled = this.__is_disabled(data)
      if (!disabled) {
        if (!this.$data.choosed) {
          if (this.__is_sameday(data, this.$data.today)) {
            data.choosed = true
            this.$data.choosed = data
          }
        } else {
          if (this.__is_sameday(data, this.$data.choosed)) {
            data.choosed = true
          }
        }
        data.highlighted = this.__is_highlighted(data)
      }
      data.disabled = disabled
      if (data.month == cursor.month) {
        result.push(data)
      } else {
        result.push({})
      }
    }
    this.$data.days = result
    let rows = [], current = []
    result.forEach((item, index)=>{
      if (index % 7 == 0 && index != 0) {
        rows.push(current)
        current = []
      }
      item.index = index
      current.push(item)
    })
    rows.push(current)
    this.$data.rows = rows
    this.render()
  }

  strToDate(str) {
    let parsed = str.split(/[-: ]/)
    parsed = parsed.concat([0,0,0,0,0,0])
    return new Date(parsed[0], parsed[1] - 1, parsed[2], parsed[3], parsed[4], parsed[5])
  }

  setChoosed(obj) {
    this.$data.choosed = obj
    this.$data.days.forEach((item, index) => {
      if (item.choosed) {
        item.choosed = false
      }
      if (this.__is_sameday(item,obj)) {
        item.choosed = true
      }
    })
    this.render()
  }

  nextMonth() {
    let cursor = this.$data.cursor
    this.$data.cursor = this.__date_to_obj(new Date(cursor.year,cursor.month,1))
    this.__calculate_month()
  }

  prevMonth() {
    let cursor = this.$data.cursor
    this.$data.cursor = this.__date_to_obj(new Date(cursor.year, cursor.month-2, 1))
    this.__calculate_month()
  }

  setDisabled(dates) {
    let result = []
    dates.forEach((item)=>{
      let date = this.__date_to_obj(this.strToDate(item))
      result.push(date)
    })
    this.$data.disabled = result
    this.__calculate_month()
  }

  setHighlighted(dates) {
    let result = []
    dates.forEach((item) => {
      let date = this.__date_to_obj(this.strToDate(item))
      result.push(date)
    })
    this.$data.highlighted = result
    this.__calculate_month()
  }

  render() {
    if (this.$data.choosed) {
      let choosed = this.$data.choosed
      this.$data.choosed_txt = {
        year: choosed.year,
        month: this.__fn_(choosed.month),
        day: this.__fn_(choosed.day),
        week: this.$week_txt[choosed.week]
      }
	}
	let target   = $("#calendar-tmpl")
	let template = $.templates("#calendar-tmpl");
	let html	 = template.render({
		calendar_data: this.$data
	});
	this.$inst.data.calendar_data = this.$data
	let dom = $("#calendar-box")
	if (dom.length > 0) {
		dom.replaceWith(html)
	} else {
		target.after(html);
	}
  }
}

module.exports = Calendar