export default function Reveal({ as, delay = 0, className = '', style, children, ...props }) {
  const Component = as || 'div'

  return (
    <Component
      data-reveal=""
      className={className}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Component>
  )
}
