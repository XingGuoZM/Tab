import { useEffect, useState } from 'react';
import BScroll from '@better-scroll/core';
import Slide from '@better-scroll/slide';
import Panel from './Panel';
import Nav from './Nav';
import './index.css';
BScroll.use(Slide);

function Tab(props) {
  const { tabNav, tabPanel, data, tabChange } = props;
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let bs = new BScroll('.tab-panel', {
      scrollX: true,
      scrollY: false,
      slide: {
        autoplay: false,
        loop: false
      },
      momentum: false,
      bounce: {
        left: true,
        right: true
      },
      probeType: 3
    });
    bs.on('slideWillChange', (page) => {
      // 即将要切换的页面
      const { pageX, pageY } = page;
      tabChange(pageX);
      setIndex(() => pageX);
    });
  }, []);
  const tabData = data;
  function renderPanelItem(data) {
    const { panelItem, endItem } = tabPanel;
    return data.map(item => panelItem(item, item.id));
  }
  function renderNavItem(data) {
    const { navItem } = tabNav;
    return data.map(item => navItem && navItem(item));
  }
  return <div className='tab-wrap'>
    <Nav data={tabData} navItem={renderNavItem} tabNav={tabNav} index={index} />
    <div className='tab-panel'>
      <div className='tab-panel-content'>
        {tabData.map(item => <Panel key={item.id} data={item} panelItem={renderPanelItem} endItem={tabPanel.endItem} />)}
      </div>
    </div>
  </div>
}

export default Tab;