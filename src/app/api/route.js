import { NextRequest, NextResponse } from 'next/server'

export async function GET(request) {

  const url = request.nextUrl
  return NextResponse.json({ message: 'Success', url: url.href})
}