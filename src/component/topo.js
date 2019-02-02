import React, { Component } from 'react';
import G6 from '@antv/g6';
import network from '../img/network.jpg';


const data = {
  roots: [{
    name: '网关',
    imag: network,
    children: [{
      name: 'WLAN',
      imag: network,
    },
    {
      name: 'LAN',
      imag: './network.jpg',
      children: [{
        name: '设备',
      },
      {
        name: '设备',
      }],
    },
    {
      name: '串口',
    },
    {
      name: 'WAN',
    },
    {
      name: '蓝牙',
    },
    {
      name: 'OBD',
    },
    {
      name: 'DI',
    },
    {
      name: 'DO',
    },
    {
      name: 'GNSS',
    }],
  }],
};

export default class TopoInfo extends Component {
  // constructor(props){
  //       super(props);
  //   }
  componentDidMount() {
    // this.setState();
    this.draws();
  }

  draws =() => {
    G6.registerNode('card', {
      draw(item) {
        const group = item.getGraphicGroup();
        const model = item.getModel();
        const scoreTextStyle = {
          textAlign: 'center',
          fontWeight: 400,
          fontSize: 12,
          fill: '#000000',
        };
        const width = 70;
        const height = 50;
        const keyShape = group.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            width,
            height,
            fill: '#0080ff',
            radius: 4,
          },
        });
        group.addShape('image', {
          attrs: {
            x: 15,
            y: 8,
            width: 40,
            height: 24,
            img: model.imag,
          },
        });
        group.addShape('text', {
          attrs: {
            ...scoreTextStyle,
            x: 35,
            y: 50,
            text: model.name,
          },
        });
        return keyShape;
      },
    });
    const layout = new G6.Layouts.CompactBoxTree({
      direction: 'V',
      getHGap() {
        return 12;
      },
      getVGap() {
        return 16;
      },
    });
    const tree = new G6.Tree({
      container: 'mountNode',
      width: 500,
      height: 500,
      fitView: 'autoZoom',
      layout,
    });
    tree.node({
      shape: 'card',
    });
    tree.edge({
      shape: 'smooth',
      style: {
        stroke: 'blue',
        lineWidth: 1,
        strokeOpacity: 1,
      },
    });
    tree.read(data);
  }
  render() {
    return (
      <div id="mountNode" />
    );
  }
}
