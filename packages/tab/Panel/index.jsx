import { useEffect, useState } from 'react';
import './index.css';

export default function Panel(props) {
  const { data: { id, list }, panelItem,endItem } = props;
  return <section className='tab-panel-item' key={id}>
    {panelItem(list)}
    {endItem()}
    {/* <div className='tab-panel-loading'>加载中...</div> */}
    {/* <div className='tab-panel-loading'>到底了~</div> */}
  </section>
};
