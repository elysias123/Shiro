import clsx from 'clsx'
import type { FC } from 'react'
import type { ToastProps, TypeOptions } from 'react-toastify/dist/types'

import { MotionButtonBase } from '../ui/button'

const typeMap: Record<TypeOptions, JSX.Element> = {
  success: <i className="icon-[mingcute--check-fill] text-uk-green-light" />,
  error: <i className="icon-[mingcute--close-fill] text-uk-red-light" />,
  info: <i className="icon-[mingcute--information-fill] text-uk-blue-light" />,
  warning: <i className="icon-[mingcute--alert-fill] text-uk-orange-light" />,
  default: (
    <i className="icon-[mingcute--information-fill] text-uk-blue-light" />
  ),
}

export const ToastCard: FC<{
  message: string
  toastProps?: ToastProps
  iconElement?: JSX.Element
  closeToast?: () => void
}> = (props) => {
  const { iconElement, message, closeToast } = props

  return (
    <div
      className={clsx(
        'relative w-full overflow-hidden rounded-xl shadow-out-sm',
        'my-4 mr-4 px-4 py-5',
        'bg-base-100/90 backdrop-blur-sm',
        'border border-slate-100/80 dark:border-neutral-900/80',
        'space-x-4',
        'flex items-center',
      )}
    >
      {iconElement ?? typeMap[props.toastProps?.type ?? 'default']}
      <span>{message}</span>

      <MotionButtonBase
        className="absolute bottom-0 right-3 top-0 flex items-center text-sm text-base-content/40 duration-200 hover:text-base-content/80"
        onClick={closeToast}
      >
        <i className="icon-[mingcute--close-fill] p-2" />
      </MotionButtonBase>
    </div>
  )
}