import WithPage from '@/components/HOC/with-page'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <div>{props.children}</div>
  )
}

export default WithPage(Layout)