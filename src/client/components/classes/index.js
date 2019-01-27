import React, { Component, forwardRef } from 'react'
import Timeline, { TimelineMarkers, TodayMarker } from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import './css/style.css'
import classItem from './calender-stuff/class-item'
import SundaysMarker from './calender-stuff/Sundays-marker'
import keys from './calender-stuff/keys'
import Progress from '../layouts/Progress'
import { getClassesCalender } from './GroupsItems'
import { Consumer } from '../../context'
import AddClassButton from './add-class-button'
import axios from 'axios'

class Index extends Component {
  // ----------------------componentDidMount----------------------------------
  componentDidMount() {
    document.title = 'Classes'

    if (this.props.value.groups.length === 0)
      getClassesCalender()
        .then(res => {
          this.props.value.dispatch({
            type: 'SET_CLASSES_CALENDER',
            payload: res
          })
        })
        .catch(console.error)
  }
  // ----------------------handleItemMove----------------------------------
  handleItemMove = (itemId, dragTime, newGroupOrder) => {
    const { items, groups, dispatch } = this.props.value

    const group = groups[newGroupOrder]

    const movedItem = items.find(item => item.id === itemId)
    const start = dragTime
    const end = dragTime + (movedItem.end - movedItem.start)
    axios
      .put(`/api/classes-modules/${itemId}`, {
        start_date: new Date(start),
        end_date: new Date(end)
      })
      .then(res => {
        if (res.data.updated) console.log('updated')
      })
      .catch(console.error)

    const updatedItems = items.map(item =>
      item.id === itemId
        ? Object.assign({}, item, { start, end, group: group.id })
        : item
    )
    dispatch({ type: 'UPDATE_CLASS_MODULE', payload: updatedItems })
    console.log('Moved', itemId, dragTime, newGroupOrder)
  }
  // --------------------------handleItemResize------------------------------
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
  // -----------------------------render---------------------------
  render() {
    const { groups, items, defaultTimeStart, defaultTimeEnd } = this.props.value
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

        {/*add class button --------*/}
        <AddClassButton />
      </React.Fragment>
    )
  }
}

const handler = (props, ref) => (
  <Consumer>{value => <Index {...props} value={value} ref={ref} />}</Consumer>
)

export default forwardRef(handler)
