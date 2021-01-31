import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfile from '../assets/styles/img/no-profile.png';
import Torahack from '../assets/styles/img/torahack.png';


const Chat = (props) => {
  const isQuestion = (props.type === "question");
  const classes = isQuestion ? "p-chat__raw" : "p-chat__reverse";

  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={Torahack} />
        ) : (
            <Avatar alt="icon" src={NoProfile} />
          )
        }
      </ListItemAvatar>
      <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
  )
};

export default Chat