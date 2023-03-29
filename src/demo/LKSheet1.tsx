import React, {createRef} from "react";

export class LKSheet1 extends React.Component<{style: {}}> {

    iframeRef = createRef<HTMLIFrameElement>()

    componentDidMount() {
        if (this.iframeRef.current) {
            this.iframeRef.current.src = 'http://luckysheet.lashuju.com/'
        }
    }

    render() {
        return <iframe ref={this.iframeRef} style={{...{width: '100%', height: '90%'}, ...this.props.style}} />;
    }
}
