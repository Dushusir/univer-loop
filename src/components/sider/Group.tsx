import React from "react";
import { TreeItem } from "@mui/lab";
import {Sider, SiderProps, RenderIcon} from "./Sider";
import GroupAvatars from "../dashboard/GroupAvatars";

export class Group extends React.Component<{ node: SiderProps }> {
    render() {
        return (
            <TreeItem nodeId={this.props.node.id} label={
                <>
                    <span className={"sider-group-icon"}>
                        <RenderIcon type={this.props.node.icon} />
                    </span>
                    <span className={"sider-group-title"}>{this.props.node.text}</span>
                    <span className={"sider-group-users"}>
                        <GroupAvatars />
                    </span>
                </>
            } className={"sider-group sider-item"}>
                <Sider group={this.props.node.children}/>
            </TreeItem>
        )
    }
}
