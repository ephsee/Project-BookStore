import BookCard from "./BookCard"
import {Grid} from 'semantic-ui-react'

function BooksCollection({books}) {
    const sortBy = (arr, key) => {
        arr.sort((a,b) => {
          if (key !== 'quantity'){
            if (a[key].toLowerCase() < b[key].toLowerCase()) return -1
            else if (a[key].toLowerCase() > b[key].toLowerCase()) return 1
            else if (a[key].toLowerCase() === b[key].toLowerCase()) return 0
          }
          else{
            if (a[key] < b[key])return -1
            else if (a[key] > b[key]) return 1
            else if (a[key] === b[key]) return 0
          }
        })
    }
      const sortAlphaBooks = [...books]
      sortBy(sortAlphaBooks, 'title')
      
      const sortGenreBooks = [...books]
      sortBy(sortGenreBooks, 'genre')
      
      const sortAuthorBooks = [...books]
      sortBy(sortAuthorBooks, 'author')
    
      const sortQuantBooks = [...books]
      sortBy(sortQuantBooks, 'quantity')
    
      const sortPubBooks = [...books]
      sortBy(sortPubBooks, 'publisher')

    //make book card collection
    const collection = books.map(b => {
        return <BookCard key={b.id} bookitem={b}/>
    })


    return(

        <div>
            <button onClick = {() => console.log(books)}>button</button>
            <Grid centered>
                <Grid.Row centered columns = {5}>
                    {collection}
                </Grid.Row>
            </Grid>
        </div>
        
    )

}

export default BooksCollection