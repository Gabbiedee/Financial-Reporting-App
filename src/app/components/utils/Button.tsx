
type Props = {
  onClick?: (e: React.MouseEvent) => void;
 children: React.ReactNode;
 className?: string;
}

const Button = ({children, className, onClick}: Props) => {
 
  return (
  <button className={className} onClick={onClick}>{children}</button>
  )
}

export default Button