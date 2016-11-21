import React from 'react';
import {ListItem} from 'material-ui/List';
import Marker from '../drawables/marker.svg';
import Avatar from 'material-ui/Avatar'; // TODO: Fix this
class BinItem extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <ListItem
            primaryText={`${this.props.bin.full}%`}
            secondaryText={`X: ${this.props.bin.coord[0]}, Y: ${this.props.bin.coord[1]}`}
            leftAvatar={<Avatar src={Marker}/>}/>
    }
}
export {BinItem};
export default BinItem;