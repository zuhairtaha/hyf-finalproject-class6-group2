import axios from 'axios'
import moment from 'moment'
import ClassDropDownMenu from './Class-menu'
import React from 'react'

export function getGroupsAndItems() {
  axios
    .get('/api/classes-modules')
    .then(({ data }) => ({
      groups: getGroups(data),
      items: getItems(data),
      start_date: defaultTimeStart(data),
      end_date: defaultTimeEnd(data)
    }))
    .catch(error => ({ error }))
}

function classTitle(title, id) {
  return (
    <div>
      {title}
      <ClassDropDownMenu id={id} />
    </div>
  )
}

export function getGroups(classes_modules) {
  let groups = []
  classes_modules.forEach(item => {
    groups[item.group_id] = {
      id: item.group_id,
      title: classTitle(item.group_title, item.group_id)
    }
  })
  return groups.filter(group => group !== null)
}

export function getItems(classes_modules) {
  return classes_modules
    .filter(item => item.item_id !== null)
    .map(item => ({
      id: item.item_id,
      title: item.item_title,
      group: item.group_id,
      start: moment(new Date(item.start_date).toISOString()),
      end: moment(new Date(item.end_date).toISOString()),
      className: item.item_title.replace(/\W+/g, '_'),
      canMove: true,
      canResize: true,
      canChangeGroup: true
    }))
}

export function defaultTimeStart(classes_modules) {
  const startDates = classes_modules
    .filter(item => item.start_date !== null)
    .map(item => new Date(item.start_date))
  return moment(new Date(Math.min(...startDates)).toISOString()).add(-1, 'week')
}

export function defaultTimeEnd(classes_modules) {
  const endDates = classes_modules
    .filter(item => item.start_date !== null)
    .map(item => new Date(item.end_date))
  return moment(new Date(Math.max(...endDates)).toISOString()).add(1, 'week')
}
