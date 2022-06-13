import React from 'react';
import { Message } from 'semantic-ui-react';

const MessageShow = () => {
    return (
        <div className="ui warning message flex w-full">
            <i className="close icon"></i>
            <div className="header flex w-full justify-center items-center" style={{
                backgroundColor: '#FFF1CB'
            }}
            >
                ¡¡IMPORTANT!! This exchange only works with the ethereum Rinkeby test network.
            </div>
        </div>
    )
}

export default MessageShow