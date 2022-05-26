import Daiktas from './Daiktas'
function Tvenkinys({ seaPlaners }) {
  return (
    <>
      {seaPlaners.map((p) =>
        p.id % 2 ? <Daiktas key={p.id} seaPlaners={p} /> : null
      )}
      <br />
      {seaPlaners.map((p) =>
        p.id % 2 ? null : <Daiktas key={p.id} seaPlaners={p} />
      )}
    </>
  )
}

export default Tvenkinys
