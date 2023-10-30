import { ReactNode } from 'react'

interface Props{
    children: ReactNode;
    onclick: ()=>void;
    color?: string;
}

const Button = ({children, onclick, color = 'secondary'}:Props) => {
  return (
    <div className={'btn btn-'+color} onClick={onclick}>{children}</div>
  )
}

export default Button