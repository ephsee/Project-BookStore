
function CustomerOrders({custColl, ord, handleDelete}) {
    const book = custColl.filter( b => {
        if (b.id === ord.book_id) {
            return b
        }
    })

    return(

        <div>
            <p>Order id: {ord.id}</p>
            <p>Book: {book[0].title}</p>
            <button className="buttons" onClick={() =>handleDelete(book[0],ord)}>X</button>
        </div>

    )
}

export default CustomerOrders