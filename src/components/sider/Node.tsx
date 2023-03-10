import React from "react";
import {TreeItem} from "@mui/lab";
import {RenderIcon, SiderProps} from "./Sider";

export class Node extends React.Component<{ node: SiderProps }> {
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
                </>
            } className={"sider-item"}  />
        );
    }
}
