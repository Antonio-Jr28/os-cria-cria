import React from 'react'

interface GradientDividerProps {
  height: string
  colorStart: string
  colorEnd: string
}

export const GradientDivider: React.FC<GradientDividerProps> = ({
  height,
  colorStart,
  colorEnd,
}) => {
  const dividerStyle = {
    height: height || '5px',
    background: `linear-gradient(180deg, ${colorStart} 0%, ${colorEnd} 100%)`,
  }

  return <div style={dividerStyle}></div>
}
