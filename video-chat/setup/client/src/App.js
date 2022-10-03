import React from 'react'
import { Typography , AppBar } from '@material-ui/core'
import { Notifications, Sidebar, VideoPlayer } from './components'

const App = () => {
  return (
		<div>
			<AppBar position="static" color="inherit">
				<Typography variant="h2" align="center">
					video chat
				</Typography>
			</AppBar>
			<VideoPlayer />
			<Sidebar>
				<Notifications />
			</Sidebar>
		</div>
	);
}

export default App