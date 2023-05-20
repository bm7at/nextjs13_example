import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

/*
export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public/test.txt')
  const file = fs.readFileSync(filePath)
  const fileName = 'sample.pdf' // whatever your file name is

  res.setHeader('Content-Disposition', `attachment; filename=${fileName}`)
  res.setHeader('Content-Type', 'application/pdf')
  res.send(file)
}
*/
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public/test.txt')
    const file = fs.readFileSync(filePath)
    // const fileName = 'sample.pdf'

    //res.status(200).json(items)
    /*
    NextResponse.setHeader(
      'Content-Disposition',
      `attachment; filename=${fileName}`
    )
    */
    return NextResponse.send(file)
  } catch (error) {
    // res.status(500).json({ error: 'Error fetching data from MongoDB' })
  }
}
