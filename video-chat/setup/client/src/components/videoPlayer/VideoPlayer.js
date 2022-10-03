
import { Grid, Paper, Typography } from '@material-ui/core';
import React, { useContext } from 'react'
import { SocketContext } from '../../SocketContext';
import useStyles from './Styles'

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
		useContext(SocketContext);
  const classes = useStyles()
  return (
		<Grid container className={classes.gridContainer}>
			{stream && (
				<Paper className={classes.paper}>
					<Grid item xs={12} md={6}>
						<Typography variant="h5" gutterBottom>
							{name || "Name"}
						</Typography>
						<video
							playsInline
							muted
							ref={myVideo}
							autoPlay
							className={classes.video}
						/>
					</Grid>
				</Paper>
			)}
			{/* {callAccepted && !callEnded && ( */}
				<Paper className={classes.paper}>
					<Grid item xs={12} md={6}>
						<Typography variant="h5" gutterBottom>
							{call.name || "Name"}
						</Typography>
						<video
							playsInline
							ref={userVideo}
							autoPlay
							className={classes.video}
						/>
					</Grid>
				</Paper>
			{/* )} */}
		</Grid>
	);
}

export default VideoPlayer