import React, {FC, MouseEvent, ComponentType} from 'react'

type ButtonProps = {
  children?: any
  size?: 'big' | 'small'
  text?: string
  color?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export const Button: FC<ButtonProps> = ({
  children,
  size,
  color,
  text,
  onClick,
  ...props
}) => {
  const sizeButton =
    size === 'big' ? 'big' : size === 'small' ? 'small' : 'default'

  return (
    <button
      {...props}
      className={`button ${sizeButton} ${color}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export const PrimaryButton = (props: ButtonProps) => {
  return <Button {...props} color="primary" />
}

export const DangerButton = (props: ButtonProps) => {
  return <Button {...props} color="danger" />
}

export const BigSuccessButton = (props: ButtonProps) => {
  return <Button {...props} color="primary" size="big" />
}

export const SmallSuccessButton = (props: ButtonProps) => {
  return <Button {...props} color="primary" size="small" />
}

export function partiallyApplied<T>(
  EnhacedComponent: ComponentType<T>,
  partialProps: {},
) {
  return (props: T) => {
    return <EnhacedComponent {...partialProps} {...props} />
  }
}

export const PrimaryButtonPartial = partiallyApplied(Button, {
  color: 'primary',
  size: 'big',
})
export const SecondaryButtonPartial = partiallyApplied(Button, {
  color: 'danger',
  size: 'big',
})

export const TerciaryButtonPartial = partiallyApplied(Button, {
  color: 'blue',
  size: 'small',
})
