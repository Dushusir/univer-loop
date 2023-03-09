import {SiderProps} from "./Sider";

let id = 0;

const SiderData: SiderProps[] = [
    {
        text: 'Marketing',
        id: 'root',
        type: 'group',
        icon: 'icon1',
        children: [
            {
                id: `${++id}`,
                text: 'Project Overview',
                type: 'group',
                icon: 'icon2',
                children: [
                    {
                        type: 'node',
                        id: `${++id}`,
                        text: 'Marketing Guidelines for V...',
                        icon: 'icon4',
                        children: [],
                    },
                    {
                        type: 'node',
                        id: `${++id}`,
                        text: 'Weekly Brainstorm Meeting',
                        icon: 'icon5',
                        children: [],
                    },
                    {
                        type: 'node',
                        id: `${++id}`,
                        text: 'Creative Brief',
                        icon: 'icon6',
                        children: [],
                    },
                    {
                        type: 'node',
                        id: `${++id}`,
                        text: 'Retrospective Retreat',
                        icon: 'icon6',
                        children: [],
                    },
                ],
            },
            {
                type: 'group',
                id: `${++id}`,
                text: 'Designs',
                icon: 'icon3',
                children: [
                    {
                        type: 'node',
                        id: `${++id}`,
                        text: 'Mood Board',
                        icon: 'icon5',
                        children: [],
                    },
                    {
                        type: 'node',
                        id: `${++id}`,
                        icon: 'icon3',
                        text: 'Alpine ski house sizzle Re...',
                        children: [],
                    },
                ],
            },
        ],
    }
]

export {
    SiderData
};
