import React, {createRef} from "react";

export class Page extends React.Component<{style: {}}> {

    iframeRef = createRef<HTMLIFrameElement>()

    componentDidMount() {
        if (this.iframeRef.current) {
            this.iframeRef.current.src = 'http://luckysheet.lashuju.com/page/?init=preset'
            this.iframeRef.current.onload = () =>{
                this.iframeRef.current && this.iframeRef.current.focus()
            }
        }
    }

    componentDidUpdate(prevProps: Readonly<{ style: {}; }>, prevState: Readonly<{}>, snapshot?: any): void {
        this.iframeRef.current && this.iframeRef.current.focus()
    }

    render() {
        return <iframe ref={this.iframeRef} style={{...{width: '100%', height: '90%'}, ...this.props.style}}/>;
    }
}
