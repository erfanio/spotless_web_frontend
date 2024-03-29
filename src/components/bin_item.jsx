import React from 'react';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar'; // TODO: Fix this
import getMarker from '../util/marker';

class BinItem extends React.Component {
    render() {
        return <ListItem
            primaryText={`${this.props.bin.full}%`}
            secondaryText={`X: ${this.props.bin.coord[0]}, Y: ${this.props.bin.coord[1]}`}
            leftAvatar={<Avatar
                backgroundColor={'transparent'}
                src={getMarker(this.props.bin.full)}
            />}
            onClick={() => {this.props.setBinFocus(this.props.bin.id)}}
        />
    }
}
export {BinItem};
export default BinItem;