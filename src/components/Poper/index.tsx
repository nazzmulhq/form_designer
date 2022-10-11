import React, { useEffect, useRef } from 'react';
import Popper from '@material-ui/core/Popper';
import QuestionTypes from '../../features/FormDesigner/QuesTypes';

function useOutsideAlerter(ref: any, props: any) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                props.toggleAnchor();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}


export default function QuestionAddTool(props: any) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, props);
    const closeAddTool = () => props.toggleAnchor();

    return (
        <Popper ref={wrapperRef} open={props.open} anchorEl={props.anchorEL} placement="right-start" style={{ width: '70%', boxShadow: ' 0 2px 3px 0 rgba(0, 0, 0, 0.2), 0 0px 3px 0 rgba(0, 0, 0, 0.19)' }}>
            <div>
                <QuestionTypes close={closeAddTool} currentQustion={props.currentQustion} />
            </div>
        </Popper>
    );
}
