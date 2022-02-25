export default function Layout({ children }: any) {
  return (
    <>
      <div>
        <style jsx>{`
            div {
                display: flex;
                width: 100%;
                height: 100%;
                background: #282828;
            }
        `}</style>
        {children}
      </div>
      
    </>
  )
}