import { checkIntegrity } from './scrappingValidation';
import util from 'util';

const controls = [
    {
        date: new Date(2020, 0, 31),
        balance: 12.45
    },
    {
        date: new Date(2020, 2, 27),
        balance: 12.45
    },
    {
        date: new Date(2020, 1, 20),
        balance: 142.56
    },
    {
        date: new Date(2020, 3, 30),
        balance: 12.45
    },
]

// janvier = 0 BAAAAAAD
const operations = [
    {
        id:0,
        date: new Date(2006, 0, 3),
        label: 'Operation0',
        amount: 1009.67
    },
    {
        id:1,
        date: new Date(2020, 0, 3),
        label: 'Operation1',
        amount: 12.45
    },{
        id:98,
        date: new Date(2020, 1, 4),
        label: 'Operation98',
        amount: 1009.67
    },{
        id:2,
        date: new Date(2020, 0, 5),
        label: 'Operation2',
        amount: 4.34
    },{
        id:67,
        date: new Date(2006, 0, 3),
        label: 'Operation0',
        amount: 1009.67
    },{
        id:3,
        date: new Date(2020, 1, 3),
        label: 'Operation3',
        amount: 1245.98
    },{
        id:4,
        date: new Date(2020, 1, 23),
        label: 'Operation4',
        amount: 145.09
    },{
        id:5,
        date: new Date(2020, 2, 1),
        label: 'Operation5',
        amount: 12.89
    },{
        id:6,
        date: new Date(2020, 2, 31),
        label: 'Operation6',
        amount: 12.45
    },{
        id:7,
        date: new Date(2020, 3, 30),
        label: 'Operation7',
        amount: 19590.09
    },
    {
        id:8,
        date: new Date(2021, 3, 30),
        label: 'Operation8',
        amount: 19590.09
    },
    {
        id:23,
        date: new Date(2021, 3, 30),
        label: 'Operation32',
        amount: 19590.09
    },
]

console.log(util.inspect(checkIntegrity(controls, operations), false, null, true));