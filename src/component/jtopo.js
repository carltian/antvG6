import React, { Component } from 'react';
import G6 from '@antv/g6';
import network from '../img/network.jpg';

import LAN_up from '../img/LAN_up.png';
import LAN_down from '../img/LAN_down.png';


import WAN_up from '../img/WAN_up.png';
import WAN_down from '../img/WAN_down.png';

import WLAN_up from '../img/WLAN_up.png';
import WLAN_down from '../img/WLAN_down.png';


import Bluetooth_up from '../img/Bluetooth_up.png';
import Bluetooth_down from '../img/Bluetooth_down.png';


import OBD_up from '../img/OBD_up.png';
import OBD_down from '../img/OBD_down.png';


import IO_up from '../img/IO_up.png';
import IO_down from '../img/IO_down.png';


import DIO_up from '../img/DIO_up.png';
import DIO_down from '../img/DIO_down.png';


import GNSS_up from '../img/GNSS_up.png';
import GNSS_down from '../img/GNSS_down.png';

import Equierment from '../img/shebei.png';
import Equierment0 from '../img/shebei2.png';




function select_Icon(key){
    let img = null;
    let middle = null;
    let end = null;
    let status = datas[key]['status'];
    if(status === 'up'){
        end = 'up';
    }else if(status === 'down'){
        end = 'down';
    }
    if(key === 'ttyO5' || key === 'RS485' || key === '9600-8-N-1'){
        key = 'IO';
    }
    switch (key) {
        case 'IO': middle = 'IO_';break;
        case 'LAN': middle = 'LAN_';break;
        case 'WLAN': middle = 'WLAN_';break;
        case 'WAN': middle = 'WAN_';break;
        case 'Bluetooth': middle = 'Bluetooth_';break;
        case 'OBD': middle = 'OBD_';break;
        case 'DI': middle = 'DIO_';break;
        case 'DO': middle = 'DIO_';break;
        case 'GNSS': middle = 'GNSS_';break;
        default: console.log('interfaces value is erro!');

    }
    img = middle + end;
    return img;
}

const dic = {'IO_up': IO_up, 'IO_down': IO_down, 'LAN_up': LAN_up, 'LAN_down': LAN_down,
'WLAN_up': WLAN_up, 'WLAN_down': WLAN_down, 'WAN_up': WAN_up, 'WAN_down': WAN_down,
'Bluetooth_up': Bluetooth_up, 'Bluetooth_down': Bluetooth_down, 'GNSS_up': GNSS_up, 'GNSS_down': GNSS_down,
'OBD_up': OBD_up, 'OBD_down': OBD_down, 'DIO_up': DIO_up, 'DIO_down': DIO_down};
const reported = [{
    "reported": {
        "interfaces": {
            "ttyO5": {
                "status": "up",
                "terminals": 1,
                "property": {
                    "conn_params": "9600-8-n-1"
                }
            },
            "LAN": {
                "status": "up",
                "property": {
                    "conn_params": "100M/Full deplex",
                    "state": [0, 1],
                    "networks": ["192.168.2.12/24", "10.5.16.10/24"],
                    "netmask": "255.255.255.0"
                }
            },
            "WLAN": {
                "status": "up",
                "terminals": 3,
                "property": {
                    "conn_params": "2.4G/5G",
                    "ip": "192.168.2.31",
                    "netmask": "255.255.255.0",
                    "ssid": ["inhand-sales", "inhand-sales-5g"],
                    "state": [0, 3]
                }
            },
            "WAN": {
                "status": "up",
                "terminals": 1,
                "property": {
                    "conn_params": "*99***1#",
                    "apn": "cmnet",
                    "ip": "211.168.2.31"
                }
            },
            "Bluetooth": {
                "status": "up",
                "terminals": 0,
                "property": {
                    "conn_params": "",
                    "working_mode": "slave",
                    "state": [1]
                }
            },
            "OBD": {
                "status": "up",
                "terminals": 1,
                "property": {
                    "conn_params": ""
                }
            },
            "DI": {
                "status": "down",
                "property": {
                    "state": [0, 0, 0, 1]
                }
            },
            "DO": {
                "status": "down",
                "property": {
                    "state": [0]
                }
            },
            "GNSS": {
                "status": "up",
                "terminals": 1,
                "property": {
                    "state": [6]
                }
            }
        }
    },
    "id": "5c3ef45e5b1fac000188bcf3"
}];
const result = reported[0]['reported'];
let images = new Object();
const datas = result['interfaces'];
let interfaces_keys = Object.keys(datas);
for(let i = 0;i < interfaces_keys.length;i++) {
    let key = interfaces_keys[i];  //key=["ttyO5", "LAN", "WLAN", "WAN", "Bluetooth", "OBD", "DI", "DO", "GNSS"]
    let value = select_Icon(key);
    images[key] = value;//LAN:"LAN_up"
    }

