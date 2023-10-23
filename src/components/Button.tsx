import Image from 'next/image'
import { ComponentProps } from 'react'

type Props = ComponentProps<'button'> & {
  icon?: string
  variant:
    | 'btn_dark_green'
    | 'btn_green'
    | 'btn_white_text'
    | 'btn_white'
    | 'btn_dark_green_outline'
  full?: boolean
}

function Button({
  icon,
  variant,
  type = 'button',
  children,
  full = false,
  ...props
}: Props) {
  return (
    <button
      {...props}
      type={type}
      className={`bold-16 flexCenter gap-3 whitespace-nowrap rounded-full border ${variant} ${
        full && 'w-full'
      }`}
    >
      {icon && (
        <Image src={icon} alt={String(children)} width={24} height={24} />
      )}
      {children}
    </button>
  )
}

export default Button
