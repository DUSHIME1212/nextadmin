import React from 'react'

const menulink = ({item}) => {
  return (
    <link href={item.path} className='{styles.contanier}'>
        {item.icon}
        {item.title}
    </link>
  )
}

export default menulink