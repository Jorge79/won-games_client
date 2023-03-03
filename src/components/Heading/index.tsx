import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineColor?: LineColors
  lineLeft?: boolean
  lineBottom?: boolean
  size?: 'small' | 'medium'
}

const Heading = ({
  children,
  color = 'white',
  lineColor = 'primary',
  lineLeft = false,
  lineBottom = false,
  size = 'medium'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineColor={lineColor}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    size={size}
  >
    {children}
  </S.Wrapper>
)

export default Heading
