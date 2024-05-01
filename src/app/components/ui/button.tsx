interface Props {
  children: string
  className?: string
}

export function Button({children, className}: Props) {
  return (
    <button className={`${className} bg-brand-color text-dark-40 rounded-[50px] px-6 py-2 md:px-7 md:py-3 text-sm md:text-xl font-semibold shadow-3xl w-fit`}>
      {children}
    </button>
  )
}