const w = 40;
const h = 30;
const data = {
    roots: [{
      imag: network,
      width: 100,
      height: 300,
      children: [{
        name: 'WLAN',
        imag: dic[images['WLAN']],
        width: w,
        height: h,
      },
      {
        name: 'LAN',
        imag: dic[images['LAN']],
        width: w,
        height: h,
      },
      {
        name: '串口',
        imag: dic[images['IO']],
        width: w,
        height: h,
      },
      {
        name: 'WAN',
        imag: dic[images['WAN']],
        width: w,
        height: h,
      },
      {
        name: '蓝牙',
        imag: dic[images['Bluetooth']],
        width: w,
        height: h,
      },
      {
        name: 'OBD',
        imag: dic[images['OBD']],
        width: w,
        height: h,
      },
      {
        name: 'DI',
        imag: dic[images['DI']],
        width: w,
        height: h,
      },
      {
        name: 'DO',
        imag: dic[images['DO']],
        width: w,
        height: h,
      },
      {
        name: 'GNSS',
        imag: dic[images['GNSS']],
        width: w,
        height: h,
      }],
    }],
  };
export default class Jtopo extends Component {
     // constructor(props){
  //       super(props);
  //   }
  componentDidMount() {
    // this.setState();
    this.draws();
  }

  draws =() => {
    G6.registerNode('treeNode', {
        anchor: [[0, 0.5], [1, 0.5]],
        draw(item) {
            const group = item.getGraphicGroup();
            const model = item.getModel();
            const scoreTextStyle = {
              textAlign: 'center',
              fontWeight: 500,
              fontSize: 14,
              fill: '#000000',
            };
            const keyShape = group.addShape('rect', {
              attrs: {
                x: 0,
                y: 0,
                width:model.width,
                height:model.height,
                fill: '#ffffff',
                radius: 6,
              },
            });
            group.addShape('image', {
              attrs: {
                x: 0,
                y: 0,
                width: model.width,
                height: model.height,
                img: model.imag,
              },
            });
            group.addShape('text', {
                attrs: {
                    ...scoreTextStyle,
                    x: 18,
                    y: 45,
                    text: model.name,
                },
                });
            return keyShape;
          },
      });
      G6.registerEdge('smooth', {
        getPath: function getPath(item) {
          var points = item.getPoints();
          var start = points[0];
          var end = points[points.length - 1];
          var hgap = Math.abs(end.x - start.x);
          if (end.x > start.x) {
            return [['M', start.x, start.y], ['C', start.x + hgap / 4, start.y, end.x - hgap / 2, end.y, end.x, end.y]];
          }
          return [['M', start.x, start.y], ['C', start.x - hgap / 4, start.y, end.x + hgap / 2, end.y, end.x, end.y]];
        }
      });
      var layout = new G6.Layouts.Mindmap({
        direction: 'H', // 方向（LR/RL/H/TB/BT/V）
        getHGap: function getHGap() /* d */ {
          // 横向间距
          return 100;
        },
        getVGap: function getVGap() /* d */ {
          // 竖向间距
          return 20;
        }
      });
      var tree = new G6.Tree({
        id: 'mountNode', // 容器ID
        height: 500, // 画布高
        layout: layout,
        fitView: 'autoZoom' // 自动缩放
      });
    
      tree.node({
        shape: 'treeNode',
        size: 20,
        label: function label(model) {
          return model.name;
        }
      });
      tree.edge({
        shape: 'smooth'
      });
      tree.read(data);
    }
  render() {
    return (
      <div id="mountNode" />
    );
   }
}