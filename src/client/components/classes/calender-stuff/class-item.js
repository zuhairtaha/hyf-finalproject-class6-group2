import React from 'react'
import '../css/ripple.css'

const classItem = ({ item, itemContext, getItemProps, getResizeProps }) => {
  const { left: leftResizeProps, right: rightResizeProps } = getResizeProps()

  // const backgroundColor =
  //         itemContext.selected
  //           ? itemContext.dragging
  //           ? 'red'
  //           : item.selectedBgColor
  //           : item.bgColor
  // const backgroundColor = itemContext.selected ? '#eee' : '#eee'

  const borderColor = itemContext.resizing ? 'red' : item.color
  return (
    <div
      {...getItemProps({
        style: {
          // backgroundColor,
          color: itemContext.selected ? item.color : 'rgba(0, 0, 0, 0.5)',
          borderColor,
          border: itemContext.selected ? 'dashed 1px rgba(0,0,0,0.3)' : 'none',
          borderRadius: 4,
          boxShadow: `0 1px 5px 0 rgba(0, 0, 0, 0.2),
                     0 2px 2px 0 rgba(0, 0, 0, 0.14),
                     0 3px 1px -2px rgba(0, 0, 0, 0.12)`
        },
        /*
            when we selected the class_module item => add these two classes for it
            this will show the drop down menu, otherwise it will be hidden
            see: classes/css/module_colors.css
        */
        className: itemContext.selected
          ? `${item.selectItemClass} showDropDownMenu`
          : 'defaultItemClass',

        onMouseDown: () => {
          console.log('on item click', item)
        },


      })}
    >
      {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}

      <div
        className='ripple'
        style={{
          height: itemContext.dimensions.height,
          overflow: 'hidden',
          paddingLeft: 3,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          fontSize: '1rem',
          marginLeft: '1rem'
        }}
      >
        {itemContext.title}
      </div>

      {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
    </div>
  )
}

export default classItem
