"use client"

import { useStateContext } from '@/Context/Statecontext'

export default function Wrapper({ children }) {

  const { openMenu } = useStateContext();

  return (
    <div className={openMenu ? "transition-dispaly opacity-10" : "transition-dispaly opacity-100"}>
      { children }
    </div>
  )
}
