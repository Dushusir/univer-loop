import React from "react";
import { TreeItem } from "@mui/lab";
import {Sider, SiderProps, RenderIcon} from "./Sider";
import GroupAvatars, { GroupAvatars1, GroupAvatars2, GroupAvatars3, GroupAvatars4, GroupAvatars5 } from "../dashboard/GroupAvatars";

function getRandom(m: number, n:number): number {
    let aNumber = (n+1- m) * Math.random() + m;
    return Math.floor(aNumber);
}

function RandomAvatars(props: {random: number}) {
    switch (props.random) {
        case 1: {
            return <GroupAvatars />
        }
        case 2: {
            return <GroupAvatars1 />
        }
        case 3: {
            return <GroupAvatars2 />
        }
        case 4: {
            return <GroupAvatars3 />
        }
        case 5: {
            return <GroupAvatars4 />
        }
        case 6: {
            return <GroupAvatars5 />
        }
    }
    return <GroupAvatars />
}

export class Group extends React.Component<{ node: SiderProps }> {
    random =  getRandom(1, 5);

    render() {
        return (
            <TreeItem nodeId={this.props.node.id} onClick={() => {
                this.props.node.onClick(this.props.node)
            }} label={
                <>
                    <span className={"sider-group-icon"}>
                        <RenderIcon type={this.props.node.icon} />
                    </span>
                    <span className={"sider-group-title"}>{this.props.node.text}</span>
                    <span className={"sider-group-users"}>
                        <RandomAvatars random={this.random} />
                    </span>
                </>
            } className={"sider-group sider-item"}>
                <Sider group={this.props.node.children}/>
            </TreeItem>
        )
    }
}
