import connectMongoDB from '@/libs/mongodb';
import Job from '@/models/jobs';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newCompanyName: company_name } =
    await request.json();
  await connectMongoDB();
  await Job.findByIdAndUpdate(id, { title, company_name });
  return NextResponse.json({ message: 'Job updated' }, { status: 200 });
}
