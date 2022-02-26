import { useTheme } from "styled-components"

export default function ListLayout({ children }: any) {
  
  const theme: any = useTheme()

  return (
    <>
      <div>
        <style jsx>{`
            div {
                display: flex;
                width: 100%;
                height: 100%;
                flex-direction: column;
                background: ${theme.background};
            }
        `}</style>
        {children}
      </div>
      
    </>
  )
}