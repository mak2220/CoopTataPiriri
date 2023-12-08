import React from 'react';

const Item = ({item}) => {
  return (
    <>
        <li><a href={item.url} className="block py-2 px-3 text-white bg-black rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500" aria-current="page"><i className={item.icon}/>  {item.name}</a></li>
    </>
  )
}

export default Item;