//import nextConnect from 'next-connect'
//import { getServerSession } from 'next-auth/next'

//import { authOptions } from '../api/auth/[...nextauth]/route'
//working

import { NextResponse } from 'next/server'

//import client from "../../lib/mongodb";
import { getConnectedClient } from '../lib/mongodb'

//const handler = nextConnect()

export async function GET() {
  try {
    /*
    const session = await getServerSession(req, res, authOptions)

    if (session) {
      */
    const client = await getConnectedClient()

    const collection = client.db().collection('data')

    const items = await collection.find().toArray()

    //res.status(200).json(items)

    return NextResponse.json({ items })
    /*
    } else {
      NextResponse.send({
        error:
          'You must be signed in to view the protected content on this page.'
      })
    }
*/
  } catch (error) {
    NextResponse.status(500).json({ error: 'Error fetching data from MongoDB' })
  }
}

//Test Variante
/*
handler.get(async function GET(req, res) {
  try {
    const client = await getConnectedClient()

    const collection = client.db().collection('data')

    const items = await collection.find().toArray()
    res.status(200).json(items)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from MongoDB' })
  }
})

export default handler
*/
