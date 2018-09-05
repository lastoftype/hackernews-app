import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	max-width: 1000px;
	margin: 0 auto;
	padding: 0 15px;
`

export const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	flex-direction: ${props => props.column ? 'column' : 'row'};
	justify-content: ${props => props.spaceBetween ? 'space-between' : 'auto'};
	align-items: ${props => props.alignItems || 'inherit'};
`

export const Column = styled.div`
	flex: ${props => '0 0 ' + props.width};
	width: ${props => props.width};
`

export default { Container, Row, Column }