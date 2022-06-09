import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
`

const Pane = styled.div<{ weight?: number }>`
	flex: ${props => props.weight};
`

export const SplitScreen = ({
	left: Left,
	right: Right,
	leftWeight = 1,
	rightWeight = 1,
}: any) => {
	return (
		<Container>
			<Pane weight={leftWeight}>
				<Left />
			</Pane>
			<Pane weight={rightWeight}>
				<Right />
			</Pane>
		</Container>
	)
}
