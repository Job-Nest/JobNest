import connectMongoDB from '@/libs/mongodb';
import Job from '@/models/jobs';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { title, company_name } = await request.json();
  await connectMongoDB();
  await Job.create({ title, company_name });
  return NextResponse.json({ message: 'Job Created!' }, { status: 200 });
}

export async function GET(request) {
  await connectMongoDB();
  const jobs = await Job.find();
  // console.log("jobs:", jobs);
  return NextResponse.json({ jobs }, { status: 200 });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Job.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Job Deleted' }, { status: 200 });
}
