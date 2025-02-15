import {css, cx} from 'panda-lib/css'

export function Button(props: React.ComponentPropsWithRef<'button'>) {
  return (
    <button
      {...props}
      className={cx(
        props.className,
        css({
          color: 'cool',
          bg: '[red]',
        }),
      )}
    />
  )
}
