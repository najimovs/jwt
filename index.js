import express from "express"
import jwt from "jsonwebtoken"

const users = {
	bro: "1234",
	ali: "nolbeshellibirnol",
	rano: "1234",
}

const secret = "1234"

const payloadForBro = {
	username: "bro",
	isAdmin: true,
}

const token = jwt.sign( payloadForBro, secret, { expiresIn: 10 } )

console.log( "Imm.", jwt.verify( token, secret ) )

setTimeout( () => {

	console.log( "Aft. 15 sec.", jwt.verify( token, secret ) )

}, 15_000 )

const app = express()

const secretData = [ 1, 2, 3, 4, 5 ]

app.get( "/secret-data", ( req, res ) => {

	res.send( secretData )
} )

app.listen( 3_000, () => console.info( ":3000" ) )
