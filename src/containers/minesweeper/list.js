import React from 'react';
import { List } from 'antd';

const { Item } = List;

const list = (props) => (
  <List
  style={props.style}
    itemLayout="horizontal"
    dataSource={props.playersList}
    renderItem={item => (
      <Item style={{alignItem: 'flex-start', justifyContent: 'flex-start'}}>
        <Item.Meta
          title={<a href="https://ant.design">{item.name} {item.age} ans</a>}
          description={`score: ${item.score}`}
        />
      </Item>
    )}
  />
)

export default list;