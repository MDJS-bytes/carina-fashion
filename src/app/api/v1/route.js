import { NextRequest, NextResponse } from 'next/server'
import { data } from '@/_utils/testfile'

export async function GET(request) {

  const url = request.nextUrl
  return NextResponse.json({
    status: 200,
    data: "This is the data of the second route request.",
    maindata : data
  })
}