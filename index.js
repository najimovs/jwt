import express from "express"
import jwt from "jsonwebtoken"

const users = {
	bro: "1234",
	ali: "nolbeshellibirnol",
	rano: "r",
}

// const secret = "1234"

// const payloadForBro = {
// 	username: "bro",
// 	isAdmin: true,
// }

// const token = jwt.sign( payloadForBro, secret, { expiresIn: 10 } )

// console.log( "Imm.", jwt.verify( token, secret ) )

// setTimeout( () => {

// 	console.log( "Aft. 15 sec.", jwt.verify( token, secret ) )

// }, 15_000 )

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

	res.send( { message: "OK" } )
} )

app.get( "/secret-data", ( req, res ) => {

	res.send( secretData )
} )

app.listen( 3_000, () => console.info( ":3000" ) )
