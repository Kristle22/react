function Books({ books }) {
  if (books.length === 0) {
    return <div className='lds-hourglass'></div>
  }
  return (
    <>
      {books.map((b) => (
        <article
          key={b.id}
          style={{
            width: '60%',
            backgroundColor: 'whitesmoke',
            padding: '40px',
            margin: '40px',
            borderRadius: '10px',
          }}
        >
          <img style={{ width: '25%' }} src={b.img} alt='book pic' />
          <h1
            style={{
              fontSize: '1rem',
              fontFamily: 'cursive',
              color: 'black',
              marginBottom: '0px',
            }}
          >
            {b.title}
          </h1>
          <h4 style={{ color: 'darkblue' }}>{b.author}</h4>
        </article>
      ))}
    </>
  )
}

export default Books
