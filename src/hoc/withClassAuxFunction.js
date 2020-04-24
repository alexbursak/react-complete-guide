import React from 'react';

const withClassAuxFunction = (WrapperComponent, className) => {
    return props => (
        <div className={className}>
            <WrapperComponent />
        </div>
    );
};

export default withClassAuxFunction;