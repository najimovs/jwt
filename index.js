import express from "express"
import jwt from "jsonwebtoken"

const users = {
	bro: "1234",
	ali: "nolbeshellibirnol",
	rano: "r",
}

const JWT_SECRET = "1234"

const app = express()

app.use( express.json() )

const secretData = [ 1, 2, 3, 4, 5 ]

app.post( "/login", ( req, res ) => {

	const { username, password } = req.body

	if ( !username || !password ) {

		res.status( 400 ).send( { message: "username and password MUST be included in body" } )

		return
	}

	// if ( users[ username ] === undefined || users[ username ] !== password ) {

	// 	res.status( 401 ).send( { message: "wrong username or password" } )

	// 	return
	// }

	if ( users[ username ] === undefined ) {

		res.status( 401 ).send( { message: "username not found" } )

		return
	}

	if ( users[ username ] !== password ) {

		res.status( 401 ).send( { message: "wrong password" } )

		return
	}

	const JWT_TOKEN = jwt.sign( {}, JWT_SECRET, { expiresIn: 60 } )

	res.send( { message: "OK", accessToken: JWT_TOKEN } )
} )

app.get( "/secret-data", ( req, res ) => {

	const accessToken = req.headers.access_token

	try {

		jwt.verify( accessToken, JWT_SECRET )

		res.send( secretData )

		return
	}
	catch( err ) {

		console.log( err )
	}

	res.send( {} )
} )

app.listen( 3_000, () => console.info( ":3000" ) )
