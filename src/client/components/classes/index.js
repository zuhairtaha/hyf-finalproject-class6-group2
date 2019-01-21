import React, { Component } from 'react'
import moment from 'moment'
import Timeline, { TimelineMarkers, TodayMarker } from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import './css/style.css'
import classItem from './class-item'
import SundaysMarker from './Sundays-marker'
import keys from './keys'
import axios from 'axios'
import Progress from '../layouts/Progress'

import ClassDropDownMenu from './ClassDropDownMenu'
import Fab from '@material-ui/core/Fab'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'

export default class Index extends Component {
  state = {
    keys,
    groups: [],
    items: [],
    y19: new Date('2019/1/1'),
    defaultTimeStart: null,
    defaultTimeEnd: null
  }

  getGroups = _class => ({
    id: _class.id,
    title: this.classTitle(_class.name, _class.id)
  })

  classTitle = (title, id) => (
    <div>
      {title}
      <ClassDropDownMenu id={id} />
    </div>
  )

  getItems = (item, index) => ({
    ...item,
    id: index + 1,
    start: moment(new Date(item.start)),
    end: moment(new Date(item.end)),
    className: item.title.replace(/ /g, '_'),
    canMove: true,
    canResize: false,
    canChangeGroup: false
  })

  componentDidMount() {
    axios.get('/api/classes').then(classes => {
      axios.get(`/api/classesmodules`).then(modules => {
        const endDates = modules.data.map(item => new Date(item.end))
        const startDates = modules.data.map(item => new Date(item.start))
        this.setState({
          groups: classes.data.map(this.getGroups),
          items: modules.data.map(this.getItems),

          defaultTimeStart: moment(new Date(Math.min(...startDates))).add(
            -1,
            'week'
          ),
          defaultTimeEnd: moment(new Date(Math.max(...endDates))).add(1, 'week')
        })
      })
    })
  }

  componentWillMount() {
    document.title = 'Classes'
  }

  toTimestamp = strDate => {
    const d = new Date(strDate)
    return Date.parse(d.toString()) / 1000
  }

  addItemHandler = item => {
    const newItem = {
      id:
        1 +
        this.state.items.reduce(
          (max, value) => (value.id > max ? value.id : max),
          0
        ),
      group: item.mentor,
      title: item.status,
      className: item.status,
      start: moment(new Date(item.start)),
      end: moment(new Date(item.end))
    }

    this.setState(state => ({
      items: [...state.items, newItem]
    }))
  }
  handleItemMove = (itemId, dragTime, newGroupOrder) => {
    const { items, groups } = this.state

    const group = groups[newGroupOrder]

    this.setState({
      items: items.map(item =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: dragTime,
              end: dragTime + (item.end - item.start),
              group: group.id
            })
          : item
      )
    })

    console.log('Moved', itemId, dragTime, newGroupOrder)
  }

  handleItemResize = (itemId, time, edge) => {
    const { items } = this.state

    this.setState({
      items: items.map(item =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: edge === 'left' ? time : item.start,
              end: edge === 'left' ? item.end : time
            })
          : item
      )
    })

    console.log('Resized', itemId, time, edge)
  }

  render() {
    const { keys, groups, items, defaultTimeStart, defaultTimeEnd } = this.state
    return (
      <React.Fragment>
        {groups.length > 0 ? (
          <Timeline
            keys={keys}
            groups={groups}
            // onItemClick={() => alert(1)}
            items={items}
            sidebarContent='Classes'
            lineHeight={75}
            itemRenderer={classItem}
            defaultTimeStart={defaultTimeStart}
            defaultTimeEnd={defaultTimeEnd}
            maxZoom={1.5 * 365.24 * 86400 * 1000}
            minZoom={60 * 60 * 1000 * 24 * 7}
            fullUpdate
            itemTouchSendsClick={false}
            stackItems
            itemHeightRatio={0.75}
            showCursorLine
            canMove={true}
            canResize={'both'}
            onItemMove={this.handleItemMove}
            onItemResize={this.handleItemResize}
          >
            <TimelineMarkers>
              <TodayMarker>
                {({ styles }) => (
                  <div
                    style={{
                      ...styles,
                      width: '0.5rem',
                      backgroundColor: 'rgba(255,0,0,0.5)'
                    }}
                  />
                )}
              </TodayMarker>
              <SundaysMarker />
            </TimelineMarkers>
          </Timeline>
        ) : (
          <Progress />
        )}

        {/*add class button*/}
        <div className='floating-btn'>
          <Fab
            component={Link}
            to='/classes/add'
            color='secondary'
            aria-label='Add'
          >
            <AddIcon />
          </Fab>
        </div>
      </React.Fragment>
    )
  }
}
