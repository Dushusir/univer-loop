import React from "react";
import {TreeView} from "@mui/lab";
import {Node} from "./Node";
import {Group} from "./Group";
import './Sider.css';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilePresentIcon from '@mui/icons-material/FilePresent';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import PageviewIcon from '@mui/icons-material/Pageview';

export interface SiderProps {
    id: string,
    onClick: (props: SiderProps) => void,
    text: string,
    icon: string,
    type: 'node' | 'group',
    children: SiderProps[]
}

export function RenderIcon(props: { type: string }) {
    switch (props.type) {
        case 'icon1': {
            return <TextSnippetIcon />;
        }
        case 'icon2': {
            return <PictureAsPdfIcon />;
        }
        case 'icon3': {
            return <InsertDriveFileIcon />;
        }
        case 'icon4': {
            return <SummarizeIcon />;
        }
        case 'icon5': {
            return <FilePresentIcon />;
        }
        case 'icon6': {
            return <PageviewIcon />
        }
        default: {
            return <TextSnippetIcon />;
        }
    }
}

export class Sider extends React.Component<{ group: SiderProps[] }> {
    render() {
        return (
            <TreeView
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                className={"slide-root"}>
                {this.props.group.map(child => {
                    switch (child.type) {
                        case 'node': {
                            return <Node node={child} key={child.id}/>;
                        }
                        case 'group': {
                            return <Group node={child} key={child.id}/>
                        }
                    }
                })}
            </TreeView>
        )
    }
}
