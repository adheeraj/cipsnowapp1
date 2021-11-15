import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
    const {properties} = state;
    return (
        <div>{properties.text}</div>
    );
};

createCustomElement('snc-cips-now', {
	renderer: {type: snabbdom},
    view,
    properties: {
        text: {default: 'Hello Dheeraj'}
    },
    styles
});
