import React, {createRef} from "react";
import {makeid, initUniverNew} from './Common.js';

export class Sheet6 extends React.Component<{style: {}}>{
    refContainer = createRef<HTMLDivElement>()

    componentDidMount() {
        if (this.refContainer.current) {
            const div = this.refContainer.current;
            const univerid = makeid(6)
            div.id = "univer-demo";
            div.setAttribute("data-univerid", univerid)
            div.classList.add("univer-demo");
            div.style.overflow='hidden'
            let demo = "DEMO6"
            setTimeout(() => {
                const container = div;
                container && container.addEventListener('wheel', (e) => {
                    e.stopImmediatePropagation()
                });
                container && container.addEventListener('click', (e) => {
                    e.stopImmediatePropagation()
                });
                container && container.addEventListener('drag', (e) => {
                    e.stopImmediatePropagation()
                });
                container && container.addEventListener('mousedown', (e) => {
                    e.stopImmediatePropagation()
                });
                container && container.addEventListener('mousemove', (e) => {
                    e.stopImmediatePropagation()
                });
                initUniverNew(demo, {
                    toolbar: false,
                    refs: container
                })
            }, 800);
        }
    }

    componentDidUpdate() {
        window.dispatchEvent(new Event('resize', {}));
    }

    render() {
        return <div ref={this.refContainer} style={{...this.props.style, width: '930px', height: '80%', margin: '0 auto'}}></div>;
    }
}
