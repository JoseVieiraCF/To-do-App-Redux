import React from 'react';

export default props => (
<button type="submit" className={'btn btn-'+ props.style} disabled={props.hide} onClick={props.onClick}>
    <i className={'fa fa-'+props.icon}></i>
</button>
)