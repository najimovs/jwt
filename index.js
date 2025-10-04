import express from "express"

const app = express()

const secretData = [ 1, 2, 3, 4, 5 ]

app.get( "/secret-data", ( req, res ) => {

	res.send( secretData )
} )

app.listen( 3_000, () => console.info( ":3000" ) )
