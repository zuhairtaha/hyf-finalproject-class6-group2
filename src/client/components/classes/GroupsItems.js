import axios from 'axios'
import moment from 'moment'
import ClassMenu from './Class-menu'
import ClassModuleMenu from './Class-module-menu'
import React from 'react'

export function getClassesCalender() {
  return new Promise((resolve, reject) => {
    axios
      .get('/api/classes-modules')
      .then(({ data }) =>
        resolve({
          groups: getGroups(data),
          items: getItems(data),
          defaultTimeStart: defaultTimeStart(data),
          defaultTimeEnd: defaultTimeEnd(data)
        })
      )
      .catch(error => reject(error))
  })
}

export function classTitle(title, id) {
  return (
    <div>
      {title}
      <ClassMenu id={id} title={title} />
    </div>
  )
}

function getGroups(classes_modules) {
  let groups = []
  classes_modules.forEach(({ group_id, group_title }) => {
    groups[group_id] = {
      id: group_id,
      title: classTitle(group_title, group_id)
    }
  })
  return groups.filter(group => group !== null)
}

function itemTitle(id, title) {
  return (
    <div style={{ display: 'inline-flex' }}>
      <ClassModuleMenu id={id} title={title} />
      <span>{title}</span>
    </div>
  )
}

function getItems(classes_modules) {
  return classes_modules
    .filter(item => item.item_id !== null)
    .map(item => {
      const { item_id, item_title, group_id, start_date, end_date } = item
      return {
        id: item_id,
        title: itemTitle(item_id, item_title),
        group: group_id,
        start: moment(new Date(start_date).toISOString()),
        end: moment(new Date(end_date).toISOString()),
        // className: item_title.replace(/\W+/g, '_'),
        selectItemClass: item_title.replace(/\W+/g, '_'),
        className: ``,
        canMove: true,
        canResize: true,
        canChangeGroup: true
      }
    })
}

function defaultTimeStart(classes_modules) {
  const startDates = classes_modules
    .filter(item => item.start_date !== null)
    .map(item => new Date(item.start_date))
  return moment(new Date(Math.min(...startDates)).toISOString()).add(-1, 'week')
}

function defaultTimeEnd(classes_modules) {
  const endDates = classes_modules
    .filter(item => item.start_date !== null)
    .map(item => new Date(item.end_date))
  return moment(new Date(Math.max(...endDates)).toISOString()).add(1, 'week')
}
