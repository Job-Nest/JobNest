import connectMongoDB from '@/libs/mongodb';
import Job from '@/models/jobs';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { title, company_name } = await request.json();
  await connectMongoDB();
  await Job.create({ date, title, company_name, last_action, source, app_url });
  return NextResponse.json({ message: 'Job Created!' }, { status: 200 });
}

export async function GET(request) {
  await connectMongoDB();
  try {
    const jobs = await Job.find();
    return NextResponse.json({ jobs }, { status: 200 });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Job.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Job Deleted' }, { status: 200 });
}
