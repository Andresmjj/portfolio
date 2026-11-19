export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...props }) {
  return (
    <Tag
      data-reveal=""
      className={className}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  )
}
